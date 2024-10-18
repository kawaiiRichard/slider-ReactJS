import { useEffect, useState } from "react";
import "./Slider.css";
import Dot from "../Dot/Dot";

function Slider({ slides, loop, navs, pags, auto, stopMouseHover, delay }) {
  const slideCount = slides.length;

  const [slideIndex, setSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const showPrevSlide = () => {
    if (!stopMouseHover) {
      setSlideIndex((index) => (index - 1 + slideCount) % slideCount);
    }
  };

  const showNextSlide = () => {
    if (!stopMouseHover) {
      setSlideIndex((index) => (index + 1) % slideCount);
    }
  };

  const activateSliderDot = (id) => {
    setSlideIndex(id);
  };

  useEffect(() => {
    let interval;
    if (auto) {
      interval = setInterval(
        () => {
          if (!isHovered) {
            setSlideIndex((index) => (index + 1) % slideCount);
          }
        },
        delay === undefined ? 5000 : delay * 1000
      );
    }

    return () => clearInterval(interval);
  }, [auto, delay, slideCount, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="slider-container">
        {slides.map((item) => (
          <div key={item.id}>
            {item.id === slideIndex + 1 && (
              <>
                <img
                  src={item.img}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  alt=""
                />

                {navs && (
                  <>
                    <button className="prev-btn" onClick={showPrevSlide}>
                      &lt;
                    </button>
                    <button className="next-btn" onClick={showNextSlide}>
                      &gt;
                    </button>
                  </>
                )}

                <h3>{item.text}</h3>
                <div className="num-and-max">{`${item.id}/${slideCount}`}</div>
              </>
            )}
          </div>
        ))}
      </div>
      {pags && (
        <>
          <div className="slider-dots">
            {slides.map((item) => (
              <div key={item.id}>
                <Dot
                  onClick={() => activateSliderDot(item.id - 1)}
                  style={item.id === slideIndex + 1 ? "active" : null}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Slider;
