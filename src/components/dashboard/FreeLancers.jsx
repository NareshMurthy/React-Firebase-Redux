import React from "react";
import FreeLancerCard from "./FreeLancerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./styles.css";
const FreeLancers = ({ freelancers, auth, width }) => {
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
    },
    {
      age: 24,
      available: true,
      firstName: "Angelina",
      lastName: "Jolie",
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

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  const Cards = freelancers => {
    if (width > 800) {
      return freelancers.map((freelancer, index) => (
        <FreeLancerCard key={index} freelancers={freelancer}></FreeLancerCard>
      ));
    }
  };

  const isLoading = () => {
    if (!freelancers || freelancers.length === 0) {
      return <div>No FreeLancers available...</div>;
    } else {
      return <Slider {...settings}>{Cards(freelancers)}</Slider>;
    }
  };

  return isLoading();
};

export default FreeLancers;
