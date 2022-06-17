import React from "react";
import { Grid, Card, Row, Col, Avatar, Text } from "@nextui-org/react";
import { IoLink, IoLogoGithub } from "react-icons/io5";

const projectsGithub = [
  {
    title: "MileniumTick",
    gitHub: "https://github.com/MileniumTick/react-gifexpertapp",
    project: "https://mileniumtick.github.io/react-gifexpertapp/",
  },
  {
    title: "MileniumTick",
    gitHub:
      "https://github.com/MileniumTick/SolicitudMateriales/tree/main/SolicitudMateriales",
    project:
      "https://github.com/MileniumTick/SolicitudMateriales/tree/main/SolicitudMateriales",
  },
  {
    title: "MileniumTick",
    gitHub: "https://github.com/MileniumTick/vacation_request",
    project: "https://github.com/MileniumTick/vacation_request",
  },
];

export default function CardProjects() {
  return projectsGithub.map(({ title, gitHub, project }) => (
    <Grid xs={6} key={title + gitHub}>
      <Card variant="bordered">
        <Card.Header>
          <Row align="center" gap={1} fluid="false">
            <Col>
              <Avatar
                squared
                bordered
                width={90}
                src={`https://unavatar.io/github/${title}`}
              />
            </Col>
            <Col>
              <Text h6>{title}</Text>
              <Row css={{ marginLeft: "$1" }}>
                <Text>
                  <a href={gitHub} target={"_blank"} rel="noreferrer">
                    <IoLogoGithub color="white" size={26} />
                  </a>
                </Text>
                <Text>
                  <a href={project} target={"_blank"} rel="noreferrer">
                    <IoLink color="white" size={26} />
                  </a>
                </Text>
              </Row>
            </Col>
          </Row>
        </Card.Header>
      </Card>
    </Grid>
  ));
}
