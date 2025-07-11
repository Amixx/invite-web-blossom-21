import { useState } from "react";
import {
  Calendar,
  Heart,
  Gift,
  Mail,
  MessageSquare,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export type NavItem = {
  id: string;
  label: string;
  icon: any;
  action: () => void;
};

const Navigation = ({
  items,
  showBackButton = false,
  backButtonLabel = "Atpakaļ",
}: {
  items?: NavItem[];
  showBackButton?: boolean;
  backButtonLabel?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const scrollToSection = (section: string) => {
    if (isHomePage) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page first, then scroll to section
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  const defaultItems: NavItem[] = [
    {
      id: "home",
      label: "Sākums",
      icon: Heart,
      action: () => scrollToSection("home"),
    },
    {
      id: "story",
      label: "Stāsts",
      icon: Heart,
      action: () => scrollToSection("story"),
    },
    {
      id: "ceremony",
      label: "Ceremonija",
      icon: Calendar,
      action: () => scrollToSection("ceremony"),
    },
    {
      id: "afterparty",
      label: "Svinības",
      icon: Gift,
      action: () => scrollToSection("afterparty"),
    },
    {
      id: "gallery",
      label: "Galerija",
      icon: Gift,
      action: () => scrollToSection("gallery"),
    },
    {
      id: "wishes",
      label: "Novēlējumi",
      icon: MessageSquare,
      action: () => navigate("/wishes"),
    },
    {
      id: "contact",
      label: "Kontakti",
      icon: Mail,
      action: () => scrollToSection("contact"),
    },
  ];

  const navItems = items || defaultItems;

  const handleItemClick = (item: NavItem) => {
    item.action();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex justify-center space-x-8">
          {showBackButton && (
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-stone-600 hover:text-pink-600 transition-colors duration-300"
            >
              <ArrowLeft size={16} />
              <span className="text-sm font-medium">{backButtonLabel}</span>
            </button>
          )}
          {!showBackButton &&
            navItems.map(({ id, label, icon: Icon, action }) => (
              <button
                key={id}
                onClick={action}
                className="flex items-center space-x-2 text-stone-600 hover:text-pink-600 transition-colors duration-300"
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <div className="flex justify-between items-center">
            {showBackButton && (
              <button
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 text-stone-600 hover:text-pink-600 transition-colors duration-300"
              >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">{backButtonLabel}</span>
              </button>
            )}

            {!showBackButton && (
              <>
                <div className="flex items-center space-x-2">
                  <Heart size={20} className="text-pink-500" />
                  <span className="text-sm font-medium text-stone-700">
                    Matīss & Agnese
                  </span>
                </div>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-stone-600 hover:text-pink-600 transition-colors duration-300"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`
            fixed inset-0 top-16 bg-white/40 backdrop-blur-lg transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 to-white/30"></div>
            <div className="container mx-auto px-4 py-4 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                {navItems.map(({ id, label, icon: Icon, action }) => (
                  <button
                    key={id}
                    onClick={() =>
                      handleItemClick({ id, label, icon: Icon, action })
                    }
                    className="flex flex-col items-center space-y-3 p-6 bg-white/50 rounded-xl border border-white/60 hover:bg-white/60 hover:border-white/80 transition-all duration-300 shadow-lg backdrop-blur-md"
                  >
                    <Icon size={24} className="text-pink-500" />
                    <span className="text-sm font-medium text-stone-700">
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
