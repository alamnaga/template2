import Image from "next/image";
import Jawa from "../../assets/jawa.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import data from "../Data/data";
import "animate.css/animate.min.css";

export default function Invited({ changeInvited, nameGuest }) {
  const router = useRouter();
  const [tamu, setTamu] = useState("");
  const [valid, setValid] = useState(false);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    // Ketika komponen dipasang, cek apakah ada nama tamu di URL (dari router.query)
    if (router.query.guest) {
      // Dekode nama tamu yang ada di URL (misalnya jika ada karakter khusus seperti %20)
      const decodedGuest = decodeURIComponent(router.query.guest);
      setGuestName(decodedGuest);
      // Juga set tamu secara otomatis sebagai valid (tidak perlu mengisi input)
      setValid(true);
      // Berikan nama tamu tersebut ke komponen induk (Home)
      nameGuest(decodedGuest);
    }
  }, [router.query, nameGuest]);

  return (
    <>
      <div className="bg-invited min-h-screen bg-cover bg-center">
        <div className="text-center opacity-100">
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
          <div className="justify-center md:py-10 animate__animated animate__zoomIn animate__slow">
            <Image
              src={Jawa}
              className="mx-auto"
              width={180}
              height={180}
              alt="Jawa"
            />
          </div>

          <h1
            className={
              "md:text-2xl text-xl font-medium mt-16 text-[#D7BF71] leading-relaxed"
            }
          >
            <p className="text-[#D7BF71] text-sm animate__animated animate__slideInLeft">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>
          </h1>
          <br />
          <div
            className={
              "font-curs font-bold text-4xl md:w-[600px] w-[300px] text-center justify-center leading-tight focus:outline-none text-[#D7BF71] capitalize animate__animated animate__rollIn animate__delay-1s"
            }
            style={{ margin: "0 auto" }} // Menambahkan style untuk mengatur posisi di tengah
          >
            {guestName || "Di Tempat"}
          </div>

          {/* <p className={"text-abu-500 px-3 text-sm"}>Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Berhadir Di Acara Pernikahan Kami.</p> */}
          <div className="mt-2 p-4">
            <button
              className="bg-zinc-800 rounded-[10px] border border-[#D7BF71] text-white font-bold py-2 px-4 hover:bg-[#D7BF71] transition-all duration-300 ease-in-out animate__animated animate__zoomIn animate__slow"
              onClick={() => {
                changeInvited(false);
              }}
            >
              <p className="flex items-center">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5 28.1875H5.5C3.9875 28.1875 2.75 26.95 2.75 25.4375V11.0688C2.75 10.175 3.1625 9.35 3.91875 8.8L16.5 0L29.0812 8.8C29.8375 9.28125 30.25 10.175 30.25 11.0688V25.4375C30.25 26.95 29.0125 28.1875 27.5 28.1875Z"
                    fill="#78909C"
                  />
                  <path
                    d="M8.25 7.5625H24.75V22.6875H8.25V7.5625Z"
                    fill="white"
                  />
                  <path
                    d="M27.5 28.1875H5.5C3.9875 28.1875 2.75 26.95 2.75 25.4375V11.6875L16.5 20.625L30.25 11.6875V25.4375C30.25 26.95 29.0125 28.1875 27.5 28.1875Z"
                    fill="#CFD8DC"
                  />
                </svg>
                &nbsp; Buka Undangan
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
