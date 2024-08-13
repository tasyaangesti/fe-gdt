export default function Footer() {
  return (
    <>
      <div>
        <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* layanan dan jelajahi */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* layanan pelanggan */}
              <div className="">
                <h1 className="text-lg font-bold tracking-wide text-gray-800">
                  Layanan Pelanggan
                </h1>
                <div className="mt-6 lg:max-w-xl">
                  <a href="/pusat-bantuan">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      Pusat Bantuan
                    </p>
                  </a>
                  <a href="/cara-pembelian">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      Cara Pembelian
                    </p>
                  </a>
                  <a href="/pengiriman">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      Pengiriman
                    </p>
                  </a>
                  <a href="/pengembalian-barang">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      Pengembalian Barang dan Dana
                    </p>
                  </a>
                  <a href="/metode-pembayaran">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      Metode Pembayaran
                    </p>
                  </a>
                  <a href="/hubungi-kami">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      Hubungi Kami
                    </p>
                  </a>
                </div>
              </div>

              {/* jelajahi idshop */}
              <div className="">
                <h1 className="text-lg font-bold tracking-wide text-gray-800">
                  Jelajahi Idshop
                </h1>
                <div className="mt-6 lg:max-w-xl">
                  <a href="/tentang-kami">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      Tentang Kami
                    </p>
                  </a>
                  <a href="/kebijakan-privasi">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      Kebijakan Privasi
                    </p>
                  </a>
                  <a href="/karir">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      Karir
                    </p>
                  </a>
                  <a href="/blog">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      Blog
                    </p>
                  </a>
                  <a href="/security">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      idShop Security
                    </p>
                  </a>
                  <a href="/mall">
                    <p className="text-sm text-gray-800 border-b-[1px] pt-1">
                      id Mall
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/* unduh aplikasi */}
            <div className="w-full lg:w-auto">
              <h1 className="text-base font-bold tracking-wide text-gray-900">
                Unduh Aplikasi
              </h1>
              <div className="mt-6 lg:max-w-xl flex flex-row lg:flex-col">
                <a href="/google-play" className="">
                  <img
                    src="/Google-Play.png"
                    alt="Playstore Button"
                    className="w-full h-auto max-h-[50px] max-w-[100px] lg:max-h-[100px] lg:max-w-[150px]"
                  />
                </a>
                <a className="" href="/app-store">
                  <img
                    src="/App-Store.png"
                    alt="App Store Button"
                    className="w-full h-auto max-h-[50px] max-w-[100px] lg:max-h-[100px] lg:max-w-[150px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* pembayaran - pengiriman - keamanan */}
          <div>
            {/* metode pemabayaran */}
            <div>
              <h1 className="text-lg font-bold tracking-wide text-gray-800">
                Metode Pembayaran
              </h1>
              <div>
                <div className="flex flex-wrap gap-3 my-2 max-h-[30px] lg:max-h-[50px] mb-14 sm:mb-5">
                  <img
                    src="/bca.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/mandiri.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/bri.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/bni.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/gopay.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/dana.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/alfa.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/visa.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/mastercard.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                </div>
              </div>
            </div>

            {/* jasa pengiriman */}
            <div className="mt-5 mb-5">
              <h1 className="text-lg font-bold tracking-wide text-gray-800">
                Jasa Pengiriman
              </h1>
              <div>
                <div className="flex flex-wrap gap-3 my-2 max-h-[30px] lg:max-h-[50px] mb-14 sm:mb-5">
                  <img
                    src="/jne.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/sicepat.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/jnt.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/gosend.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/grab.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                </div>
              </div>
            </div>

            {/* keamanan dan privasi */}
            <div className="mt-5 sm:mt-5">
              <h1 className="text-lg font-bold tracking-wide text-gray-800">
                Keamanan dan Privasi
              </h1>
              <div>
                <div className="flex gap-3 my-2 max-h-[30px] lg:max-h-[50px]">
                  <img
                    src="/badges.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                  <img
                    src="/visa-verified.png"
                    alt=""
                    className="h-auto max-h-[30px] lg:max-h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* hak cipta - sosmed */}
          <div className="flex flex-col md:flex-row justify-between items-start p-4 border-t-[1px]">
            {/* hak cipta */}
            <p className="text-black font-semibold mb-4 md:mb-0">
              © IdShop 2024. Hak Cipta Dilindungi
            </p>

            {/* sosmed */}
            <div className="flex flex-col md:flex-col items-start space-y-2 md:space-y-0 md:space-x-4">
              <h1 className="text-black font-semibold md:block">Ikuti Kami</h1>
              <div className="flex space-x-2">
                <a href="https://tiktok.com" className="mx-1">
                  <img src="/tik-tok.png" alt="TikTok" className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" className="mx-1">
                  <img src="/ig.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://youtube.com" className="mx-1">
                  <img src="/yt.png" alt="YouTube" className="w-6 h-6" />
                </a>
                <a href="https://facebook.com" className="mx-1">
                  <img src="/fb.png" alt="Facebook" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
