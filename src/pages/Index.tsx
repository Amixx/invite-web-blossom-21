import { Heart } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import ContactInfo from "@/components/ContactInfo";
import CountdownTimer from "@/components/CountdownTimer";
import HeroCarousel from "@/components/HeroCarousel";
import ZigZagSection from "@/components/ZigZagSection";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";

const Index = () => {

  const zigzagSections = [
    {
      id: "story",
      title: "Mūsu Stāsts",
      content:
        "Mūsu mīlestības stāsts sākās pirms vairākiem gadiem, kad mēs satikāmies universitātē. Kopš tā laika mēs esam auguši kopā, dalījušies priekos un bēdās, un tagad esam gatavi sākt jaunu dzīves nodaļu kā vīrs un sieva.",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      position: "left",
    },
    {
      id: "ceremony",
      title: "Ceremonija",
      content: (
        <div>
          <h4 className="text-lg font-medium mb-3">
            Rīgas Svētā Pāvila baznīca
          </h4>
          <p className="mb-3">Augusta Deglava iela 1, Rīga</p>
          <p className="mb-3">Sestdiena, 2025. gada 19. jūlijs, plkst. 15:00</p>
          <p className="text-sm text-stone-600">
            Lūdzam ierasties laicīgi. Baznīca atrodas Rīgas centrā, viegli
            pieejama ar sabiedrisko transportu.
          </p>
        </div>
      ),
      image: "/pavila-baznica.jpg",
      position: "right",
    },
    {
      id: "parking",
      title: "Autostāvvieta",
      content:
        "Baznīcas tuvumā ir pieejamas maksas autostāvvietas. Ieteicam izmantot Doma laukuma autostāvvietu vai meklēt vietu apkārtējās ielās. Sabiedriskais transports ir ērtākais veids, kā nokļūt līdz ceremonijai.",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      position: "left",
    },
    {
      id: "afterparty",
      title: "Svinības",
      content: (
        <div>
          <h4 className="text-lg font-medium mb-3">Restorāns "Mūsu Māja"</h4>
          <p className="mb-2">
            <strong>Laiks:</strong> 18:00 - 02:00
          </p>
          <p className="mb-2">
            <strong>Adrese:</strong> Elizabetes iela 45, Rīga
          </p>
          <p className="mb-2">
            <strong>Ierašanās:</strong> Līdz 18:30
          </p>
          <p className="mb-2">
            <strong>Vakariņas:</strong> 19:30
          </p>
          <p className="text-sm text-stone-600">
            Pēc ceremonijas dosimies uz restorānu, kur mūs gaida gardas
            vakariņas un danci līdz rīta gaismai!
          </p>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      position: "right",
    },
    {
      id: "accommodation",
      title: "Naktsmītnes",
      // TODO: fix the text or remove the whole section
      // content: (
      //   <div>
      //     <p className="mb-3">
      //       Viesiem no tālākām vietām ieteicam šīs viesnīcas Rīgas centrā:
      //     </p>
      //     <ul className="list-disc list-inside space-y-1 text-sm">
      //       <li>Hotel Bergs - 5 min no baznīcas</li>
      //       <li>Radisson Blu Elizabete - 10 min no baznīcas</li>
      //       <li>Hotel Roma - budžeta variants, 15 min</li>
      //     </ul>
      //     <p className="text-sm text-stone-600 mt-3">
      //       Ja nepieciešama palīdzība ar rezervāciju, sazinieties ar mums!
      //     </p>
      //   </div>
      // ),
      image:
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
      position: "left",
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
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 sm:w-6 h-0.5 bg-white"></div>
                <div className="absolute w-0.5 h-5 sm:h-6 bg-white"></div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-light text-white mb-3 sm:mb-4 tracking-wider drop-shadow-lg">
            MATĪSS
          </h1>
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-12 sm:w-16 h-px bg-white/70"></div>
            <span className="mx-3 sm:mx-4 text-xl sm:text-2xl text-white/90 font-light italic">
              &
            </span>
            <div className="w-12 sm:w-16 h-px bg-white/70"></div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-light text-white mb-6 sm:mb-8 tracking-wider drop-shadow-lg">
            AGNESE
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-2 italic drop-shadow">
            precas
          </p>

          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 drop-shadow">
            Priecāsimies svinēt mūsu mīlestības
            <br className="hidden sm:block" />
            svētkus kopā ar Jums!
          </p>

          <div className="text-center mb-6 sm:mb-8">
            <div className="text-lg sm:text-xl text-white/90 mb-2 drop-shadow">
              Sestdiena, 2025. gada{" "}
              <span className="text-3xl sm:text-4xl font-light">19.</span>{" "}
              jūlijs
            </div>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

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

      {/* Photo Gallery */}
      <section
        id="gallery"
        className="py-8 sm:py-20 px-2 sm:px-4 bg-gradient-to-b from-green-50 to-pink-50"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light text-center text-stone-700 mb-8 sm:mb-16 tracking-wide">
            Mūsu Galerija
          </h2>
          <PhotoGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-20 px-2 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-light text-center text-stone-700 mb-8 sm:mb-16 tracking-wide">
            Kontaktinformācija
          </h2>
          <ContactInfo />
        </div>
      </section>

    </Layout>
  );
};

export default Index;
