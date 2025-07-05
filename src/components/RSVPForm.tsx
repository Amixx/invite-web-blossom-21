
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    guests: "1",
    dietary: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP Form submitted:", formData);
    toast({
      title: "RSVP Nosūtīts!",
      description: "Paldies par atbildi! Mēs ar Jums sazināsimies drīzumā.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      attendance: "",
      guests: "1",
      dietary: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="shadow-xl border-pink-200">
      <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-green-50">
        <CardTitle className="text-2xl text-stone-700 flex items-center justify-center gap-2">
          <Heart className="text-pink-500 fill-pink-200" size={24} />
          Lūdzu, apstipriniet savu dalību
          <Heart className="text-pink-500 fill-pink-200" size={24} />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-stone-700 font-medium">Vārds, Uzvārds *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="mt-2 border-pink-200 focus:border-pink-400"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-stone-700 font-medium">E-pasts *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="mt-2 border-pink-200 focus:border-pink-400"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-stone-700 font-medium">Telefona numurs</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="mt-2 border-pink-200 focus:border-pink-400"
            />
          </div>

          <div>
            <Label className="text-stone-700 font-medium mb-4 block">Vai piedalīsieties kāzās? *</Label>
            <RadioGroup 
              value={formData.attendance} 
              onValueChange={(value) => handleInputChange("attendance", value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" className="text-pink-500" />
                <Label htmlFor="yes" className="text-stone-600">Jā, ar prieku piedalīšos!</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" className="text-pink-500" />
                <Label htmlFor="no" className="text-stone-600">Diemžēl nevarēšu piedalīties</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.attendance === "yes" && (
            <>
              <div>
                <Label htmlFor="guests" className="text-stone-700 font-medium">Cik personu kopā būsiet?</Label>
                <RadioGroup 
                  value={formData.guests} 
                  onValueChange={(value) => handleInputChange("guests", value)}
                  className="mt-2 space-y-2"
                >
                  {[1, 2, 3, 4].map(num => (
                    <div key={num} className="flex items-center space-x-2">
                      <RadioGroupItem value={num.toString()} id={`guests-${num}`} className="text-pink-500" />
                      <Label htmlFor={`guests-${num}`} className="text-stone-600">
                        {num} {num === 1 ? "persona" : "personas"}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="dietary" className="text-stone-700 font-medium">Īpašas uztura vajadzības</Label>
                <Input
                  id="dietary"
                  value={formData.dietary}
                  onChange={(e) => handleInputChange("dietary", e.target.value)}
                  placeholder="Veģetārs, alerģijas, utt."
                  className="mt-2 border-pink-200 focus:border-pink-400"
                />
              </div>
            </>
          )}

          <div>
            <Label htmlFor="message" className="text-stone-700 font-medium">Ziņojums jaunajam pārim</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Jūsu vēlējumi un ziņojums..."
              className="mt-2 border-pink-200 focus:border-pink-400 min-h-[100px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            disabled={!formData.name || !formData.email || !formData.attendance}
          >
            Nosūtīt RSVP
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RSVPForm;
