import React from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import Title from "../Title/Title";

const Calender = () => {
  const testimonials = [
    {
      quote:
        "What I loved most was the community. Everyone was encouraging, from runners to organizers. It felt like we were part of something big.",
      name: "Mohammad Imran",
      designation: "Half-Marathon Finisher – Dhaka 2024",
      src: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Running the Bangabandhu Dhaka Marathon was an unforgettable experience. The crowd support, organization, and route were amazing. Truly world-class!",
      name: "Ayesha Rahman",
      designation: "Marathoner from Dhaka, Bangladesh",
      src: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0aWZ1bCUyMHdvbWFufGVufDB8fDB8fHww",
    },
    {
      quote:
        "The Klondike Ultra tested my limits in the best way possible. Beautiful trails, great volunteers, and a finish line I’ll never forget.",
      name: "Chris Anderson",
      designation: "Ultra Runner from Alberta, Canada",
      src: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Gaspesia 100 was my first ultra, and it felt like running through a postcard. Every step was tough, but so rewarding.",
      name: "Julie Tremblay",
      designation: "Trail Runner from Quebec, Canada",
      src: "https://images.unsplash.com/photo-1548637724-cbc39e0c8d3b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      quote:
        "This marathon changed my life. I trained for months, and crossing the finish line was pure joy. Already signed up for next year!",
      name: "Emily Carter",
      designation: "Recreational Runner from New York, USA",
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="my-10 dark:bg-slate-900">
      <Title
        title={"Voices of the runners"}
        tagline={"Every mile tells a story"}
      />

      <div data-aos="fade-down" data-aos-duration="1000" className="mt-10">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Calender;
