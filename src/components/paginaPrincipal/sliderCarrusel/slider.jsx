import Carousel from "react-bootstrap/Carousel";
import "./slider.css";

function Slider() {
  return (
    <Carousel fade data-aos="fade-up">
      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="../../../src/assets/ImgenesSliderPrincipal/rollingComida05.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="../../../src/assets/ImgenesSliderPrincipal/rollingComida06.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="../../../src/assets/ImgenesSliderPrincipal/rollingComida07.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="../../../src/assets/ImgenesSliderPrincipal/rollingComida08.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="../../../src/assets/ImgenesSliderPrincipal/rollingComida09.jpg"
          alt="four slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
