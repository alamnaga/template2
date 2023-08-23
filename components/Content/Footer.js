import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import Instagram from "../../assets/instagram.png";
import data from "../Data/data";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor file CSS AOS
import { useEffect } from "react";

export default function Footer({}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={"bg-footer bg-cover bg-no-repeat bg-center "} data-aos="fade-in" data-aos-duration="3000">
        <Image src={MaskBottom} className="w-full" />
        <div className={"container mx-auto pt-5 pb-20"}>
          <div className={"flex justify-center items-center content-center"} data-aos="flip-left" data-aos-duration="2000">
            <p
              className={
                "text-center block md:mb-0 font-medium text-white leading-relaxed"
              }
            >
              With Love,
            </p>
          </div>
          <div className={"flex justify-center items-center"}>
            <h1
              className={
                "md:text-6xl text-center  text-5xl mb-0 font-medium text-white leading-relaxed font-curs"
              }
            >
              &nbsp; {data.nama_pria} &nbsp;
            </h1>
          </div>
          <div className={"flex justify-center items-center content-center "}>
            <h1
              className={
                "md:text-6xl text-center text-5xl mb-0 font-medium text-white leading-relaxed font-curs"
              }
            >
              &{" "}
            </h1>
          </div>
          <div className={"flex justify-center items-center content-center "}>
            <h1
              className={
                "md:text-6xl text-center  text-5xl mb-5 font-medium text-white leading-relaxed font-curs"
              }
            >
              &nbsp;{data.nama_wanita}&nbsp;{" "}
            </h1>
          </div>
          
          <br />
          <br />

          <div>
            <div className="flex justify-center space-x-5" data-aos="fade-in" data-aos-duration="3000">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/fluent/30/000000/tiktok.png" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/fluent/27/000000/whatsapp.png" />
              </a>
            </div>
            <p className="text-center pt-2 text-gray-200 font-medium text-xs">
              © {new Date().getFullYear()} <a className="cursor-pointer underline" href="#" >BuatUndanganDigital.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
