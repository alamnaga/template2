import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import Ring from "../../assets/ring.png";
import Wedding from "../../assets/Resepsi.png";
import Timer from "../Timer";
import MaskTop from "../../assets/mask.png";
import { useState } from "react";
import Instagram from "../../assets/instagram.png";
import data from "../Data/data";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor file CSS AOS
import { useEffect } from "react";

export default function Waktu() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [copied, setCopied] = useState({
    romeo: false,
    juliet: false,
    alamat: false,
  });

  const mapAkad = () => {
    window.open([data.link_map_akad]);
  };
  const mapResepsi = () => {
    window.open([data.link_map_resepsi]);
  };

  const copyText = (e) => {
    const rekeningRomeo = data.no_rek_pria;
    const rekeningJuliet = data.no_rek_wanita;
    const alamatRumah = data.alamat_rumah;
    if (e === "romeo") {
      navigator.clipboard.writeText(rekeningRomeo);
      setCopied({
        ...copied,
        romeo: true,
      });
    } else if (e === "juliet") {
      navigator.clipboard.writeText(rekeningJuliet);
      setCopied({
        ...copied,
        juliet: true,
      });
    } else {
      navigator.clipboard.writeText(alamatRumah);
      setCopied({
        ...copied,
        alamat: true,
      });
    }
  };
  return (
    <>
      <div
        className={
          "bg-gradient-to-b from-[#D7BF71] to-[#373739] bg-cover bg-bottom"
        }
      >
         <Image src={MaskBottom} className="w-full" />
        <div
          className={
            "flex justify-center items-center content-center md:-mt-10"
          } data-aos="flip-up" data-aos-duration="2000"
        >
          <Timer/>
        </div>
        <div className="container mx-auto pt-5 flex flex-wrap md:flex-no-wrap justify-center">
          <br />
          <div className="shadow-xl text-center md:w-5/12 mb-6 px-3 py-10 bg-white rounded-xl" data-aos="flip-right" data-aos-duration="2000">
            <div className="flex justify-center items-center">
              <Image src={Ring} width={100} height={100} />
            </div>
            <h1
              className={
                "md:text-6xl capitalize text-4xl mb-4 md:mb-0 font-medium leading-relaxed font-curs"
              }
            >
              Akad Nikah
            </h1>
            <p className={"font-medium"}>{data.hari_tgl_akad}</p>
            <p className={"font-medium"}>{data.jam_akad}</p>
            <p className={"font-medium"}>(Khusus Keluarga)</p>
            <a
              href={`https://www.instagram.com/${data.instagram_pria}`}
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="hover:bg-color-pallete-600 text-black font-bold py-2 px-4 rounded">
                <p className={"flex"}>
                  <Image src={Instagram} width={25} height={25} />
                  &nbsp; Live Instagram
                </p>
                <p>{data.instagram_pria}</p>
              </button>
            </a>
            <br />
            <p className={"font-medium"}>Gedung Besar Banget</p>
            <p className={"px-7"}>{data.alamat_akad}</p>
            <div className={"text-center mb-2"}>
              <button
                className="mt-8 bg-[#292929] rounded-[10px] border-2 border-[#D7BF71] text-[#D7BF71] font-medium py-2 px-2 hover:bg-[#D7BF71] hover:text-white transition-all duration-300 md:mb-0" data-aos="flip-up" data-aos-duration="2000"
                onClick={mapAkad}
              >
                <p className={"flex px-2 items-center"}>
                  <svg
                    className="h-6 w-7"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.63494 1.43921C5.85018 1.43921 3.5979 3.69148 3.5979 6.47625C3.5979 10.254 8.63494 15.8307 8.63494 15.8307C8.63494 15.8307 13.672 10.254 13.672 6.47625C13.672 3.69148 11.4197 1.43921 8.63494 1.43921ZM5.03705 6.47625C5.03705 4.49021 6.64891 2.87836 8.63494 2.87836C10.621 2.87836 12.2328 4.49021 12.2328 6.47625C12.2328 8.54863 10.1604 11.65 8.63494 13.5857C7.13822 11.6644 5.03705 8.52704 5.03705 6.47625Z" />
                    <path d="M8.63488 8.27513C9.62841 8.27513 10.4338 7.46972 10.4338 6.47619C10.4338 5.48266 9.62841 4.67725 8.63488 4.67725C7.64135 4.67725 6.83594 5.48266 6.83594 6.47619C6.83594 7.46972 7.64135 8.27513 8.63488 8.27513Z" />
                  </svg>
                  Buka Google Maps
                </p>
              </button>
            </div>
          </div>
          
          <div className="shadow-xl text-center md:w-5/12 md:ml-20 mb-6 px-3 py-10 bg-white rounded-xl" data-aos="flip-left" data-aos-duration="2000">
            <div className="flex justify-center items-center">
              <Image src={Wedding} width={100} height={100} />
            </div>
            <h1
              className={
                "md:text-6xl capitalize text-4xl mb-4 md:mb-0 font-medium leading-relaxed font-curs"
              }
            >
              Resepsi
            </h1>
            <p className={"font-medium"}>{data.hari_tgl_resepsi}</p>
            <p className={"font-medium"}>{data.jam_resepsi}</p>
            <br />
            <p className={"font-medium"}>Gedung Biasa Aja</p>
            <p className={"px-7"}>{data.alamat_resepsi}</p>
            <div className={"text-center mb-2"}>
              <button
                className="mt-8 bg-[#292929] rounded-[10px] border-2 border-[#D7BF71] text-[#D7BF71] font-medium py-2 px-2 hover:bg-[#D7BF71] hover:text-white transition-all duration-300 md:mb-0" data-aos="flip-up" data-aos-duration="2000"
                onClick={mapResepsi}
              >
                <p className={"flex px-2 items-center"}>
                  <svg
                    className="h-6 w-7"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.63494 1.43921C5.85018 1.43921 3.5979 3.69148 3.5979 6.47625C3.5979 10.254 8.63494 15.8307 8.63494 15.8307C8.63494 15.8307 13.672 10.254 13.672 6.47625C13.672 3.69148 11.4197 1.43921 8.63494 1.43921ZM5.03705 6.47625C5.03705 4.49021 6.64891 2.87836 8.63494 2.87836C10.621 2.87836 12.2328 4.49021 12.2328 6.47625C12.2328 8.54863 10.1604 11.65 8.63494 13.5857C7.13822 11.6644 5.03705 8.52704 5.03705 6.47625Z" />
                    <path d="M8.63488 8.27513C9.62841 8.27513 10.4338 7.46972 10.4338 6.47619C10.4338 5.48266 9.62841 4.67725 8.63488 4.67725C7.64135 4.67725 6.83594 5.48266 6.83594 6.47619C6.83594 7.46972 7.64135 8.27513 8.63488 8.27513Z" />
                  </svg>
                  Buka Google Maps
                </p>
              </button>
            </div>
          </div>
        </div>

        <div class="p-14 text-center text-[#D7BF71] text-xs font-medium" data-aos="fade-up" data-aos-duration="2000">Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada putra-putri kami. Atas kehadiran dan doa restunya kami ucapkan terima kasih.</div>

        <div className={"-mb-2"}>
          <Image src={MaskTop} className="w-full" />
        </div>
      </div>
    </>
  );
}
