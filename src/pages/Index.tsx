import { Heart } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import ContactInfo from "@/components/ContactInfo";
import CountdownTimer from "@/components/CountdownTimer";
import HeroCarousel from "@/components/HeroCarousel";
import ZigZagSection from "@/components/ZigZagSection";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import SleepingArrangements from "@/components/SleepingArrangements";
import Gallery from "@/components/Gallery";

const Index = () => {
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

  const zigzagSections = [
    {
      id: "ceremony",
      title: "Ceremonija",
      content: (
        <div>
          <h4 className="text-lg font-medium mb-3">
            Rīgas Svētā Pāvila baznīca
          </h4>
          <p className="mb-3">Augusta Deglava iela 1, Rīga</p>
          <p className="mb-3">Sestdiena, 2025. gada 19. jūlijs, plkst. 13:00</p>
          <p className="text-sm text-stone-600">
            Lūdzam ierasties laicīgi. Baznīca atrodas Rīgas centrā.
          </p>
        </div>
      ),
      image: "/pavila-baznica.jpg",
      position: "left",
    },
    {
      id: "afterparty",
      title: "Svinības",
      content: (
        <div>
          <h4 className="text-lg font-medium mb-3">Viesu Nams "Bille"</h4>
          <p className="mb-2">
            <strong>Ierašanās:</strong> Sestdiena, 2025. gada 19. jūlijs, no
            plkst. 17:00
          </p>
          <p className="mb-2">Billīte, Bille, Drabešu pagasts, Cēsu novads</p>
          <p className="mb-2">
            <strong>Izrakstīšanās:</strong> Svētdiena, 2025. gada 20. jūlijs,
            līdz plkst. 12:00
          </p>
          <p className="text-sm text-stone-600">
            Pēc ceremonijas dosimies uz viesu namu, kur mūs gaida gardas
            vakariņas un foršs laiks līdz rīta gaismai!
          </p>
        </div>
      ),
      image: "/viesu-nams-bille.jpg",
      position: "right",
    },
  ];

  return (
    <Layout>
      <Navigation />

      {/* Hero Section with Carousel */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-24"
      >
        <HeroCarousel />

        <div className="text-center z-10 px-2 sm:px-4 relative">
          {/* Heart with cross symbol */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative">
              <Heart
                size={48}
                className="sm:w-15 sm:h-15 text-white fill-white/20"
              />
              <div className="absolute inset-0 flex items-center justify-center bottom-2">
                <div className="w-3 sm:w-4 h-0.5 bg-white"></div>
                <div className="absolute top-3.5 w-0.5 top-2 h-[1.2rem] bg-white"></div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl text-white mb-3 sm:mb-4 tracking-wider drop-shadow-lg font-serif">
            MATĪSS
          </h1>
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-12 sm:w-16 h-px bg-white/70"></div>
            <span className="mx-3 sm:mx-4 text-xl sm:text-2xl text-white/90 font-serif italic">
              &
            </span>
            <div className="w-12 sm:w-16 h-px bg-white/70"></div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white mb-6 sm:mb-8 tracking-wider drop-shadow-lg">
            AGNESE
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-2 italic drop-shadow font-serif">
            precas
          </p>

          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 drop-shadow font-serif">
            Priecāsimies svinēt mūsu mīlestības
            <br className="hidden sm:block" />
            svētkus kopā ar Jums!
          </p>

          <div className="text-center mb-6 sm:mb-8 font-serif">
            <div className="text-lg sm:text-xl text-white/90 mb-2 drop-shadow">
              Sestdiena, 2025. gada{" "}
              <span className="text-3xl sm:text-4xl">19.</span> jūlijs
            </div>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      <div>
        {/* copilot - add some text and a button to the wishes page (/novēlējumi) */}
        <section className="py-8 sm:py-20 px-2 sm:px-4 bg-gradient-to-b from-pink-50 to-yellow-50">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-stone-700 mb-6 sm:mb-8 tracking-wide font-serif">
              Vai Tev ir ko mums novēlēt?
            </h2>
            <a
              href="/novelejumi"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
            >
              Uz novēlējumiem
            </a>
          </div>
        </section>
      </div>

      <div>
        <section id="bildes" className="py-8 sm:py-20 px-2 sm:px-4 bg-gradient-to-b from-pink-50 to-yellow-50 font-serif">
           <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-stone-700 mb-6 sm:mb-8 tracking-wide">
              Bildes
            </h2>
            <div className="space-y-12 p-6">
              <Gallery />
            </div>
          </div>
        </section>
      </div>

      {/* Zig-Zag Sections */}
      {zigzagSections.map((section, index) => (
        <ZigZagSection
          key={section.id}
          id={section.id}
          title={section.title}
          content={section.content}
          image={section.image}
          position={section.position}
          index={index}
        />
      ))}

      <div>
        <section
          id="dienas-plans"
          className="py-8 sm:py-20 px-2 sm:px-4 bg-gradient-to-b from-green-50 to-pink-50"
        >
          <div className="container mx-auto max-w-2xl items-center">
            <img
              src="/dienas-plans.svg"
              alt="dienas plans"
              className="w-full h-auto"
            />
          </div>
        </section>
      </div>

      {/* Sleeping Arrangements */}
      <SleepingArrangements />

      {/* Photo Gallery */}
      <section
        id="gallery"
        className="py-8 sm:py-20 px-2 sm:px-4 bg-gradient-to-b from-green-50 to-pink-50"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light text-center text-stone-700 mb-8 sm:mb-16 tracking-wide font-serif">
            Vienkārši Mēs
          </h2>
          <PhotoGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-20 px-2 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-light text-center text-stone-700 mb-8 sm:mb-16 tracking-wide font-serif">
            Kontaktinformācija
          </h2>
          <ContactInfo />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
