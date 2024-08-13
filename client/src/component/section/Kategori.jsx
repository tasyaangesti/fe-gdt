export default function Kategori() {
  return (
    <>
      {/* kategori */}
      <div className="max-w-7xl mx-auto bg-[#FFFFFF] mt-10 rounded-sm">
        {/* title */}
        <div className="pt-3 pl-3">
          <h1 className="text-black font-semibold md:block text-xl">
            Kategori
          </h1>
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
