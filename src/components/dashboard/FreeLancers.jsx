import React from "react";
import FreeLancerCard from "./FreeLancerCard";
import ReactCardCarousel from "react-card-carousel";

const FreeLancers = ({ freelancers, auth }) => {
  freelancers = [
    {
      age: 21,
      available: true,
      firstName: "Naresh",
      lastName: "Murthy",
      role: "Data Science",
      skills: ["Python", "ML", "AI"]
    },
    {
      age: 22,
      available: true,
      firstName: "Navami",
      lastName: "Hiremath",
      role: "Data Science",
      skills: ["Python", "ML", "AI"]
    },
    {
      age: 23,
      available: true,
      firstName: "Naomi",
      lastName: "scott",
      role: "Data Science",
      skills: ["Python", "ML", "AI"]
    },
    {
      age: 24,
      available: true,
      firstName: "Angelina",
      lastName: "Jolie",
      role: "Data Science",
      skills: ["Python", "ML", "AI"]
    }
  ];

  const Cards = freelancers => {
    return freelancers.map(freelancer => (
      <FreeLancerCard
        key={freelancer.id}
        freelancers={freelancer}
      ></FreeLancerCard>
    ));
  };

  const isLoading = () => {
    if (!freelancers || freelancers.length === 0) {
      return <div>No FreeLancers available...</div>;
    } else {
      console.log(freelancers);
      return (
        <ReactCardCarousel autoplay={true} autoplay_speed={2500} spread="wide">
          {Cards(freelancers)}
        </ReactCardCarousel>
      );
    }
  };

  return (
    <div className="freelancers-carousel">
      {isLoading()}
      <style jsx>{`
        .freelancers-carousel {
          height: 100%;
          widht: 100%;
        }
      `}</style>
    </div>
  );
};

export default FreeLancers;
