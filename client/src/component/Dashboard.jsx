import { useState } from "react";
import Carousel from "./section/Carousel";
import Kategori from "./section/Kategori";

export function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ["/Banner-1.png", "/Banner-2.png", "/Banner-3.png"];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="my-10">
      {/* carouser + kategori */}
      <Carousel
        slides={slides}
        currentIndex={currentIndex}
        goToNext={goToNext}
        goToPrev={goToPrev}
        goToSlide={goToSlide}
      />

      <Kategori/>
    </div>
  );
}
