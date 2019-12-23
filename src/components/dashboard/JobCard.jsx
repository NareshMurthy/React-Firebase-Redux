import React from "react";

import { Card, Icon } from "semantic-ui-react";
import moment from "moment";

import "./styles.css";
const JobCard = ({
  jobId,
  shortDescription,
  description,
  finishDate,
  attachments,
  freelancers,
  createdAt
}) => {
  console.log(createdAt);
  return (
    <Card>
      <Card.Content header={shortDescription} />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name="calendar" />
        {createdAt.seconds}
      </Card.Content>
    </Card>
  );
};

export default JobCard;
