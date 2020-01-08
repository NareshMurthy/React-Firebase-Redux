import React from "react";
import faker from "faker";
import { Button } from "react-md";
import "./styles.css";
const FreeLancerCard = ({ freelancers }) => {
  let { firstName, skills, age, available, role } = freelancers;
  let image = faker.image.imageUrl();
  let description = () => {
    return (
      <span>
        Skills:{"  "}
        {skills.map((skill, index) => (
          <small key={index}>{skill} </small>
        ))}
      </span>
    );
  };

  return (
    <div className="freelancer-card">
      <img
        src={image}
        alt={firstName}
        style={{ height: "300px", width: "300px" }}
      />
      <div className="overlay">
        <div>
          <h4>{firstName}</h4>
          <h4>{role}</h4>
        </div>
        <Button raised primary>
          Hire
        </Button>
      </div>
    </div>
  );
};

export default FreeLancerCard;
