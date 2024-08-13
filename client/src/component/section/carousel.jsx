export default function Carousel({
  slides,
  currentIndex,
  goToNext,
  goToPrev,
  goToSlide,
}) {
  return (
    <>
      {/* carousel */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          {/* carousel wrapper */}
          <div className="relative h-[500px] md:h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <img
                  src={slide}
                  className="object-cover w-full h-full"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* slider indicators */}
          <div className="flex absolute bottom-5 left-5 z-30 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gray-400" : "bg-gray-300"
                } hover:bg-gray-400 focus:outline-none transition`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* button sliders */}
          <div>
            <button
              type="button"
              className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-12 h-12 bg-[#0A91AB] focus:outline-none transition"
              onClick={goToPrev}
              aria-label="Previous Slide"
            >
              <img src="/icon-arrow-left.png" alt="" />
            </button>
            <button
              type="button"
              className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-12 h-12 bg-[#0A91AB] focus:outline-none transition"
              onClick={goToNext}
              aria-label="Next Slide"
            >
              <img src="/icon-arrow-rigt.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
