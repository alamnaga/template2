import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import MaskTop from "../../assets/mask.png";
import Distance from "../../assets/distance.png";
import Masker from "../../assets/masker.png";
import Hand from "../../assets/washing-hands.png";
import Suhu from "../../assets/thermometer.png";
import data from "../Data/data";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor file CSS AOS

export default function ProtokolKesehatan({}) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [copied, setCopied] = useState({
    romeo: false,
  });

  const copyText = (e) => {
    const rekeningRomeo = data.no_rek_pria;

    if (e === "romeo") {
      navigator.clipboard.writeText(rekeningRomeo);
      setCopied({
        ...copied,
        romeo: true,
      });
    }
  };
  return (
    <>
      <div
        className={
          "bg-gradient-to-b from-[#292929] to-[#D7BF71] bg-cover bg-bottom"
        }
      >
        <Image src={MaskBottom} className="w-full" />
        <div className={"w-3/4 xl:w-2/4 mx-auto pt-5 mb-12 md:mb-14"}>
          <div className={"text-center bg-white text-black p-9 rounded-xl"} data-aos="flip-left" data-aos-duration="2000">
            <h1
              className={
                "md:text-6xl capitalize text-5xl mb-4 md:mb-0 font-medium leading-relaxed font-curs" 
              } data-aos="fade-up" data-aos-duration="2000"
            >
              Resepsi
            </h1>
            <p className={"leading-relaxed mt-5 mb-8"} data-aos="fade-down" data-aos-duration="2000">
              Acara kami akan menerapkan prosedur protokol kesehatan
            </p>
            <div className={"flex flex-wrap mx-auto justify-center w-full"}>
              <div className={"md:w-3/12 w-6/12 mb-10"} data-aos="flip-left" data-aos-duration="2000">
                <div className="flex justify-center items-center">
                  <Image
                    src={Distance}
                    width={100}
                    height={100}
                    alt="jaga jarak"
                  />
                </div>
                <p className="text-sm">Jaga Jarak</p>
              </div>
              <div className={"md:w-3/12 w-6/12 mb-10"} data-aos="flip-right" data-aos-duration="2000">
                <div className="flex justify-center items-center">
                  <Image src={Masker} width={100} height={100} alt="masker" />
                </div>
                <p className="text-sm">Pakai Masker</p>
              </div>
              <div className={"md:w-3/12 w-6/12 mb-10"} data-aos="flip-left" data-aos-duration="2000">
                <div className="flex justify-center items-center">
                  <Image
                    src={Hand}
                    width={100}
                    height={100}
                    alt="mencuci tangan"
                  />
                </div>
                <p className="text-sm">Cuci Tangan</p>
              </div>
              <div className={"md:w-3/12 w-6/12 mb-10"} data-aos="flip-right" data-aos-duration="2000">
                <div className="flex justify-center items-center">
                  <Image src={Suhu} width={100} height={100} alt="cek suhu" />
                </div>
                <p className="text-sm">Cek suhu</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"w-3/4 xl:w-2/4 rounded-xl bg-white mx-auto pt-5 mb-8"}data-aos="flip-right" data-aos-duration="2000" >
          <div className={"text-center text-black px-9 py-5"}>
            <h1
              className={
                "md:text-6xl capitalize text-5xl mb-4 md:mb-0 font-medium leading-relaxed font-curs"
              } data-aos="fade-up" data-aos-duration="2000"
            >
              Wedding Gift
            </h1>
            <p className={"leading-relaxed mt-5 mb-8"} data-aos="fade-up" data-aos-duration="2000">
              Doa restu anda merupakan karunia yang sangat berarti bagi kami.
              Dan jika memberi adalah ungkapan tanda kasih. Anda dapat memberi
              kado secara cashless.
            </p>
            <p className={"leading-relaxed font-bold"} data-aos="fade-up" data-aos-duration="2000">An. {data.nama_pria}</p>
            <p className={"leading-relaxed mb-5"}data-aos="fade-up" data-aos-duration="2000">
              {data.no_rek_pria} - {data.nama_bank_pria}
            </p>
            <button
              className="bg-[#292929] rounded-[10px] border-2 border-[#D7BF71] text-[#D7BF71] font-medium py-2 px-4 hover:bg-[#D7BF71] hover:text-white transition-all duration-300" data-aos="flip-up" data-aos-duration="2000"
              onClick={() => {
                copyText("romeo");
              }}
            >
              <p className={"flex items-center"}>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 13 13"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.255 1.0835H6.14575C5.19025 1.0835 4.433 1.0835 3.84096 1.16366C3.23104 1.246 2.73758 1.41933 2.34867 1.80987C1.95921 2.20041 1.78642 2.69604 1.70463 3.30812C1.625 3.90287 1.625 4.66283 1.625 5.62212V8.78437C1.625 9.6012 2.12333 10.301 2.83129 10.5946C2.795 10.1017 2.795 9.41108 2.795 8.83583V6.12208C2.795 5.4282 2.795 4.82966 2.85892 4.35083C2.92771 3.83733 3.08263 3.3455 3.48021 2.94629C3.87779 2.54708 4.368 2.39162 4.87933 2.32229C5.356 2.25837 5.95183 2.25837 6.64354 2.25837H8.30646C8.99763 2.25837 9.59238 2.25837 10.0696 2.32229C9.92658 1.95741 9.67698 1.64406 9.3533 1.4231C9.02963 1.20213 8.6469 1.08379 8.255 1.0835Z" />
                  <path d="M3.57495 6.17347C3.57495 4.69689 3.57495 3.9586 4.03212 3.49981C4.48874 3.04102 5.22378 3.04102 6.69495 3.04102H8.25495C9.72558 3.04102 10.4612 3.04102 10.9183 3.49981C11.375 3.9586 11.375 4.69689 11.375 6.17347V8.78431C11.375 10.2609 11.375 10.9992 10.9183 11.458C10.4612 11.9168 9.72558 11.9168 8.25495 11.9168H6.69495C5.22433 11.9168 4.48874 11.9168 4.03212 11.458C3.57495 10.9992 3.57495 10.2609 3.57495 8.78431V6.17347Z" />
                </svg>
                &nbsp; Copy Number
              </p>
            </button>

            {copied.romeo ? (
              <>
                <br />
                <p className={"italic"}>Copied!</p>
              </>
            ) : null}
          </div>
          <br />
        </div>
        <div className={" flex flex-wrap"}/>
      </div>
    </>
  );
}
