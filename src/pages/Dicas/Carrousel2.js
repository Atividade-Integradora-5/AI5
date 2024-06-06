import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel2.css";

function Carrosel2() {
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
            src="https://s2.glbimg.com/cpk6LzexlXuAWHGdobrT4HhvpVc=/e.glbimg.com/og/ed/f/original/2016/03/14/10.jpg"
          ></img>
          <div className="textContainer">
          <div className="textObj">
            <p>
            O lanche de peito de peru com queijo branco e tomate pode virar um personagem com a língua para fora.
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
            src="https://s2.glbimg.com/oJxb0X9O72_wUK9R9RoxYC0xY6U=/e.glbimg.com/og/ed/f/original/2016/03/14/9.jpg"
          ></img>
          <div className="textContainer">
          <div className="textObj">
            <p>
            O pão de forma com queijo fica muito mais legal quando transformado em corujinha.
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
            src="https://s2.glbimg.com/jDgoQcR_DecDo-r9SgRjGEFQL48=/e.glbimg.com/og/ed/f/original/2016/03/14/11.jpg"
          ></img>
          <div className="textContainer">
          <div className="textObj">
            <p>
            A criança nem vai perceber que está comendo um lanchinho de peito de peru, tomate, cenoura e milho
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
            justifyContent: "center",
            width: "100%",
            alignItems:"center",
          }}
        >
          <img
            alt="criança comendo com os pais"
            className="imgSlides"
            src="https://s2.glbimg.com/RikFKItZjq7rW_9gkBFT-qAXTCM=/e.glbimg.com/og/ed/f/original/2016/03/14/15.jpg"
          ></img>
          <div className="textContainer">
          <div className="textObj">
            <p>
            Que tal inserir ovo cozido na alimentação do seu filho? É só montar um carrinho de pão para ele se divertir enquanto come.
            </p>
          </div>
          </div>
        </div>
      </div>

      {// Slide 5
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
            src="https://s2.glbimg.com/pFNDLk4EnfeKD37leenmb4kpLws=/e.glbimg.com/og/ed/f/original/2016/03/14/14.jpg"
          ></img>
          <div className="textContainer">
          <div className="textObj">
            <p>
            Crie um sanduíche em forma de peixe com salame, cenoura e pepino.
            </p>
          </div>
          </div>
        </div>
      </div>

      {// Slide 6
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
            src="https://s2.glbimg.com/WHwQy2lyMu5_Heux2gfUAQWSbic=/e.glbimg.com/og/ed/f/original/2016/03/14/12.jpg"
          ></img>
          <div className="textContainer">
          <div className="textObj">
            <p>
            A macarronada fica muito mais divertida com um vampiro estampado
            </p>
          </div>
          </div>
        </div>
      </div>

    </Carousel>
  );
}

export default Carrosel2;
