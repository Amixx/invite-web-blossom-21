import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, House, Gift, Church } from "lucide-react";

const ContactInfo = () => {
  const contacts = [
    {
      title: "Matīss",
      phone: "26 613 818",
      role: "Līgavainis",
    },
    {
      title: "Agnese",
      phone: "28 752 157",
      role: "Līgava",
    },
    {
      title: "Ingemārs",
      phone: "28 345 046",
      role: "Vedējs",
    },
    {
      title: "Katrīna",
      phone: "22 372 218",
      role: "Vedēja",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        {contacts.map((contact, index) => (
          <Card
            key={index}
            className="shadow-lg border-pink-200 hover:shadow-xl transition-shadow duration-300"
          >
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-medium text-stone-700 mb-2">
                {contact.title}
              </h3>
              <p className="text-stone-500 mb-6 italic">{contact.role}</p>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="text-green-500" size={20} />
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-stone-600 hover:text-green-600 transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg border-green-200">
          <CardContent className="p-8 text-center">
            <Church className="mx-auto mb-4 text-green-500" size={48} />
            <h3 className="text-2xl font-medium text-stone-700 mb-4">
              Ceremonijas informācija
            </h3>
            <p className="text-stone-600 mb-4">
              Rīgas Svētā Pāvila Baznīca
              <br />
              Augusta Deglava iela 1<br />
              Rīga, LV-1009
            </p>
            <Button
              variant="outline"
              className="border-green-500 text-green-600 hover:bg-green-50"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/FMotrqv46xS6pcgX6",
                  "_blank"
                )
              }
            >
              Skatīt kartē
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-pink-200">
          <CardContent className="p-8 text-center">
            <House className="mx-auto mb-4 text-pink-500" size={48} />
            <h3 className="text-2xl font-medium text-stone-700 mb-4">
              Viesu nama informācija
            </h3>
            <p className="text-stone-600 mb-4">
              Bille
              <br />
              Drabešu pagasts
              <br />
              Cēsu novads, LV-4139
            </p>
            <Button
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-50"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/PqEoCVAmFrbLUFvY8",
                  "_blank"
                )
              }
            >
              Skatīt kartē
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Card className="inline-block shadow-lg bg-gradient-to-r from-pink-50 to-green-50 border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-medium text-stone-700 mb-4">
              Svarīga informācija
            </h3>
            <div className="text-stone-600 space-y-2">
              <p>
                🕒 Lūdzam ierasties baznīcā līdz <strong>plkst. 12:45</strong>
              </p>
              <p>📱 Ceremonijas laikā lūdzam izslēgt tālruņus</p>
              <p>📸 Fotogrāfēšana un filmēšana ir atļauta</p>
              <p>
                🌸 Ieteicamais dreskods: <strong>pasteļtonis</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactInfo;
