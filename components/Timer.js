import { useEffect, useState } from "react";

export default function Timer() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("08/09/2023 23:59:59"); // mm/dd/yyyy

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setPartyTime(true);
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={"flex mt-8 mb-8"}>
        <div className="flex justify-center items-center bg-[#292929] rounded-xl p-6">
          <div className="w-3/12 text-center  shadow-xl mx-2.5 box-border">
            <h1 className="text-xl font-medium text-[#D7BF71] leading-relaxed">
              {partyTime ? "0" : days} <br />
              <span className="text-[#D7BF71]">Hari</span>
            </h1>
          </div>
          <div className="w-3/12 text-center  shadow-xl mx-2.5">
            <h1 className="text-xl font-medium text-[#D7BF71] leading-relaxed">
              {partyTime ? "0" : hours} <br />
              <span className="text-[#D7BF71]">Jam</span>
            </h1>
          </div>
          <div className="w-3/12 text-center  shadow-xl mx-2.5">
            <h1 className="text-xl font-medium text-[#D7BF71] leading-relaxed">
              {partyTime ? "0" : minutes} <br />
              <span className="text-[#D7BF71]">Menit</span>
            </h1>
          </div>
          <div className="w-3/12 text-center  shadow-xl mx-2.5">
            <h1 className="text-xl font-medium text-[#D7BF71] leading-relaxed">
              {partyTime ? "0" : seconds} <br />
              <span className="text-[#D7BF71]">Detik</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
