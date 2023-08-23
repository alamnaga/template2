import Image from "next/image";
import Jawa from "../../assets/jawa.png";
import { animated, useSpring } from "react-spring";
import MaskTop from "../../assets/mask.png";
import { useRouter } from "next/router";
import data from "../Data/data"
import "animate.css/animate.min.css";

export default function Hero() {
  const router = useRouter();
  const { guest } = router.query;
  const fade = useSpring({
    from: { opacity: 0, y: 1000 },
    to: { opacity: 1, y: 0 },
    delay: 1000,
  });
  return (
    <>
      <div className={"bg-hero bg-cover bg-center"}>
        <div className={"text-center opacity-100"}>
        <div
            className=
              "pt-20 md:text-6xl text-4xl md:mb-0 font-bold leading-relaxed font-curs text-[#D7BF71] animate__animated animate__bounceInDown"
            
          >
            {/* Hello, You&apos;re Invited */}
            The Wedding Of
          </div>
          <h1
            className={
              "md:text-5xl text-4xl font-bold text-[#D7BF71] leading-relaxed md:mt-4 mb-4 font-curs animate__animated animate__bounceInDown animate__delay-1s"
            }
          >
            {data.nama_pria} & {data.nama_wanita}
          </h1>
          <div className={"flex justify-center md:py-10 mb-4 animate__animated animate__zoomIn animate__slow"}>
            <Image src={Jawa} width={180} height={180} />
          </div>
          {/* <animated.div style={fade}>
            <h1
              className={
                "md:text-6xl text-5xl md:mb-0 font-medium text-white leading-relaxed font-curs"
              }
            >
              The Wedding Of
            </h1>
            <h1
              className={
                "md:text-5xl text-4xl font-semibold text-white leading-relaxed md:mt-4 mb-4 font-curs"
              }
            >
              {data.nama_pria} & {data.nama_wanita}
            </h1>
          </animated.div> */}
          <p className={"text-[#D7BF71] animate__animated animate__slideInUp"}>{data.tgl_nikah}</p>
          {/*<Timer/>*/}
          <p className={"text-[#D7BF71] animate__animated animate__slideInDown"}>Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <br />
          <div
            className={
              "rounded-xl md:w-[600px] w-[300px] text-center justify-center bg-zinc-800 border border-[#D7BF71] mx-auto py-6 boxShadow group animate__animated animate__zoomIn animate__delay-1s"
            }
          >
            <h1
              className={
                "text-3xl font-bold text-[#D7BF71] leading-relaxed font-curs capitalize animate__animated animate__zoomIn animate__delay-1s"
              }
            >
              {guest || "Di Tempat"}
            </h1>
          </div>
          <br />
          <p className={"text-[#D7BF71] italic px-2 pb-10 animate__animated animate__slideInUp"}>
            *Bila ada kesalahan nama/gelar mohon dimaklumi
          </p>
        </div>
       
        <div className={"-mb-2"}>
          <Image src={MaskTop} className="w-full" />
        </div>
      </div>
      <audio src={"../../assets/pernikahanImpian.mp3"} />
    </>
  );
}
