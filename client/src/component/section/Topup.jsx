import React, { useState } from "react";

export default function Topup({ items, nominalOptions, paketDataOptions }) {
  const [active, setActive] = useState(items[0]);

  const InputNominal = ({ placeholder }) => (
    <div className="relative flex-1">
      <input
        className="border rounded-md p-2 pl-12 w-full"
        type="tel"
        placeholder={placeholder}
      />
      <img
        src="/tel.png"
        alt="phone icon"
        className="absolute top-2 left-2 w-6 h-6"
      />
    </div>
  );

  const SelectNominal = ({ options }) => (
    <div className="relative flex-1 pt-3 lg:-mt-3 md:-mt-3">
      <select
        className="border rounded-md p-2 pr-12 w-full appearance-none"
        id="nominal"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <img
        src="/button-icon-arrow.png"
        alt="arrow icon"
        className="absolute top-[22px] right-2 w-6 h-6"
      />
    </div>
  );

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white mt-10 rounded-sm p-4">
      {/* header */}
      <div className="">
        <h1 className="text-black font-semibold">Top Up dan Tagihan</h1>
      </div>

      {/* sub title */}
      <div className="mt-2">
        <div className="flex items-center">
          {items.map((item, index) => (
            <div
              key={item}
              onClick={() => handleClick(item)}
              className={`w-80 text-center border-b-2 ${
                active === item
                  ? "border-[#0A91AB] text-[#0A91AB]"
                  : "border-gray-300 text-[#61646B]"
              } ${index >= 2 ? "hidden md:block" : ""}`}
            >
              <h1
                className={`font-semibold ${
                  active === item ? "text-[#0A91AB]" : "text-[#61646B]"
                } px-1.5 py-1.5`}
              >
                {item}
              </h1>
            </div>
          ))}
          <div className="md:hidden">
            <button className="focus:outline-none">
              <img src="/Button-Icon.png" alt="button" className="w-36 h-10" />
            </button>
          </div>
        </div>
      </div>

      {active === "Pulsa" && (
        <div className="flex flex-col md:flex-row md:gap-5 mt-6 bg">
          <InputNominal placeholder="Nomor Telepon" />
          <SelectNominal options={nominalOptions} className="" />
          <div className="flex items-center mt-4 md:mt-0 flex-shrink-0">
            <button className="rounded-md bg-[#FFFFFF] border-2 border-[#0A91AB] text-[#0A91AB] font-semibold px-6 py-2 hover:shadow-lg hover:drop-shadow transition duration-200 w-full md:w-auto">
              Beli
            </button>
          </div>
        </div>
      )}

      {active === "Paket Data" && (
        <div className="flex flex-col md:flex-row md:gap-5 mt-6">
          <InputNominal placeholder="Nomor Telepon" />
          <SelectNominal options={paketDataOptions} />
          <div className="flex items-center mt-4 md:mt-0 flex-shrink-0">
            <button className="rounded-md bg-[#FFFFFF] border-2 border-[#0A91AB] text-[#0A91AB] font-semibold px-6 py-2 hover:shadow-lg hover:drop-shadow transition duration-200 w-full md:w-auto">
              Beli
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
