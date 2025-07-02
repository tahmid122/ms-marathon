# 💻 MS MARATHON Server 💻

---

## 📢 Operations

### Marathons part

- **GET** request - `/marathons` --- get all marathons based on user email
- **GET** request - `/all-marathons` --- get all marathons conditionally (sort or all)
- **GET** request - `/limited-marathons` --- get limited marathons conditionally
- **GET** request - `/specific-marathons/` --- get a specific marathon details by id
- **POST** request - `/marathons` --- create new marathon
- **PUT** request - `/marathons` --- update an existing marathon by id
- **DELETE** request - `/marathons` --- delete a marathon by id

### Participants/Registration part

- **GET** request - `/participants` --- get registration details for a specific participant by email
- **GET** request - `/marathon/participants` --- get all the participants details for a specific marathon
- **POST** request - `/participants` --- create new registration details of participant
- **PUT** request - `/participants` --- update an existing participant registration details
- **DELETE** request - `/participants` --- delete a specific participant registration details by id
- **GET** request - `/total-numbers` --- get the number of marathons and applied marathons for a specific user

I did'nt use params for getting id or other. I used query for every operation.
**Example:** `http://exampleapi.com?id=12345&email=example@example.com`

> So for every operation which are need id and email, send email and id by query.

## 🛠️ Packages

- **[MongoDB](https://www.mongodb.com/)**
- **[cors](https://www.npmjs.com/package/cors)**
- **[dotenv](https://www.npmjs.com/package/dotenv)**
- **[express.js](https://expressjs.com/)**
- **[nodemon](https://www.npmjs.com/package/nodemon)**
- **[firebase-admin](https://www.npmjs.com/package/firebase-admin)**

## 🚀 Deployment

- **[Vercel](https://vercel.com/)**

## 📝Author

- Name: **Tahmid Alam**
- GitHub: [@tahmid122](www.github.com/tahmid122)
- Email: <mdtahmidalam122@gmail.com>
