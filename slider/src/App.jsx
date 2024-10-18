import "./App.css";
import Slider from "./components/Slider/Slider";

function App() {
  const slides = [
    {
      img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
      text: "Caption Text 1",
      id: 1,
    },
    {
      img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
      text: "Caption Text 2",
      id: 2,
    },
    {
      img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      text: "Caption Text 3",
      id: 3,
    },
  ];

  return (
    <>
      <Slider
        slides={slides}
        loop={true}
        navs={true}
        pags={true}
        auto={false}
        stopMouseHover={false}
        delay={3}
      />
    </>
  );
}

export default App;
