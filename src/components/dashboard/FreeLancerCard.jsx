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
    <Card className="freelancer-card md-cell md-cell--6 md-cell--8-tablet">
      <Media>
        <img
          src={image}
          alt={firstName}
          // style={{ width: "600", height: "337", section: "nature" }}
        />
        <MediaOverlay>
          <CardTitle title={firstName} subtitle={role}>
            <Button className="md-cell--right" icon>
              Hire
            </Button>
          </CardTitle>
        </MediaOverlay>
      </Media>
    </Card>
  );
};

export default FreeLancerCard;
