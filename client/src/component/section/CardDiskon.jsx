export default function CardProductDiskon() {
  const products = [
    {
      name: "Nama Produk",
      price: "Rp10.900",
      image: "/book.png",
      discount: "-50%",
    },
    {
      name: "Nama Produk",
      price: "Rp120.899",
      image: "/women-shoes.png",
      discount: "-20%",
    },
    {
      name: "Nama Produk",
      price: "Rp67.402",
      image: "/t-shirt.png",
      discount: "-70%",
    },
    {
      name: "Nama Produk",
      price: "Rp49.909",
      image: "/man-shoes.png",
      discount: "-10%",
    },
    {
      name: "Nama Produk",
      price: "Rp80.128",
      image: "/kitchen.png",
      discount: "-60%",
    },
    {
      name: "Nama Produk",
      price: "Rp59.093",
      image: "/aksesoris.png",
      discount: "-70%",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto bg-white mt-10 rounded-sm p-4">
      {/* header */}
      <div className="flex justify-between">
        <h1 className="text-black font-semibold text-xl">Diskon Hari Ini</h1>
        <h1 className="font-semibold text-[#0A91AB] cursor-pointer">
          Lihat Semua
        </h1>
      </div>

      {/* card */}
      <div className="pt-[35px] flex gap-[45px] overflow-x-auto pl-[20px]">
        {products.map((product, index) => (
          <div key={index} className="flex-shrink-0">
            {/* nominal dan image */}
            <div className="relative inline-block w-full">
              {/* image */}
              <img
                src={product.image}
                alt={`Product ${product.name}`}
                className="w-[165px] h-auto object-cover rounded-sm"
              />

              {/* nominal diskon */}
              <div className="absolute top-[-10px] right-[-18px] bg-[#0A91AB] text-white w-[65px] text-center">
                <span>{product.discount}</span>
              </div>
            </div>

            {/* detail product */}
            <div className="mt-[12px]">
              <h1 className="text-[#61646B]">{product.name}</h1>
              <p className="font-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* arrow untuk slider */}
      <div className="absolute right-[20px] top-[50%] transform -translate-y-1/2 bg-[#0A91AB] w-[50px] h-[50px] text-center flex items-center justify-center rounded-md cursor-pointer">
        <img src="/icon-arrow-rigt.png" alt="Arrow Right" />
      </div>
    </div>
  );
}
