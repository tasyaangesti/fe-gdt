export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto bg-white mt-10 rounded-sm p-4">
      {/* special day */}
      <div className="flex flex-col md:flex-row bg-[#FFC045] h-auto md:h-[200px] rounded-md mb-4 overflow-hidden">
        {/* image */}
        <div className="flex-shrink-0">
          <img
            src="/specialday.png"
            alt="Special Day"
            className="w-full h-auto md:h-full object-cover p-3"
          />
        </div>

        {/* content */}
        <div className="flex flex-col p-4 md:p-6 gap-4 md:gap-6 tracking-wide flex-1">
          <h1 className="text-5xl sm:text-2xl md:text-2xl font-semibold">
            PAY DAY SALE!!
          </h1>
          <p className="text-base md:text-lg font-medium text-[#61646B]">
            Nikmati promo spektakuler{" "}
            <span className="text-[#0A91AB]">idshop</span> setiap tanggal 25!
          </p>
          <button className="rounded-md bg-[#0A91AB] text-[#ffff] px-6 py-2 hover:shadow-lg transition duration-200 w-full sm:-mt-3 lg:mt-2">
            Ikuti Event
          </button>
        </div>
      </div>

      {/* discount */}
      <div className="flex flex-col md:flex-row bg-[#0A91AB] h-auto md:h-[200px] rounded-md mb-4 overflow-hidden">
        {/* image */}
        <div className="flex-shrink-0">
          <img
            src="/diskon.png"
            alt="Diskon"
            className="w-full h-auto md:h-full object-cover p-3"
          />
        </div>
        {/* content */}
        <div className="flex flex-col p-4 md:p-6 gap-4 md:gap-6 tracking-wide flex-1">
          <h1 className="text-4xl sm:text-2xl md:text-2xl font-semibold text-[#FFC045]">
            GRATIS ONGKIR 50%
          </h1>
          <p className="text-base md:text-lg text-white">
            Klaim voucher gratis ongkos kirim kamu.
          </p>
          <button className="rounded-md bg-[#FFC045] text-[#ffff] px-6 py-2 hover:shadow-lg transition duration-200 w-full sm:-mt-3 lg:mt-2">
            Ikuti Event
          </button>
        </div>
      </div>
    </div>
  );
}
