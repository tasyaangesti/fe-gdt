import { useState } from "react";
import Carousel from "./section/Carousel";
import Kategori from "./section/Kategori";
import Topup from "./section/Topup";

const items = [
  "Pulsa",
  "Paket Data",
  "Listrik PLN",
  "Uang Elektronik",
  "Air PDAM",
];

const nominalOptions = [
  { value: "10000", label: "10.000" },
  { value: "20000", label: "20.000" },
  { value: "50000", label: "50.000" },
  { value: "100000", label: "100.000" },
];

const paketDataOptions = [
  { value: "20000", label: "Paket Seminggu - 20.000" },
  { value: "50000", label: "Paket Sebulan - 50.000" },
  { value: "78000", label: "Paket Bulanan OMG - 78.000" },
  { value: "54000", label: "Paket Berkah - 54.000" },
];

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
      <Carousel
        slides={slides}
        currentIndex={currentIndex}
        goToNext={goToNext}
        goToPrev={goToPrev}
        goToSlide={goToSlide}
      />

      <Kategori />
      <Topup
        items={items}
        nominalOptions={nominalOptions}
        paketDataOptions={paketDataOptions}
      />
    </div>
  );
}
