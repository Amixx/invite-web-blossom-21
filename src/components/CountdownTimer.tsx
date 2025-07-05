
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-07-19T15:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-8 sm:mb-12 px-4">
      <p className="text-base sm:text-lg text-stone-600 mb-4 sm:mb-6 italic text-center">Līdz mūsu īpašajai dienai:</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-sm sm:max-w-md mx-auto">
        <Card className="border-pink-200 bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-2 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-stone-700 mb-1">
              {timeLeft.days}
            </div>
            <div className="text-xs text-stone-500 uppercase tracking-wider">
              Dienas
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200 bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-2 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-stone-700 mb-1">
              {timeLeft.hours}
            </div>
            <div className="text-xs text-stone-500 uppercase tracking-wider">
              Stundas
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-pink-200 bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-2 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-stone-700 mb-1">
              {timeLeft.minutes}
            </div>
            <div className="text-xs text-stone-500 uppercase tracking-wider">
              Minūtes
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200 bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-2 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-stone-700 mb-1">
              {timeLeft.seconds}
            </div>
            <div className="text-xs text-stone-500 uppercase tracking-wider">
              Sekundes
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CountdownTimer;
