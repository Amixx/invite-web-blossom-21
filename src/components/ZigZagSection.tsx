import { Card, CardContent } from "@/components/ui/card";

const ZigZagSection = ({
  id,
  title,
  content,
  image,
  position,
  index,
}: {
  id: string;
  title: string;
  content: React.ReactNode;
  image: string;
  position: "left" | "right";
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const bgColor = isEven
    ? "bg-white"
    : "bg-gradient-to-r from-pink-50 to-green-50";

  return (
    <section id={id} className={`py-12 sm:py-20 px-4 ${bgColor}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Mobile Layout - Card Style */}
        <div className="lg:hidden">
          <Card className="shadow-xl border-0 overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-light text-stone-700 mb-4 tracking-wide">
                {title}
              </h3>
              <div className="text-stone-600 leading-relaxed">
                {typeof content === "string" ? <p>{content}</p> : content}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Layout - Zig-Zag */}
        <div className="hidden lg:block">
          <div
            className={`flex items-center gap-16 ${
              position === "right" ? "flex-row-reverse" : ""
            }`}
          >
            {/* Image Side */}
            <div className="flex-1">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl xl:text-4xl font-light text-stone-700 mb-6 tracking-wide">
                  {title}
                </h3>
                <div className="text-stone-600 text-lg leading-relaxed">
                  {typeof content === "string" ? <p>{content}</p> : content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZigZagSection;
