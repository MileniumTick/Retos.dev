import Head from "next/head";
import CardProjects from "../components/CardProjects";
import {
  Button,
  Text,
  Container,
  Input,
  Spacer,
  Card,
  Grid,
} from "@nextui-org/react";

const projectsGithub = [
  {
    title: "gifExpertApp",
    gitHub: "https://github.com/MileniumTick/react-gifexpertapp",
    project: "https://mileniumtick.github.io/react-gifexpertapp/",
  },
  {
    title: "SolicitudMateriales",
    gitHub:
      "https://github.com/MileniumTick/SolicitudMateriales/tree/main/SolicitudMateriales",
    project:
      "https://github.com/MileniumTick/SolicitudMateriales/tree/main/SolicitudMateriales",
  },
  {
    title: "SolicitudMateriales",
    gitHub: "https://github.com/MileniumTick/vacation_request",
    project: "https://github.com/MileniumTick/vacation_request",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>restos.dev | Retos de programacion</title>
        <meta name="description" content="Retos de programacion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container css={{ marginBlock: "50px" }}>
        <Text h1 css={{ lineHeight: "$sm" }}>
          Sube tu nivel con retos de programacion en
          <Text span> JavaScript</Text>
        </Text>
      </Container>

      <Container css={{ marginBlock: "50px" }}>
        <Text h2>Participaciones</Text>
        <Grid.Container gap={2}>
          <CardProjects />
        </Grid.Container>
      </Container>
      
      <Container css={{ marginBlock: "10px" }}>
        <Card isHoverable variant="bordered">
          <Card.Header>
            <Text h2 css={{ lineHeight: "$sm" }}>
              Suscribete para no perderte ningun reto!
            </Text>
          </Card.Header>
          <Card.Body css={{ textAlign: "center" }}>
            <Text h6>
              Te llegara un correo un aviso cada vez que se publique un nuevo
              reto. Nada de spam! 🙅‍♂️
            </Text>
            <Spacer y={2} />
            <Input
              bordered
              labelPlaceholder="Correo electronico"
              placeholder="Ingresa tu correo electronico"
              css={{ background: "#" }}
            />

            <Spacer y={1} />
            <Button>Suscribirme</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
