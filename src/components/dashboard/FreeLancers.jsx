import React from "react";
import FreeLancerCard from "./FreeLancerCard";

import "./styles.css";
const FreeLancers = ({ freelancers, auth, width }) => {
  freelancers = [
    {
      age: 21,
      available: true,
      firstName: "Naresh",
      lastName: "Murthy",
      role: "Data Scientist",
      skills: ["Python", "ML", "AI"]
    },
    {
      age: 22,
      available: true,
      firstName: "Navami",
      lastName: "Hiremath",
      role: "Data Scientist",
      skills: ["Python", "ML", "AI"]
    },
    {
      age: 23,
      available: true,
      firstName: "Naomi",
      lastName: "scott",
      role: "Data Scientist",
      skills: ["Python", "ML", "AI"]
    },
    {
      age: 24,
      available: true,
      firstName: "Angelina",
      lastName: "Jolie",
      role: "Data Scientist",
      skills: ["Python", "ML", "AI"]
    },
    {
      age: 24,
      available: true,
      firstName: "Angelina",
      lastName: "Jolie",
      role: "Data Scientist",
      skills: ["Python", "ML", "AI"]
    },
    {
      age: 24,
      available: true,
      firstName: "Angelina",
      lastName: "Jolie",
      role: "Data Scientist",
      skills: ["Python", "ML", "AI"]
    }
  ];

  const Cards = freelancers => {
    // if (width > 800) {
    return freelancers.map((freelancer, index) => (
      <FreeLancerCard key={index} freelancers={freelancer}></FreeLancerCard>
    ));
    // }
  };

  const isLoading = () => {
    if (!freelancers || freelancers.length === 0) {
      return <div>No FreeLancers available...</div>;
    } else {
      return (
        <div id="freelancers" className="freelancers">
          {Cards(freelancers)}
        </div>
      );
    }
  };

  return <div>{isLoading()}</div>;
};

export default FreeLancers;
