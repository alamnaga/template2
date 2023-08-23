import Image from "next/image";
import MaskTop from "../../assets/mask.png";
import MaskBottom from "../../assets/mask_bottom.png";
import Pengantin from "./Pengantin/Pengantin";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor file CSS AOS
import { useEffect } from "react";

export default function Mempelai() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={"bg-[#D7BF71] bg-cover bg-bottom"}>
         <Image src={MaskBottom} className="w-full" />
        <div className={"container mx-auto pt-5"}>
          <div className={"flex justify-center items-center text-center "}>
            <p
              className="text-black md:w-6/12 mb-8 md:text-4xl text-2xl mx-10"
              data-aos="fade-up" data-aos-duration="2000"
            >
              وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا
              لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
              ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
            </p>
          </div>
          <p
            className={
              "text-black flex justify-center items-center text-center md:mx-40 mx-10 mb-4"
            } data-aos="fade-up" data-aos-duration="2000"
          >
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu
            cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
            diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian
            itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
          </p>
          <p
            className={
              "text-black flex justify-center items-center text-center md:mx-40 mb-8"
            } data-aos="fade-up" data-aos-duration="2000"
          >
            (QS Ar-Rum : 21)
          </p>
          {/* <div className={"flex justify-center items-center content-center"}>
            <Image src={BungaKiri} width={150} height={150} />
            <h1
              className={
                "md:text-6xl text-center  text-5xl md:mb-0 font-medium text-black leading-relaxed font-curs"
              }
            >
              &nbsp;Groom & Bride&nbsp;
            </h1>
            <Image src={BungaKanan} width={150} height={150} />
          </div> */}
          <br />
          <div className={"text-center px-10"}>
            <p className={"leading-relaxed  text-black"} data-aos="fade-up" data-aos-duration="2000">
              Maha suci Allah yang telah menciptakan mahluk-Nya
              berpasang-pasangan. Ya Allah rahmatilah pernikahan putra-putri
              kami
            </p>
          </div>
          <Pengantin />
        </div>
        <div className={"flex md:-mb-2"}>
          <Image src={MaskTop} className="w-full" />
        </div>
      </div>
    </>
  );
}
