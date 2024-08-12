import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("Bahasa Indonesia");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900 border-b-2 border-[#AFB1B6]">
      {/* navbar dekstop */}
      <nav className="px-5 py-2.5 lg:border-none lg:py-4">
        <div className=" items-center justify-between">
          <div>
            <div className="flex justify-end">
              {/* bahasa desktop*/}
              <div
                className="dropdown hidden relative lg:block"
                ref={dropdownRef}
              >
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

              {/* maasuk - daftar */}
              <div className="hidden lg:flex lg:items-center gap-x-2">
                <button className="flex items-center text-[#0A91AB] dark:text-white justify-center px-6 py-2.5 font-semibold">
                  Masuk
                </button>
                <button className="flex items-center justify-center rounded-md bg-[#0A91AB] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                  Daftar
                </button>
              </div>
            </div>

            {/* logo desktop - mobile */}
            <div className="flex mt-5">
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="logo" className="w-[200px] hidden" />{" "}
                <img
                  src="/logo.png"
                  alt="logo"
                  className="hidden lg:block max-w-[150px]"
                />{" "}
              </div>

              {/* search dan cart */}
              <div className="lg:flex items-center flex-1 justify-center ">
                {/* search - cart - burger */}
                <div className="flex">
                  {/* search */}
                  <div
                    id="search-bar"
                    className="w-full lg:w-[735px] bg-white rounded-md border-[#AFB1B6] mb-2 lg:mb-0"
                  >
                    <form className="flex items-center justify-center p-2 border-[#AFB1B6] border-[1px] bg-[#FFFFFF] rounded-lg">
                      <input
                        type="text"
                        placeholder="Cari di idshop"
                        className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="bg-[#0A91AB] text-white rounded-md px-4 py-1 ml-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 hidden lg:block"
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

                  {/* button burger menu */}
                  <div className="mt-2.5 ml-7">
                    <button
                      className="lg:hidden focus:outline-none text-slate-200 dark:text-white"
                      onClick={toggleMobileMenu}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#AFB1B6] py-4 px-5 h-96 flex flex-col">
          {/* logo di burger menu */}
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="logo" className="w-[200px]" />{" "}
          </div>

          <div className="flex-grow mt-5">
            <ul className="space-y-4">
              {/* bahasa */}
              <li className="relative">
                <button
                  className="w-full flex items-center justify-between border border-[#AFB1B6] text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded-lg"
                  onClick={toggleDropdown}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  <div className="flex items-center">
                    <img src="/globe.png" alt="globe" className="mr-3" />
                    <span>{selectedLanguage}</span>
                  </div>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <ul className="absolute text-gray-700 dark:text-gray-300 pt-1 border border-b-[1px] border-[#AFB1B6] rounded-lg mt-1 w-full bg-white">
                    <li>
                      <a
                        className="py-2 px-4 block hover:bg-gray-100"
                        href="#"
                        onClick={() => handleLanguageChange("Bahasa Indonesia")}
                      >
                        Bahasa Indonesia
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-2 px-4 block hover:bg-gray-100"
                        href="#"
                        onClick={() => handleLanguageChange("English")}
                      >
                        English
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {/* masuk daftar */}
          <div className="mt-auto space-y-4">
            <button className="w-full bg-[#0A91AB] text-white py-2.5 rounded-md font-semibold">
              Daftar
            </button>
            <button className="w-full text-[#0A91AB] py-2.5 rounded-md font-semibold">
              Masuk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
