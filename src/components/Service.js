import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Service() {
  return (
    <div className="service-contain" id="service">
      <h2 className="about-h2">Servicios</h2>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src="/001.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3 className="service-h3">Monitoreo Web</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/002.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3 className="service-h3">Desarrollo Digital</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/03.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3 className="service-h3">Estrategia Digital</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/04.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3 className="service-h3">Laboratorio Digital</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br />

      <img className="service-svg" src="/a.svg" alt="First slide" />
      <Card>
        <Card.Header className="service-card">Monitoreo Web</Card.Header>
        <Card.Body>
          <Card.Title>“Oímos lo que los usuarios necesitan”</Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item className="service-list">
                Análisis de data.
              </ListGroup.Item>
              <ListGroup.Item>Influenciadores analizados.</ListGroup.Item>
              <ListGroup.Item className="service-list">
                Análisis de competencia.
              </ListGroup.Item>
              <ListGroup.Item>Inteligencia de negocio.</ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      <img className="service-svg" src="/b.svg" alt="First slide" />
      <Card>
        <Card.Header className="service-card">Desarrollo Digital</Card.Header>
        <Card.Body>
          <Card.Title>"En la programación existe la creatividad"</Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item className="service-list">
                Desarrollo Web.
              </ListGroup.Item>
              <ListGroup.Item>Landing Pages.</ListGroup.Item>
              <ListGroup.Item className="service-list">
                Web Services.
              </ListGroup.Item>
              <ListGroup.Item>Apps & Videojuegos.</ListGroup.Item>
              <ListGroup.Item className="service-list">
                Diseño Interactivo.
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      <img className="service-svg" src="/c.svg" alt="First slide" />
      <Card>
        <Card.Header className="service-card">Estrategia Digital</Card.Header>
        <Card.Body>
          <Card.Title>
            “Nuestra metodología se enfoca en resultados y retorno de inversión”
          </Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item className="service-list">
                Creación de Proyecto.
              </ListGroup.Item>
              <ListGroup.Item>Administración de Pauta Digital.</ListGroup.Item>
              <ListGroup.Item className="service-list">
                Mercadotecnia de contenidos.
              </ListGroup.Item>
              <ListGroup.Item>Administración de Social Media.</ListGroup.Item>
              <ListGroup.Item className="service-list">
                Funnel de Ventas y Reporte.
              </ListGroup.Item>
              <ListGroup.Item>Hallazgos y recomendaciones.</ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      <img className="service-svg" src="/d.svg" alt="First slide" />
      <Card>
        <Card.Header className="service-card">Laboratorio Digital</Card.Header>
        <Card.Body>
          <Card.Title>
            "La trascendencia del mensaje radica en su contenido"
          </Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item className="service-list">
                Ilustración.
              </ListGroup.Item>
              <ListGroup.Item>Diseño gráfico & editorial.</ListGroup.Item>
              <ListGroup.Item className="service-list">
                Product Shot.
              </ListGroup.Item>
              <ListGroup.Item>Animatics.</ListGroup.Item>
              <ListGroup.Item className="service-list">
                Animación 2D & 3D.
              </ListGroup.Item>
              <ListGroup.Item>Videos Corporativos.</ListGroup.Item>
              <ListGroup.Item className="service-list">Drones</ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      <img className="service-svg" src="/e.svg" alt="First slide" />
    </div>
  );
}
