import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("Bahasa Indonesia");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const dropdownElement = dropdownRef.current;
    if (dropdownElement) {
      dropdownElement.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (dropdownElement) {
        dropdownElement.removeEventListener("click", handleClickOutside);
      }
    };
  }, []);

  return (
    <div>
      <div className="lg:flex md:flex sm:flex lg:items-center gap-x-[16px] p-[16px] justify-end">
        {/* dropdown */}
        <div className="dropdown inline-block relative" ref={dropdownRef}>
          <button
            className="border border-[#AFB1B6] text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded-lg inline-flex items-center"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <img src="/globe.png" alt="globe" className="mr-3" />
            <span className="mr-1">{selectedLanguage}</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu absolute text-gray-700 dark:text-gray-300 pt-1 border border-b-[1px] border-[#AFB1B6] rounded-lg mt-1">
              <li>
                <a
                  className="bg-white py-2 px-4 w-[215px] block whitespace-no-wrap hover:bg-gray-100"
                  href="#"
                  onClick={() => handleLanguageChange("Bahasa Indonesia")}
                >
                  Bahasa Indonesia
                </a>
              </li>
              <li>
                <a
                  className="bg-white py-2 px-4 block whitespace-no-wrap hover:bg-gray-100"
                  href="#"
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* button */}
        <div className="flex">
          <button className="flex items-center text-[#0A91AB] dark:text-white justify-center px-6 py-2.5 font-semibold">
            Masuk
          </button>
          <button className="flex items-center justify-center rounded-md bg-[#0A91AB] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
            Daftar
          </button>
        </div>
      </div>

      <div className="flex border-[#AFB1B6] border-b-[1px] bg-[#FFFFFF] pb-[13px] items-center">
        {/* logo */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="logo" className="w-[120px]" />
        </div>

        {/* search dan cart */}
        <div className="flex-1 flex justify-center">
          {/* search */}
          <div
            id="search-bar"
            className="w-[735px] bg-white rounded-md border-[#AFB1B6]"
          >
            <form className="flex items-center justify-center p-2 border-[#AFB1B6] border-[1px] bg-[#FFFFFF] rounded-lg">
              <input
                type="text"
                placeholder="Cari di idshop"
                className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-[#0A91AB] text-white rounded-md px-4 py-1 ml-2  focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
              >
                Cari
              </button>
            </form>
          </div>

          {/* cart */}
          <div className="flex-shrink-0 ml-10 mt-3">
            <img
              src="/cart.png"
              alt="cart"
              className="w-6 h-6"
              style={{ color: "#0A91AB" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
