import React from "react";
import Copyright from "./../common/Copyright";
import "./styles.css";
// import logo from "../../assets/logo.svg";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
const Footer = () => {
  return (
    <Segment
      vertical
      style={{
        margin: "5em 0em 0em",
        padding: "5em 0em",
        backgroundColor: "rgb(149, 140, 107)"
      }}
    >
      <Container textAlign="center">
        <Grid divided stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Features" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Resources" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <h6>
              <Copyright classNameName="ml-2"></Copyright>
            </h6>
            <small>&copy; 2017-2018</small>
          </Grid.Column>
        </Grid>
        <Divider inverted section />
        <h4>Get It Done</h4>
        {/* <Image centered size="mini" src={logo} /> */}
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
