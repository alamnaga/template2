import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import MaskTop from "../../assets/mask.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor file CSS AOS

export default function Wish() {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  const { guest } = router.query;

  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    // Fungsi untuk mengambil data dari API
    const fetchData = async () => {
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbzePSmkabkH0iyf4iPPM5V1oRf9PyM9Py_-6gbAYLafqfM4u0fsOGyuucAc9dHTt04P/exec");
        // link api: https://sheetdb.io/api/v1/ob7gvvfljm931
        const data = await response.json();
        setWishes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const konfirmasiKehadiran = form.konfirmasiKehadiran.value;
    const ucapan = form.ucapan.value;

    // Periksa apakah ucapan diisi sebelum mengirimkan permintaan
    if (!ucapan) {
      alert("Ucapan harus diisi sebelum mengirim!");
      return;
    }
    if (!name) {
      alert("Nama harus diisi sebelum mengirim!");
      return;
    }

    // Data yang akan dikirimkan ke API
    const newData = {
      nama: name,
      kehadiran: konfirmasiKehadiran,
      ucapan: ucapan,
    };

    try {
      const response = await fetch("#", {
        // link api: https://sheetdb.io/api/v1/ob7gvvfljm931
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error("Gagal menyimpan data.");
      }

      // Jika berhasil disimpan, tambahkan data baru ke daftar ucapan
      setWishes([...wishes, newData]);
      // Bersihkan form setelah data terkirim
      form.reset();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const isEditable = !guest || guest === "/";

  return (
    <>
      <div className="bg-gradient-to-b from-[#D7BF71] to-[#292929] bg-cover bg-top">
        <div className="py-4 lg:py-8 flex justify-center items-center">
          <div
            className="w-3/4 xl:w-2/4 rounded-xl bg-white mx-auto"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <div className="flex flex-col items-center xl:justify-center 2xl:justify-end xl:px-0 px-8 py-10">
              <h1
                className="md:text-6xl capitalize text-5xl mb-4 md:mb-0 font-medium leading-relaxed font-curs"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Ucapan & Doa
              </h1>
              <div className="w-full 2xl:w-8/12 mt-3">
                <h2
                  className="text-gray-800 text-base text-center md:text-lg leading-8 tracking-wider"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Berikan ucapan untuk kedua mempelai dan dimohon kesediaannya
                  untuk mengisi konfirmasi kehadiran di bawah ini:
                </h2>
                <form onSubmit={handleFormSubmit}>
                  <div
                    className="mt-6 md:mt-8"
                    data-aos="fade-in"
                    data-aos-duration="2000"
                  >
                    <p className="text-gray-800 text-base font-medium">Nama</p>
                    <input
                      className={`mt-3 text-base border-2 w-full bg-[#292929] hover:border-[#D7BF71] focus:border-[#D7BF71] focus:outline-none py-5 pl-4 rounded-xl text-[#D7BF71]  placeholder-[#97864f] capitalize ${
                        isEditable ? "cursor-text" : "cursor-default"
                      }`}
                      type="text"
                      placeholder="Justin Timberlake"
                      name="name"
                      defaultValue={guest || ""}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div
                    className="mt-6 md:mt-8"
                    data-aos="fade-in"
                    data-aos-duration="3000"
                  >
                    <p className="text-gray-800 text-base font-medium">
                      Konfirmasi Kehadiran
                    </p>
                    <div className="mt-3 space-y-2 flex flex-col">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio border-black focus:ring-[#D7BF71]"
                          name="konfirmasiKehadiran"
                          value="Ya"
                        />
                        <span className="ml-2 text-gray-800">Ya</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio border-black focus:ring-[#D7BF71]"
                          name="konfirmasiKehadiran"
                          value="Tidak"
                        />
                        <span className="ml-2 text-gray-800">Tidak</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio border-black focus:ring-indigo-600"
                          name="konfirmasiKehadiran"
                          value="Ragu-ragu"
                        />
                        <span className="ml-2 text-gray-800">Ragu-ragu</span>
                      </label>
                    </div>
                  </div>

                  <div
                    className="mt-6 md:mt-8"
                    data-aos="fade-in"
                    data-aos-duration="2000"
                  >
                    <p className="text-gray-800 text-base font-medium">
                      Ucapan
                    </p>
                    <textarea
                      className="mt-3 text-base border-2 w-full bg-[#292929] resize-none hover:border-[#D7BF71] focus:border-[#D7BF71] focus:outline-none xl:h-40 h-32 py-5 pl-4 rounded-xl text-[#D7BF71] placeholder-[#97864f]"
                      type="text"
                      placeholder="Tulis ucapan anda kepada kedua mempelai..."
                      name="ucapan"
                      defaultValue={""}
                    />
                  </div>

                  <div className="py-5">
                    <button
                      className="py-3 md:py-5 px-5 md:px-10 bg-[#292929] text-[#D7BF71] rounded-lg hover:opacity-70 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold"
                      data-aos="flip-up"
                      data-aos-duration="2000"
                    >
                      Kirim
                    </button>
                  </div>
                </form>

                <div className="mt-4 grid grid-cols-1 gap-2 p-2 mb-8 border rounded-lg bg-white shadow-lg overflow-y-auto max-h-96" data-aos="fade-in"
                      data-aos-duration="2000">
                  {wishes.length === 0 ? (
                    <div className="flex justify-center">
                      <svg
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="mr-2 animate-spin"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                      </svg>
                      loading
                    </div>
                  ) : (
                    wishes.map((wish) => (
                      <div key={wish.id} className="mt-1 bg-[#292929] p-2 rounded-xl">
                        <div class="flex items-center">
                          <div class="flex flex-col">
                            <svg
                              className="mb-2 h-7 w-7"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 18.0833H3.66667C2.75 18.0833 2 17.3333 2 16.4167V7.70833C2 7.16667 2.25 6.66667 2.70833 6.33333L10.3333 1L17.9583 6.33333C18.4167 6.625 18.6667 7.16667 18.6667 7.70833V16.4167C18.6667 17.3333 17.9167 18.0833 17 18.0833Z"
                                fill="#78909C"
                              />
                              <path
                                d="M5.33325 5.5835H15.3333V14.7502H5.33325V5.5835Z"
                                fill="white"
                              />
                              <path
                                d="M17 18.0835H3.66667C2.75 18.0835 2 17.3335 2 16.4168V8.0835L10.3333 13.5002L18.6667 8.0835V16.4168C18.6667 17.3335 17.9167 18.0835 17 18.0835Z"
                                fill="#D7BF71"
                              />
                            </svg>
                            <div class="flex flex-col">
                              <p class="relative text-[#D7BF71] text-sm font-bold whitespace-nowrap truncate overflow-hidden capitalize">
                                Nama: {wish.nama}
                              </p>
                              <p class="mt-1 text-[#D7BF71] text-sm">
                                <span className="font-bold">Hadir:</span> {wish.kehadiran}
                              </p>
                            </div>
                            <p class="mt-1 text-[#D7BF71] text-sm capitalize leading-6">
                              <span className="font-bold">Ucapan:</span> {wish.ucapan}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"flex md:-mb-2"}>
          <Image src={MaskTop} className="w-full" />
        </div>
      </div>
    </>
  );
}
