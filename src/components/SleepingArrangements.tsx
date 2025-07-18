import React from "react";
import { Building, Users, User } from "lucide-react";
import { Heart } from "lucide-react";

// Interface for room data
interface Room {
  roomNumber: number;
  floor: number;
  occupants: string[];
}

const SleepingArrangements: React.FC = () => {
  // Sample data - replace with actual data
  const rooms: Room[] = [
    { roomNumber: 2, floor: 2, occupants: ["Ronalds un Rasa"] },
    {
      roomNumber: 3,
      floor: 2,
      occupants: ["Dārta un Artūrs", "Lukass un Margarita", "Alise", "Dāvis"],
    },
    { roomNumber: 4, floor: 2, occupants: ["Artis un Dita"] },
    { roomNumber: 5, floor: 2, occupants: ["Krišjānis un Ingrīda", "Odrija"] },
    {
      roomNumber: 6,
      floor: 2,
      occupants: ["Taivo un Aiva", "Agnese", "Ingemārs"],
    },
    {
      roomNumber: 7,
      floor: 2,
      occupants: ["Pēteris un Everika", "Estere", "Bernārs"],
    },
    { roomNumber: 8, floor: 2, occupants: ["Airits un Sanita"] },
    {
      roomNumber: 9,
      floor: 2,
      occupants: ["Arnis un Agita", "Roberts", "Toms"],
    },
    { roomNumber: 10, floor: 3, occupants: ["Līgava un Līgavainis"] },
    { roomNumber: 11, floor: 3, occupants: ["Kaspars un Kristīne", "Marks"] },
    { roomNumber: 12, floor: 3, occupants: ["Katrīna", "Marta", "Ināra"] },
    {
      roomNumber: 13,
      floor: 3,
      occupants: [
        "Roberts T. un Valērija",
        "Olafs un Melisa",
        "Roberts R.",
        "Kristiāns",
      ],
    },
    { roomNumber: 14, floor: 3, occupants: ["Mārtiņš un Loreta", "Patriks"] },
    {
      roomNumber: 15,
      floor: 3,
      occupants: ["Niklāvs un Vija", "Megija", "Gita"],
    },
    {
      roomNumber: 16,
      floor: 3,
      occupants: ["Rihards un Evelīna", "Rolands un Patrīcija"],
    },
    {
      roomNumber: 17,
      floor: 3,
      occupants: ["Dāvids", "Renārs", "Kevins", "Guntis"],
    },
    { roomNumber: 19, floor: 4, occupants: ["Imants un Rota"] },
  ];

  // Generate pastel colors based on room index for violet progression
  const getFloorColor = (floor: number, roomIndex: number) => {
    const isVioletVariant = (roomIndex + 1) % 3 === 0; // Every 3rd card

    if (isVioletVariant) {
      const violetColors = {
        1: "bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200 text-violet-800",
        2: "bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200 text-purple-800",
        3: "bg-gradient-to-r from-violet-100 to-purple-50 border-violet-200 text-violet-800",
      };
      return (
        violetColors[floor as keyof typeof violetColors] ||
        "bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200 text-violet-800"
      );
    }

    // Default gradient colors for non-violet cards - cycle through patterns based on index
    const colorIndex = (roomIndex % 3) + 1;
    const colors = {
      1: "bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200 text-orange-800",
      2: "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 text-yellow-800",
      3: "bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 text-pink-800",
    };
    return (
      colors[colorIndex as keyof typeof colors] ||
      "bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200 text-orange-800"
    );
  };

  return (
    <section
      id="sleeping"
      className="py-12 sm:py-16 px-4 bg-gradient-to-b from-orange-50 via-pink-50 to-yellow-50"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-light text-stone-700 mb-3 tracking-wide font-serif">
            Naktsmītņu Izvietojums
          </h2>
          <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mb-4"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Šeit ir detalizēta informācija par naktsmītnēm. Lūdzu, apskatiet
            savu istabu un tās atrašanās vietu.
          </p>
        </div>

        {/* Card-based layout for all screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <div
              key={room.roomNumber}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              {/* Room number header with orange/yellow theme */}
              <div
                className={`p-6 border-b ${getFloorColor(room.floor, index)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-2 border-orange-200">
                    <span className="font-bold text-3xl text-orange-700 flex items-center">
                      {room.roomNumber}
                      {room.roomNumber === 10 && <Heart size={20} fill="red" />}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-stone-700 font-semibold text-lg">
                      <Building size={18} className="mr-2" />
                      {room.floor}. stāvs
                    </div>
                  </div>
                </div>
              </div>

              {/* Occupants section */}
              <div className="p-6">
                <h4 className="text-sm uppercase text-orange-600 font-semibold mb-4 flex items-center">
                  <Users size={16} className="mr-2" />
                  Viesi:
                </h4>
                <div className="space-y-3">
                  {room.occupants.map((person, idx) => (
                    <div
                      key={idx}
                      className="flex items-center py-3 px-4 bg-gradient-to-r from-pink-50 via-orange-50 to-yellow-50 rounded-xl border border-pink-100"
                    >
                      <User size={16} className="mr-3 text-orange-500" />
                      <span className="text-stone-700 font-medium">
                        {person}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-8 p-4 bg-white rounded-xl shadow-md border border-orange-100 max-w-xl mx-auto">
          <Users size={18} className="text-orange-500 mr-2" />
          <p className="text-stone-600 italic">
            Ja jums ir jautājumi par naktsmītnēm, lūdzu sazinieties ar mums!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SleepingArrangements;
