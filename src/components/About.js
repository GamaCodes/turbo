import React from "react";
import Image from "react-bootstrap/Image";

export default function About() {
  return (
    <div className="about-contain" id="about">
      <h2 className="about-h2">¿Quiénes somos?</h2>
      <section className="about-card">
        <Image src="/3.jpg" roundedCircle className="about-img" />
        <p>
          Somos una agencia de publicidad y relaciones públicas que brinda
          servicios profesionales de diseño e imagen corporativa, marketing,
          telemarketing y publicidad; Diseño de web, diseño de newsletter,
          desarrollo de redes sociales, posicionamiento de web, cartelera en vía
          publica, publicidad de medios de transporte público, y diseño gráfico
          publicitario.
        </p>
      </section>

      <section className="about-card">
        <Image src="/2.jpg" roundedCircle className="about-img" />
        <p>
          Somos un equipo de trabajo formado por Computólogos, Informáticos,
          Mercadólogos, Analistas, Publicitas, Asesores de Negocios y
          Administradores, pero principalmente unidos por una sola causa: la
          pasión por la tecnología y la vocación del servicio hacía el
          desarrollo de las empresas y negocios en internet.
        </p>
      </section>

      <section className="about-card">
        <Image src="/1.jpg" roundedCircle className="about-img" />
        <p>
          Al lograr un concepto creativo bien definido y orientado a una
          solución integral de la marca. Nuestras estrategias en marketing
          digital, publicidad on-line, redes sociales, aplicaciones, juegos,
          desarrollos web y animación 3D nos hacen un equipo de trabajo que
          administra e implementar estrategias 360º. Generando campañas de
          impacto y trascendencia para el consumidor.
        </p>
      </section>

      <section className="about-card">
        <Image src="/4.jpg" roundedCircle className="about-img" />
        <p>
          Nos hemos consolidado como pioneros en servicios web, páginas, tiendas
          virtuales, desarrollos, aplicaciones, posicionamiento, campañas en
          Google, Facebook y Redes Sociales. Cambiamos al mismo ritmo que la
          tecnología evoluciona, para ofrecerte estrategias con resultados
          mensurables y de buenos retornos de inversión.
        </p>
      </section>
    </div>
  );
}
