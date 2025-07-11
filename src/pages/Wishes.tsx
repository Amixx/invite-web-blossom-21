import { useState, useEffect } from "react";
import { Heart, Send } from "lucide-react";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";

const placeholders = [
  "Novēlu jums...",
  "Ceru, ka jums...",
  "Vēlos jums novēlēt...",
  "Lai jums vienmēr...",
  "Nekad neaizmirstiet, ka...",
];

const Wishes = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        setIsVisible(true);
      }, 150);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    // TODO: Implement actual submission logic
    setTimeout(() => {
      alert("Paldies par novēlējumu! ❤️");
      setName("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 pb-8 sm:pb-12 px-2 sm:px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Heart size={48} className="text-pink-500 fill-pink-200" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-light text-stone-700 mb-12 tracking-wide">
            Novēlējumi
          </h1>

          <div className="mb-12 sm:mb-16">
            <div className="relative max-w-3xl mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 text-6xl text-pink-200 opacity-50 font-serif">
                "
              </div>
              <div className="absolute -bottom-4 -right-4 text-6xl text-pink-200 opacity-50 font-serif">
                "
              </div>

              {/* Poem */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl px-4 py-8 sm:px-6 sm:py-12 shadow-sm border border-pink-100">
                <div className="text-center space-y-3 sm:space-y-4">
                  <p className="text-lg sm:text-xl text-stone-700 font-light italic leading-relaxed">
                    Cik labi, ar tevi var neizlikties,
                  </p>
                  <p className="text-lg sm:text-xl text-stone-700 font-light italic leading-relaxed">
                    Es tikai ar tevi gribu tikties,
                  </p>
                  <p className="text-lg sm:text-xl text-stone-700 font-light italic leading-relaxed">
                    Es gribu, lai tikai tu manī skaties, -
                  </p>
                  <p className="text-lg sm:text-xl text-stone-700 font-light italic leading-relaxed">
                    Kad tu manī skaties, es esmu patiess.
                  </p>
                  <div className="pt-4 border-t border-pink-200 mt-6">
                    <p className="text-sm text-stone-500 font-medium tracking-wide">
                      /Imants Ziedonis/
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base text-stone-500 mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed opacity-80">
            Mēs ļoti novērtējam jūsu vārdus, tie sildīs mūsu sirdis mūžīgi!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-12 sm:pb-20 px-2 sm:px-4">
        <div className="container mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 border border-pink-100"
          >
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-stone-700 mb-2"
              >
                Vārds
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 sm:px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                placeholder="Jūsu vārds"
              />
            </div>

            <div className="mb-6 sm:mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-stone-700 mb-2"
              >
                Novēlējums <span className="text-pink-600">*</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-3 sm:px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder=""
                />
                {!message && (
                  <div
                    className={`absolute top-3 left-3 sm:left-4 text-stone-400 pointer-events-none transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {placeholders[currentPlaceholder]}
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={!message.trim() || isSubmitting}
              className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-stone-300 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sūta...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Nosūtīt</span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Wishes;
