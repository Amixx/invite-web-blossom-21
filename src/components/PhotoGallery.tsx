
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const PhotoGallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=600&fit=crop",
      alt: "Romantic moment",
      caption: "Mūsu pirmā tikšanās"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=500&h=600&fit=crop",
      alt: "Beautiful landscape",
      caption: "Kopīgi ceļojumi"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=600&fit=crop",
      alt: "Nature scene",
      caption: "Mierīgi brīži dabā"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=600&fit=crop",
      alt: "Architecture",
      caption: "Kopīgas aizraušanās"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=600&fit=crop",
      alt: "Peaceful water",
      caption: "Mūsu sapņu vieta"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Mūsu mīlestības stāsts ir pilns ar skaistiem brīžiem, kopīgiem piedzīvojumiem 
          un bezgalīgu prieku. Šeit ir daži no mūsu mīļākajiem atmiņu momentiem.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-2 text-stone-600">
          <Heart className="text-pink-500 fill-pink-200" size={20} />
          <span className="italic">Ar mīlestību, Matīss & Agnese</span>
          <Heart className="text-pink-500 fill-pink-200" size={20} />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
