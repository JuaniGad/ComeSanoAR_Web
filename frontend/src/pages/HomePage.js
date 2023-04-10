import React from "react";
import "../styles/HomeStyle.css";
import Caracteristicas from "../components/Caracteristicas";
import CategoriaViandas from "../components/CategoriaViandas";
import PasosParaPedir from "../components/PasosParaPedir";
import Contacto from "../components/Contacto";

export default function HomePage() {
  return (
    <div className="div_c">
      <img src="/ejemplo.jpg" alt="ejemplo" />

      <main className="container">
        <div className="presentacion">
          <p className="titulo">¿SIN GANAS DE COCINAR?</p>
          <section className="info">
            <div className="info_text">
              <p>
                ¡Nosotros tenemos la solución perfecta para ti! Nuestro servicio
                de delivery de viandas saludables, te ofrecemos una amplia
                variedad de opciones nutritivas y sabrosas que se adaptan a tus
                necesidades y gustos. Nos encargamos de preparar cada plato con
                ingredientes frescos y naturales, asegurandonos de que cada
                bocado sea una experiencia única en sabor y calidad. Además,
                puedes estar seguro de que nuestras viandas están hechas con los
                más altos estándares de higiene y seguridad alimentaria, para
                que disfrutes de una comida deliciosa y saludable sin
                preocupaciones.
              </p>

              <p>
                No importa si estás buscando opciones vegetarianas, sin gluten o
                bajas en carbohidratos, nuestro menú se adapta a tus necesidades
                dietéticas y preferencias. Además, con nuestro servicio de
                delivery, puedes disfrutar de tus viandas saludables sin tener
                que salir de casa. Solo tienes que hacer tu pedido en línea y
                nosotros nos encargamos del resto. Así que no esperes más, ¡deja
                que nosotros cocinemos por ti y disfruta de comidas saludables y
                deliciosas sin el estrés de la cocina!
              </p>
            </div>
          </section>

          <section>
            <Caracteristicas />
          </section>

          <section>
            <p className="titulo">NUESTRAS VIANDAS PRÁCTICAS Y SALUDABLES</p>
            <p>Comer rico, sano y casero todos los días nunca fue tan fácil.</p>
            <p>Nosotros nos encargamos de que sean comidas rápidas y sanas.</p>
            <p>A continuación, te presentamos nuestros tipos de viandas.</p>

            <CategoriaViandas />
          </section>

          <section>
            <PasosParaPedir />
          </section>

          <section>
            <Contacto />
          </section>
        </div>
      </main>
    </div>
  );
}
