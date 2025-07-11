import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getLatvianPlural } from "@/utils/latvian";

const SECOND_MS = 1000;
const MINUTE_MS = SECOND_MS * 60;
const HOUR_MS = MINUTE_MS * 60;
const DAY_MS = HOUR_MS * 24;

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });



  useEffect(() => {
    const weddingDate = new Date("2025-07-19T15:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const timeLeftMs = weddingDate - now;

      if (timeLeftMs <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(timeLeftMs / DAY_MS),
        hours: Math.floor((timeLeftMs % DAY_MS) / HOUR_MS),
        minutes: Math.floor((timeLeftMs % HOUR_MS) / MINUTE_MS),
        seconds: Math.floor((timeLeftMs % MINUTE_MS) / SECOND_MS),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-8 sm:mb-12 px-4">
      <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 italic text-center drop-shadow">
        Līdz mūsu īpašajai dienai vairs tikai:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-sm sm:max-w-md mx-auto">
        <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
          <CardContent className="p-2 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1 drop-shadow">
              {timeLeft.days}
            </div>
            <div className="text-xs text-white/80 uppercase tracking-wider">
              {getLatvianPlural(timeLeft.days, "Diena", "Dienas")}
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
          <CardContent className="p-2 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1 drop-shadow">
              {timeLeft.hours}
            </div>
            <div className="text-xs text-white/80 uppercase tracking-wider">
              {getLatvianPlural(timeLeft.hours, "Stunda", "Stundas")}
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
          <CardContent className="p-2 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1 drop-shadow">
              {timeLeft.minutes}
            </div>
            <div className="text-xs text-white/80 uppercase tracking-wider">
              {getLatvianPlural(timeLeft.minutes, "Minūte", "Minūtes")}
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
          <CardContent className="p-2 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1 drop-shadow">
              {timeLeft.seconds}
            </div>
            <div className="text-xs text-white/80 uppercase tracking-wider">
              {getLatvianPlural(timeLeft.seconds, "Sekunde", "Sekundes")}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CountdownTimer;
