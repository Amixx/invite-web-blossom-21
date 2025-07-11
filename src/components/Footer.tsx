import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-12 bg-stone-100 text-center">
      <div className="container mx-auto px-2 sm:px-4">
        <Heart className="mx-auto mb-4 text-pink-500 fill-pink-200" size={32} />
        <p className="text-stone-600 mb-2">Matīss & Agnese</p>
        <p className="text-stone-500">2025. gada 19. jūlijs</p>
      </div>
    </footer>
  );
};

export default Footer;
