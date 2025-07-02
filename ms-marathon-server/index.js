require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
//firebase
const admin = require("firebase-admin");
const serviceKey = Buffer.from(process.env.SERVICE_KEY, "base64").toString(
  "utf8"
);
const serviceAccount = JSON.parse(serviceKey);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
//middleware
app.use(cors());
app.use(express.json());
//firebase admin sdk part for token verification
const verifyToken = (req, res, next) => {
  const authHeader = req.headers?.authorization;
  const token = authHeader?.split(" ")[1];
  if (!authHeader || !authHeader.startsWith("Bearer " || !token)) {
    return res.status(401).send("Unauthorized access");
  }
  admin
    .auth()
    .verifyIdToken(token)
    .then((decoded) => {
      if (decoded) {
        req.tokenEmail = decoded.email;
        next();
      }
    })
    .catch((error) => {
      if (error) {
        return res.status(401).send("Unauthorized access");
      }
    });
};
const verifyEmail = (req, res, next) => {
  const email = req.query.email;
  const tokenEmail = req.tokenEmail;
  if (email !== tokenEmail) {
    return res.status(403).send("Forbidden");
  }
  next();
};
//MongoDB part starts
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7bvbn0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const marathonCollections = client
      .db("MSMarathonDB")
      .collection("marathons");
    const participantCollections = client
      .db("MSMarathonDB")
      .collection("participants");
    //marathonCollections part
    //get all marathons based on user email
    app.get("/marathons", verifyToken, verifyEmail, async (req, res) => {
      try {
        const email = req.query.email;
        const query = { email: email };
        const result = await marathonCollections.find(query).toArray();
        res.send(result);
      } catch (error) {
        res.send({ message: error.message });
      }
    });
    //limited marathons conditionally
    app.get("/limited-marathons", async (req, res) => {
      try {
        const limit = req.query.limit;
        if (limit) {
          const result = await marathonCollections.find().limit(6).toArray();
          res.send(result);
        } else {
          res.send({ message: "something went wrong" });
        }
      } catch (error) {
        res.send({ message: error.message });
      }
    });
    //all marathons
    app.get("/all-marathons", verifyToken, verifyEmail, async (req, res) => {
      try {
        const sortValue = parseInt(req.query.sort);
        if (sortValue) {
          const result = await marathonCollections
            .find()
            .sort({ createdAt: sortValue })
            .toArray();
          res.send(result);
        } else {
          const result = await marathonCollections.find().toArray();
          res.send(result);
        }
      } catch (error) {
        res.send({ message: error.message });
      }
    });
    //get a specific marathon details
    app.get(
      "/specific-marathons/",
      verifyToken,
      verifyEmail,
      async (req, res) => {
        try {
          const { id } = req.query;

          const query = { _id: new ObjectId(id) };
          const result = await marathonCollections.findOne(query);
          res.send(result);
        } catch (error) {
          res.send({ message: error.message });
        }
      }
    );
    //create new marathon
    app.post("/marathons", verifyToken, verifyEmail, async (req, res) => {
      const { email } = req.query;
      try {
        const newMarathon = req.body;
        const result = await marathonCollections.insertOne(newMarathon);
        res.send(result);
      } catch (error) {
        res.send({ message: error.message });
      }
    });
    //update an existing marathon
    app.put("/marathons", verifyToken, verifyEmail, async (req, res) => {
      try {
        const { id } = req.query;
        const updatedMarathon = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = { $set: updatedMarathon };
        const result = await marathonCollections.updateOne(filter, updateDoc);
        res.send(result);
      } catch (error) {
        res.send({ message: error.message });
      }
    });
    //delete a marathon
    app.delete("/marathons", verifyToken, verifyEmail, async (req, res) => {
      try {
        const { id } = req.query;
        const query = { _id: new ObjectId(id) };
        const result = await marathonCollections.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.send({ message: error.message });
      }
    });
    //marathonCollections part
    //participantCollections part
    //get registration details for a specific participant
    app.get("/participants", verifyToken, verifyEmail, async (req, res) => {
      try {
        const search = req.query.search;
        const email = req.query.email;
        const query = { email: email };
        if (search) {
          const query = {
            title: { $regex: new RegExp(search, "i") },
            email: req.query.email,
          };
          const result = await participantCollections.find(query).toArray();
          res.send(result);
        } else {
          const result = await participantCollections.find(query).toArray();
          res.send(result);
        }
      } catch (error) {
        res.send({ message: error.message });
      }
    });
    //get specific marathons all participants details
    app.get(
      "/marathon/participants",
      verifyToken,
      verifyEmail,
      async (req, res) => {
        const { id } = req.query;
        const result = await participantCollections
          .find({ marathonId: id })
          .toArray();
        res.send(result);
      }
    );
    //post registration details of participant
    app.post("/participants", verifyToken, verifyEmail, async (req, res) => {
      try {
        const newParticipant = req.body;
        const marathonId = req.body.marathonId;
        const filter = { _id: new ObjectId(marathonId) };
        const marathon = await marathonCollections.findOne(filter);
        if (!marathon.participants.includes(req.body.email)) {
          const result = await participantCollections.insertOne({
            ...newParticipant,
            image: marathon.image,
            marathonStart: marathon.marathonStart,
          });
          const updateDoc = {
            $inc: { totalRegistrationCount: +1 },
            $push: { participants: req.body.email },
          };
          await marathonCollections.updateOne(filter, updateDoc);
          res.send(result);
        } else {
          res.send({ message: "You already participated in this marathon" });
        }
      } catch (error) {
        res.send({ message: error.message });
      }
    });
    //update an existing participant registration details
    app.put("/participants", verifyToken, verifyEmail, async (req, res) => {
      try {
        const { firstName, lastName, gender, dob, contactNumber } = req.body;
        const updatedApplication = {
          firstName,
          lastName,
          gender,
          dob,
          contactNumber,
        };
        const filter = { _id: new ObjectId(req.query.id) };
        const updateDoc = { $set: updatedApplication };
        const result = await participantCollections.updateOne(
          filter,
          updateDoc
        );
        res.send(result);
      } catch (error) {
        res.send({ message: error.message });
      }
    });
    //delete a specific participant registration details
    app.delete("/participants", verifyToken, verifyEmail, async (req, res) => {
      try {
        const id = req.query.id;
        const query = { _id: new ObjectId(id) };
        const registrationDetails = await participantCollections.findOne(query);
        const { email, marathonId } = registrationDetails;
        if (registrationDetails) {
          const marathonQuery = { _id: new ObjectId(marathonId) };
          const updateDoc = {
            $pull: { participants: email },
            $inc: { totalRegistrationCount: -1 },
          };
          await marathonCollections.updateOne(marathonQuery, updateDoc);
        }
        const result = await participantCollections.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.send({ message: error.message });
      }
    });
    //participantCollections part

    //get the number of marathons and applied marathons for a specific user
    app.get("/total-numbers", verifyToken, verifyEmail, async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const marathons = await marathonCollections.find(query).toArray();
      const applications = await participantCollections.find(query).toArray();
      res.send({
        marathons: marathons.length,
        applications: applications.length,
      });
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);
//MongoDB part ends

//default
app.get("/", (req, res) => {
  res.send("Server is running....");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
