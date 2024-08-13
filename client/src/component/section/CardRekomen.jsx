export default function CardProductRekomen() {
  const product = [
    {
      imgSrc: "/picture-makeup.png",
      title: "Pinka Lipstick - Red Cheery Bloom",
      price: "Rp120.683",
      discount: "tidak discount",
      sold: "1.5RB Terjual",
    },
    {
      imgSrc: "/picture-makeup-2.png",
      title: "Eye Shadow Mulan - Cold Tone",
      price: "Rp80.837",
      discount: "20%",
      sold: "1RB Terjual",
    },
    {
      imgSrc: "/picture-drink.png",
      title: "Almond Milk - FreshkyMilk",
      price: "Rp54.829",
      discount: "50%",
      sold: "456 Terjual",
    },
    {
      imgSrc: "/picture-tshirt.png",
      title: "Kaos Hitam Bulop - Size M",
      price: "Rp83.092",
      discount: "20%",
      sold: "456 Terjual",
    },
    {
      imgSrc: "/picture-essence.png",
      title: "Reed Diffuser Aromaterapi",
      price: "Rp50.568",
      discount: "10%",
      sold: "10RB+ Terjual",
    },
    {
      imgSrc: "/picture-aksesoris.png",
      title: "Alexa Ring - Titanium Silver Gold",
      price: "Rp93.002",
      discount: "50%",
      sold: "1RB Terjual",
    },
    {
      imgSrc: "/picture-aksesoris-2.png",
      title: "kacamata Baca murah",
      price: "Rp45.903",
      discount: "25%",
      sold: "5RB Terjual",
    },
    {
      imgSrc: "/picture-women-shoes.png",
      title: "Sepatu kerja wanita - Putih",
      price: "Rp110.938",
      discount: "tidak discount",
      sold: "2.1RB Terjual",
    },
    {
      imgSrc: "/picture-women-clothes.png",
      title: "Baju wanita - Hijau Army",
      price: "Rp39.748",
      discount: "10%",
      sold: "6.2RB Terjual",
    },
    {
      imgSrc: "/picture-jeans.png",
      title: "Levis wanita premium",
      price: "Rp320.739",
      discount: "50%",
      sold: "1.5RB Terjual",
    },
    {
      imgSrc: "/picture-food.png",
      title: "Wadah kaca estetik",
      price: "Rp29.478",
      discount: "80%",
      sold: "5RB Terjual",
    },
    {
      imgSrc: "/picture-keyboard.png",
      title: "Mechanical Wireless Keyboard - Visky",
      price: "Rp490.379",
      discount: "10%",
      sold: "9.4RB Terjual",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      {/* header */}
      <div className="flex justify-between items-center">
        <h1 className="text-black font-semibold text-xl">
          Rekomendasi Untuk Kamu
        </h1>
      </div>

      {/* card */}
      <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* card item */}
        {product.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-sm shadow-md">
            {/* nominal dan image */}
            <div className="relative inline-block w-full">
              {/* image */}
              <img
                src={product.imgSrc}
                alt="Product Image"
                className="w-full h-auto object-cover rounded-sm"
              />

              {/* nominal diskon */}
              {product.discount !== "tidak discount" && (
                <div className="absolute top-[-10px] right-[-18px] bg-[#0A91AB] text-white w-[65px] text-center">
                  <span>{product.discount}</span>
                </div>
              )}
            </div>

            {/* detail product */}
            <div className="mt-4">
              <h1 className="text-[#61646B] text-sm font-medium truncate">
                {product.title}
              </h1>
              <p className="font-medium text-lg">{product.price}</p>
              <p className="text-right text-sm font-semibold text-[#61646B] mt-2">
                {product.sold}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
