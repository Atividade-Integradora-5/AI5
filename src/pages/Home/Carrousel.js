import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import { NavLink } from "react-router-dom";

function Carrosel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={4000}
      autoPlay={true}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {// Slide 1
      }
      <div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            width: "100%",
            alignItems:"center",
          }}
        >
          <img
            alt="criança comendo com os pais"
            className="imgSlides"
            src="https://www.uniftc.edu.br/wp-content/uploads/2022/07/Estudante-de-Nutricao-da-UniFTC-realiza-orientacao-gratuita-sobre-alimentacao-infantil.jpg"
          ></img>
          <div className="textContainer">
          <div className="textObj">
            <h3>Inspirar Criatividade Alimentar</h3>
            <p>
            Nosso principal objetivo é inspirar pais, cuidadores e crianças a explorar novas e divertidas maneiras de se alimentar. Queremos mostrar que a alimentação saudável pode ser excitante, colorida e cheia de diversão!
            </p>
          </div>
          </div>
        </div>
      </div>

{// Slide 2
      }
  <div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            width: "100%",
            alignItems:"center",
          }}
        >
          <img
            alt="criança comendo com os pais"
            className="imgSlides"
            src="https://itscool.srv.br/wp-content/uploads/2020/08/dicas-alimentacao-saudavel-para-criancas.jpg"
          ></img>
          <div className="textContainer">
          <div className="textObj">
            <h3>Promover Escolhas Nutritivas</h3>
            <p>
            Buscamos promover escolhas alimentares nutritivas por meio de ideias inovadoras e criativas para refeições e lanches. Queremos mostrar que é possível tornar os alimentos saudáveis ​apetitosos e atraentes para as crianças, incentivando hábitos alimentares saudáveis desde cedo.
            </p>
          </div>
          </div>
        </div>
      </div>

{// Slide 3
      }
      <div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            width: "100%",
            alignItems:"center",
          }}
        >
          <img
            alt="criança comendo com os pais"
            className="imgSlides"
            src="https://jornadaedu.com.br/wp-content/uploads/2020/10/cardapio-infantil.png"
          ></img>
          <div className="textContainer">
          <div className="textObj">
            <h3>Estimular a Participação das Crianças</h3>
            <p>
            Incentivamos a participação ativa das crianças no processo de preparação e escolha dos alimentos. Queremos que elas se envolvam na criação de suas próprias refeições, tornando a experiência alimentar mais envolvente e divertida.
            </p>
          </div>
          </div>
        </div>
      </div>

{// Slide 4
      }
      <div>
        <div
          style={{
            textAlign: "center",
            height: "60vh",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavLink to="/dicas" style={{color:'inherit', textDecoration:'none'}}>
            <h1>
              Clique aqui para ir para nossa Aba de dicas de pratos divertidos!
            </h1>
            </NavLink>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Carrosel;
