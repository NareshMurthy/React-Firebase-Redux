import React from "react";
// import {  } from "semantic-ui-react";
import faker from "faker";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Media,
  MediaOverlay
} from "react-md";
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

  return (
    <div className="freelancer-card">
      <img
        src={image}
        alt={firstName}
        style={{ height: "30vh", width: "100%" }}
      />
      <div className="overlay">
        <h4>{firstName}</h4>
        <h4>{role}</h4>
        <Button raised primary className="md-cell--right primary">
          Hire
        </Button>
      </div>
    </div>
  );
};

export default FreeLancerCard;
