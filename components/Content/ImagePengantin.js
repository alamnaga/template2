import React from "react";
import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import MaskTop from "../../assets/mask.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor file CSS AOS
import { useEffect } from "react";

// Import images individually
import Image1 from "../../assets/gallery/1.png";
import Image2 from "../../assets/gallery/2.png";
import Image3 from "../../assets/gallery/3.png";
import Image4 from "../../assets/gallery/4.png";
import Image5 from "../../assets/gallery/5.png";
import Image6 from "../../assets/gallery/6.png";

export default function ImagePengantin() {
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <>
      <div className="bg-[#292929] bg-cover bg-bottom">
        <Image src={MaskBottom} className="w-full" />
        <div className="text-center text-[#D7BF71] m-10">
          <h1 className="font-curs font-bold text-5xl">Our Gallery</h1>
        </div>

        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-4 gap-x-11 mt-5 mb-10">
        {images.map((image, index) => (
            <div
              key={index}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
              data-aos-duration="2000"
            >
              <Image
                src={image}
                alt={`Wedding ${index + 1}`}
                width={288}
                height={320}
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className={"flex md:-mb-2"}>
          <Image src={MaskTop} className="w-full" />
        </div>
      </div>
    </>
  );
}
