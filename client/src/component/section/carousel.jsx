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
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-12 h-12 bg-[#0A91AB] focus:outline-none transition"
              onClick={goToNext}
              aria-label="Next Slide"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-[#FFFFFF] mt-10 rounded-sm">
        {/* title */}
        <div className="pt-3 pl-3">
          <h1 className="text-black font-semibold md:block">Kategori</h1>
        </div>

        {/* badges */}
        <div className="mt-2">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 p-4">
            <div className="flex flex-col items-center bg-white p-2 border-b-[3px] border-r-[3px]">
              <img
                src="/property-bag.png"
                alt="Tas"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Tas</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 border-b-[3px] border-r-[3px]">
              <img
                src="/property-dress.png"
                alt="Pakaian Wanita"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Pakaian Wanita</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 border-b-[3px] sm:border-r-[3px] lg:border-r-[3px]">
              <img
                src="/property-t-shirt.png"
                alt="Pakaian Pria"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Pakaian Pria</p>
            </div>

            <div className="flex flex-col items-center bg-white p-2 border-b-[3px] border-r-[3px]">
              <img
                src="/property-woman-shoe.png"
                alt="Sepatu Wanita"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Sepatu Wanita</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 border-b-[3px] border-r-[3px]">
              <img
                src="/property-man-shoe.png"
                alt="Sepatu Pria"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Sepatu Pria</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 border-b-[3px] last:border-r-0">
              <img
                src="/property-hobby.png"
                alt="Hobi"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Hobi</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 border-b-[3px] border-r-[3px] md:border-b-0">
              <img
                src="/property-food-drink.png"
                alt="Makanan dan Minuman"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Makanan dan Minuman</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 border-b-[3px] border-r-[3px] md:border-b-0">
              <img
                src="/property-home-living.png"
                alt="Perlengkapan Rumah"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Perlengkapan Rumah</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 border-b-[3px] sm:border-r-[3px] lg:border-r-[3px] md:border-b-0">
              <img
                src="/property-laptop.png"
                alt="Komputer dan Aksesoris"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Komputer dan Aksesoris</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 sm:border-b-[3px] border-r-[3px] md:border-b-0">
              <img
                src="/property-baby.png"
                alt="Ibu dan Anak"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Ibu dan Anak</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 sm:border-b-[3px] border-r-[3px] md:border-b-0">
              <img
                src="/property-makeup.png"
                alt="Perawatan dan Kecantikan"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Perawatan dan Kecantikan</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 sm:border-b-[3px] md:border-b-0">
              <img
                src="/property-medicine.png"
                alt="Kesehatan"
                className="w-12 h-12 mb-2"
              />
              <p className="text-center text-sm">Kesehatan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
