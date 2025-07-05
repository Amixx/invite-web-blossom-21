
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Heart, Users, Gift, Mail } from "lucide-react";
import RSVPForm from "@/components/RSVPForm";
import PhotoGallery from "@/components/PhotoGallery";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: "home", label: "Sākums", icon: Heart },
              { id: "details", label: "Detaļas", icon: Calendar },
              { id: "venue", label: "Vieta", icon: MapPin },
              { id: "rsvp", label: "RSVP", icon: Users },
              { id: "gallery", label: "Galerija", icon: Gift },
              { id: "contact", label: "Kontakti", icon: Mail },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center space-x-2 text-stone-600 hover:text-pink-600 transition-colors duration-300"
              >
                <Icon size={16} />
                <span className="hidden md:inline font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-green-100/20"></div>
        
        {/* Decorative florals */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <img src="/lovable-uploads/5a6cf97a-582d-4a80-9476-89f831fd01a2.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-10 right-10 w-40 h-40 opacity-20 transform rotate-180">
          <img src="/lovable-uploads/5a6cf97a-582d-4a80-9476-89f831fd01a2.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="text-center z-10 px-4">
          {/* Heart with cross symbol */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Heart size={60} className="text-stone-700 fill-stone-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-0.5 bg-stone-700"></div>
                <div className="absolute w-0.5 h-6 bg-stone-700"></div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-light text-stone-700 mb-4 tracking-wider">
            MATĪSS
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-px bg-stone-400"></div>
            <span className="mx-4 text-2xl text-stone-500 font-light italic">&</span>
            <div className="w-16 h-px bg-stone-400"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light text-stone-700 mb-8 tracking-wider">
            AGNESE
          </h1>
          
          <p className="text-xl text-stone-600 mb-2 italic">precas</p>
          
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Priecāsimies svinet mūsu mīlestības<br />
            svētkus kopā ar Jums!
          </p>

          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-sm text-stone-500 uppercase tracking-wider mb-1">Sestdiena</div>
              <div className="text-5xl font-light text-stone-700">19.</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-stone-500 uppercase tracking-wider mb-1">Jūlijs</div>
              <div className="text-2xl text-stone-600">2025</div>
            </div>
          </div>

          <Button 
            onClick={() => scrollToSection("details")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Uzzināt vairāk
          </Button>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-light text-center text-stone-700 mb-16 tracking-wide">
            Kāzu Detaļas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-pink-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Calendar className="mx-auto mb-4 text-pink-500" size={48} />
                <h3 className="text-2xl font-medium text-stone-700 mb-4">Ceremonijas Laiks</h3>
                <p className="text-lg text-stone-600 mb-2">Sestdiena, 19. Jūlijs 2025</p>
                <p className="text-lg text-stone-600">Plkst 15:00</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <MapPin className="mx-auto mb-4 text-green-500" size={48} />
                <h3 className="text-2xl font-medium text-stone-700 mb-4">Vieta</h3>
                <p className="text-lg text-stone-600 mb-2">Rīgas Svētā Pāvila Baznīca</p>
                <p className="text-lg text-stone-600">Augusta Deglava iela 1.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section id="venue" className="py-20 px-4 bg-gradient-to-r from-pink-50 to-green-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-light text-center text-stone-700 mb-16 tracking-wide">
            Ceremonijas Vieta
          </h2>
          
          <Card className="shadow-xl border-0">
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-to-r from-pink-200 to-green-200 rounded-t-lg flex items-center justify-center">
                <MapPin size={64} className="text-stone-600" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-stone-700 mb-4">Rīgas Svētā Pāvila Baznīca</h3>
                <p className="text-lg text-stone-600 mb-4">Augusta Deglava iela 1, Rīga</p>
                <p className="text-stone-600 leading-relaxed">
                  Skaista vēsturiska baznīca Rīgas centrā, kas būs ideāla vieta mūsu īpašajai dienai. 
                  Ceremonija sāksies plkst. 15:00, lūdzam ierasties laicīgi.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-light text-center text-stone-700 mb-16 tracking-wide">
            RSVP
          </h2>
          <RSVPForm />
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-green-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-light text-center text-stone-700 mb-16 tracking-wide">
            Mūsu Stāsts
          </h2>
          <PhotoGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-light text-center text-stone-700 mb-16 tracking-wide">
            Kontaktinformācija
          </h2>
          <ContactInfo />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-100 text-center">
        <div className="container mx-auto px-4">
          <Heart className="mx-auto mb-4 text-pink-500 fill-pink-200" size={32} />
          <p className="text-stone-600 mb-2">Matīss & Agnese</p>
          <p className="text-stone-500">19. Jūlijs 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
