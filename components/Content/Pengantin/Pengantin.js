import Image from "next/image";
import Instagram from "../../../assets/instagram.png";
import data from "../../Data/data";
import cewek from "../../../assets/mempelai/cewek.png";
import cowok from "../../../assets/mempelai/cowok.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor file CSS AOS
import { useEffect } from "react";

export default function Pengantin() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={"container mx-auto hidden md:block"}>
        <div className={"flex flex-wrap text-center mt-10 pb-10"}>
          <div className={"md:w-6/12 w-full"}>
            <div
              className={"flex items-center justify-center"}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Image
                className={"rounded-full bg-auto"}
                src={cewek}
                alt="mempelai cewek"
                width={350}
                height={350}
              />
            </div>

            <h1
              className={
                "md:text-5xl text-4xl font-curs font-bold text-black leading-relaxed mt-5"
              }
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              -{data.nama_wanita}-
            </h1>
            <h1
              className={
                "md:text-4xl text-3xl font-medium text-black leading-relaxed mt-5 font-curs"
              }
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              {data.nama_wanita_gelar}
            </h1>
            <br />
            <p
              className={"text-black"}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              Putri Ketiga <br />
              <span className={"font-bold"}>
                {" "}
                Bpk. {data.nama_ayah_wanita} & Ibu {data.nama_ibu_wanita}
              </span>
            </p>
          </div>
          <div className={"md:w-6/12 w-full "}>
            <div
              className={"flex items-center justify-center"}
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Image
                className={"rounded-full bg-auto"}
                src={cowok}
                alt="mempelai cowok"
                width={350}
                height={350}
              />
            </div>

            <h1
              className={
                "md:text-5xl text-4xl font-curs font-bold text-black leading-relaxed mt-5"
              }
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              -{data.nama_pria}-
            </h1>
            <h1
              className={
                "md:text-4xl text-3xl font-medium text-black leading-relaxed mt-5 font-curs"
              }
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              {data.nama_pria_gelar}
            </h1>
            <br />
            <p
              className={"text-black mb-5 md:mb-0"}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              Putra Pertama <br />{" "}
              <span className={"font-bold"}>
                Bpk. {data.nama_ayah_pria} & Ibu {data.nama_ibu_pria}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*Mobile*/}
      <div className={"container mx-auto md:hidden"}>
        <div className={"flex flex-wrap text-center mt-10 pb-10"}>
          <div className={"md:w-6/12 w-full"}>
            <div
              className="flex justify-center"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Image
                className={"rounded-full bg-auto"}
                src={cewek}
                alt="mempelai cewek"
                width={300}
                height={300}
              />
            </div>
            <h1
              className={
                "md:text-5xl font-curs text-4xl font-bold text-black leading-relaxed mt-5"
              }
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              -{data.nama_wanita}-
            </h1>
            <h1
              className={
                "md:text-4xl text-3xl font-medium text-black leading-relaxed font-curs"
              }
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              {data.nama_wanita_gelar}
            </h1>
            <br />
            <p
              className={"text-black mb-8"}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              Putri Ketiga <br />
              <span className={"font-bold"}>
                {" "}
                Bpk. {data.nama_ayah_wanita} & Ibu {data.nama_ibu_wanita}
              </span>
            </p>
          </div>

          <div className={"flex w-full justify-center items-center"}>
            <h1
              className={
                "text-4xl font-bold text-black leading-relaxed font-curs text-center mb-8"
              }
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              &
            </h1>
          </div>

          <div
            className="flex w-full justify-center"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Image
              className={"rounded-full bg-auto"}
              src={cowok}
              alt="mempelai cowok"
              width={300}
              height={300}
            />
          </div>
          <div className={"md:w-6/12 w-full "}>
            <h1
              className={
                "md:text-5xl text-4xl font-curs font-bold text-black leading-relaxed mt-5"
              }
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              -{data.nama_pria}-
            </h1>
            <h1
              className={
                "md:text-4xl text-3xl font-medium text-black leading-relaxed font-curs"
              }
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              {data.nama_pria_gelar}
            </h1>
            <br />
            <p
              className={"text-black mb-5 md:mb-0"}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              Putra Pertama <br />{" "}
              <span className={"font-bold"}>
                Bpk. {data.nama_ayah_pria} & Ibu {data.nama_ibu_pria}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
