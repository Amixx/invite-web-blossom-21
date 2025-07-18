import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const PhotoGallery = () => {
  const photos = [
    {
      src: "/trami-to-be-48.jpg",
      alt: "Romantic moment",
      caption: "Mūsu pirmā tikšanās",
    },
    {
      src: "/trami-to-be-57.jpg",
      alt: "Beautiful landscape",
      caption: "Kopīgi ceļojumi",
    },
    {
      src: "/trami-to-be-70.jpg",
      alt: "Nature scene",
      caption: "Mierīgi brīži dabā",
    },
    {
      src: "/trami-to-be-78.jpg",
      alt: "Architecture",
      caption: "Kopīgas aizraušanās",
    },
    {
      src: "/trami-to-be-95.jpg",
      alt: "Peaceful water",
      caption: "Mūsu sapņu vieta",
    },
    {
      src: "/trami-to-be-106.jpg",
      alt: "Peaceful water",
      caption: "Mūsu sapņu vieta",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto ">
          Neliels ieskats skaistā dienā, kuru pavadījām kopā, iemūžinot mūsu
          mīlestību!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <Card
            key={index}
            className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-2 text-stone-600">
          <Heart className="text-pink-500 fill-pink-200" size={20} />
          <span className="italic">Svarupi foto | video</span>
          <Heart className="text-pink-500 fill-pink-200" size={20} />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
