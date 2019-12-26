import React from "react";
import { Button } from "semantic-ui-react";
import faker from "faker";

// import "./styles.css";
const FreeLancerCard = ({ freelancers }) => {
  let { firstName, skills, age, available, role } = freelancers;
  let image = faker.image.imageUrl();
  let description = () => {
    return skills.map((skill, index) => <small key={index}>{skill} </small>);
  };

  let extra = () => {
    return available ? <Button color="orange">Hire</Button> : null;
  };

  return (
    <div className="freelancer-card">
      <div className="card  text-dark">
        <img className="card-img" src={image} alt={firstName} />
        <div className="card-img-overlay info">
          <p className="card-title">{firstName}</p>
          <p className="card-text">{role}</p>
          <p className="card-text">{description()}</p>
          <p className="card-text">{extra()}</p>
        </div>
      </div>
    </div>
  );
};

export default FreeLancerCard;
