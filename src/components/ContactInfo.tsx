
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Gift } from "lucide-react";

const ContactInfo = () => {
  const contacts = [
    {
      title: "Matīss",
      phone: "+371 12345678",
      email: "matiss@example.com",
      role: "Līgavainis"
    },
    {
      title: "Agnese", 
      phone: "+371 87654321",
      email: "agnese@example.com",
      role: "Līgava"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        {contacts.map((contact, index) => (
          <Card key={index} className="shadow-lg border-pink-200 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-medium text-stone-700 mb-2">{contact.title}</h3>
              <p className="text-stone-500 mb-6 italic">{contact.role}</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="text-green-500" size={20} />
                  <a href={`tel:${contact.phone}`} className="text-stone-600 hover:text-green-600 transition-colors">
                    {contact.phone}
                  </a>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="text-pink-500" size={20} />
                  <a href={`mailto:${contact.email}`} className="text-stone-600 hover:text-pink-600 transition-colors">
                    {contact.email}
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
            <MapPin className="mx-auto mb-4 text-green-500" size={48} />
            <h3 className="text-2xl font-medium text-stone-700 mb-4">Vietas informācija</h3>
            <p className="text-stone-600 mb-4">
              Rīgas Svētā Pāvila Baznīca<br />
              Augusta Deglava iela 1<br />
              Rīga, LV-1009
            </p>
            <Button 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-50"
              onClick={() => window.open("https://maps.google.com", "_blank")}
            >
              Skatīt kartē
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-pink-200">
          <CardContent className="p-8 text-center">
            <Gift className="mx-auto mb-4 text-pink-500" size={48} />
            <h3 className="text-2xl font-medium text-stone-700 mb-4">Dāvanu Saraksts</h3>
            <p className="text-stone-600 mb-4">
              Jūsu klātbūtne ir mums vissvarīgākā dāvana!<br />
              Ja tomēr vēlaties mūs iepriecināt ar kaut ko īpašu...
            </p>
            <Button 
              variant="outline" 
              className="border-pink-500 text-pink-600 hover:bg-pink-50"
            >
              Skatīt vēlmes
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Card className="inline-block shadow-lg bg-gradient-to-r from-pink-50 to-green-50 border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-medium text-stone-700 mb-4">Svarīga informācija</h3>
            <div className="text-stone-600 space-y-2">
              <p>🕒 Lūdzam ierasties baznīcā līdz plkst. 14:45</p>
              <p>📱 Ceremonijas laikā lūdzam izslēgt tālruņus</p>
              <p>📸 Fotogrāfēšana un filmēšana ir atļauta</p>
              <p>🌸 Apģērba kods: eleganti svētku tērpi</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactInfo;
