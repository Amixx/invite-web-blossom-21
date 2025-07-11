import { useState, useEffect } from "react";
import { Heart, Send, Clock, CheckCircle, XCircle, X } from "lucide-react";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import { supabase } from "@/lib/supabase";
import {
  isInCooldown,
  getRemainingCooldownTime,
  setLastWishTime,
} from "@/lib/deviceId";
import { getLatvianPlural } from "@/utils/latvian";

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
  const [wishesCount, setWishesCount] = useState(0);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [isInCooldownState, setIsInCooldownState] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

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

  // Load wishes count and check cooldown on mount
  useEffect(() => {
    const loadWishesCount = async () => {
      try {
        const { count } = await supabase
          .from("wishes")
          .select("*", { count: "exact", head: true });
        setWishesCount(count || 0);
      } catch (error) {
        console.error("Error loading wishes count:", error);
      }
    };

    loadWishesCount();

    const cooldownCheck = isInCooldown();
    setIsInCooldownState(cooldownCheck);

    if (cooldownCheck) {
      setCooldownTime(getRemainingCooldownTime());
    }
  }, []);

  // Update cooldown timer
  useEffect(() => {
    if (!isInCooldownState) return;

    const interval = setInterval(() => {
      const remaining = getRemainingCooldownTime();
      setCooldownTime(remaining);

      if (remaining <= 0) {
        setIsInCooldownState(false);
        setCooldownTime(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isInCooldownState]);

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("wishes").insert([
        {
          name: name.trim(),
          message: message.trim(),
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Error saving wish:", error);
        setNotification({
          message: "Kļūda saglabājot novēlējumu. Lūdzu mēģiniet vēlreiz.",
          type: 'error'
        });
      } else {
        // Set cooldown
        setLastWishTime();
        setIsInCooldownState(true);
        setCooldownTime(getRemainingCooldownTime());

        // Update wishes count
        setWishesCount((prev) => prev + 1);

        setNotification({
          message: "Paldies par novēlējumu! ❤️",
          type: 'success'
        });
        setName("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification({
        message: "Kļūda saglabājot novēlējumu. Lūdzu mēģiniet vēlreiz.",
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Navigation />
      
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className={`
            flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg border max-w-md
            ${notification.type === 'success' 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
            }
          `}>
            {notification.type === 'success' ? (
              <CheckCircle size={20} className="text-green-600 shrink-0" />
            ) : (
              <XCircle size={20} className="text-red-600 shrink-0" />
            )}
            <span className="text-sm font-medium">{notification.message}</span>
            <button
              onClick={() => setNotification(null)}
              className="text-gray-500 hover:text-gray-700 shrink-0"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

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

          <p className="text-base text-stone-500 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed opacity-80">
            Mēs ļoti novērtējam jūsu vārdus, tie sildīs mūsu sirdis mūžīgi!
          </p>

          {/* Wishes count */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
              <Heart size={16} className="fill-current" />
              {wishesCount > 0 ? (
                <span>Jau {wishesCount} {getLatvianPlural(wishesCount, "novēlējums", "novēlējumi")}!</span>
              ) : (
                <span>Būsi pirmais?</span>
              )}
            </div>
          </div>
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

            {/* Cooldown timer display */}
            {isInCooldownState && (
              <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-center space-x-2 text-amber-700">
                  <Clock size={16} />
                  <span className="text-sm">
                    Jaunu novēlējumu varēsiet pievienot pēc{" "}
                    {Math.floor(cooldownTime / 60)}:
                    {(cooldownTime % 60).toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={!message.trim() || isSubmitting || isInCooldownState}
              className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-stone-300 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sūta...</span>
                </>
              ) : isInCooldownState ? (
                <>
                  <Clock size={18} />
                  <span>
                    Gaidiet {Math.floor(cooldownTime / 60)}:
                    {(cooldownTime % 60).toString().padStart(2, "0")}
                  </span>
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
