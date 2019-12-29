import React from "react";
import { Button } from "semantic-ui-react";
import faker from "faker";

// import "./styles.css";
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

  let extra = () => {
    return available ? <Button color="orange">Hire</Button> : null;
  };

  return (
    <div className="freelancer-card">
      <img src={image} alt={firstName} />
      <div className="overlay">
        <p className="title">{firstName}</p>
        <p className="text">{role}</p>
        <p className="text">{description()}</p>

        {extra()}
      </div>
    </div>
  );
};

export default FreeLancerCard;
