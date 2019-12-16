import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import faker from "faker";
const FreeLancerCard = ({ freelancers }) => {
  let { firstName, skills, age, available, role } = freelancers;
  let image = faker.image.imageUrl();
  let description = () => {
    return skills.map(skill => <strong>{skill} </strong>);
  };

  let extra = () => {
    return available ? (
      <Button inverted color="green">
        Hire
      </Button>
    ) : null;
  };

  return (
    <div className="freelancer-card">
      <Card
        color="teal"
        image={image}
        header={firstName}
        meta={role}
        description={description()}
        extra={extra()}
      />
      <style jsx>{`
        .freelancer-card {
        }
      `}</style>
    </div>
  );
};

export default FreeLancerCard;
