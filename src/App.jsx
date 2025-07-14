import React from "react";
import { Button } from "/src/ui/button";
import { Card, CardContent } from "/src/ui/card";
import { Input } from "/src/ui/input";
import { Textarea } from "/src/ui/textarea";
import { useState } from "react";
import { Paintbrush, Shirt, CupSoda, PenTool, Quote } from "lucide-react";

const services = [
  {
    icon: <Shirt className="w-8 h-8 text-primary" />,
    title: "Nadruki na koszulkach",
    description: "Spersonalizowane logo i grafiki nadrukowane na wysokiej jakości koszulkach."
  },
  {
    icon: <CupSoda className="w-8 h-8 text-primary" />,
    title: "Nadruki na kubkach",
    description: "Oznakuj swoje kubki i filiżanki profesjonalnymi wzorami."
  },
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "Nadruki na długopisach",
    description: "Eleganckie nadruki logo na długopisach do celów promocyjnych."
  }
];

const galleryImages = [
  "/images/tshirt1.jpg",
  "/images/cup1.jpg",
  "/images/pen1.jpg",
  "/images/tshirt2.jpg",
  "/images/cup2.jpg",
  "/images/pen2.jpg"
];

const partners = [
  {
    name: "Blum",
    logo: "/logos/blum.svg"
  },
  {
    name: "Ikea",
    logo: "/logos/ikea.svg"
  },
  {
    name: "Algida",
    logo: "/logos/algida.svg"
  },
  {
    name: "Bic",
    logo: "/logos/bic.svg"
  },
  {
    name: "Coca-Cola",
    logo: "/logos/coca-cola.svg"
  },
  {
    name: "Axpol",
    logo: "/logos/axpol.png"
  }
];

export default function HomePage() {
   // Form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulate API submission delay
    setTimeout(() => {
      console.log("Submitted data:", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };


  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto px-4">
        <section className="text-center py-10">
            <h1 className="text-4xl font-bold mb-4">Agencja reklamowa OLEK</h1>
            <p className="text-lg text-gray-600 mb-6">
              Od 1992 czynimy twój biznej bardziej rozpoznawalnym
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 py-10">
            {services.map((service, index) => (
              <Card key={index} className="rounded-2xl shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="py-10 bg-white rounded-2xl shadow-md mt-10 text-center">
            <h2 className="text-2xl font-bold mb-4">Dlaczego warto nam zaufać?</h2>
            <div className="text-gray-600 mb-6 space-y-4 px-4 max-w-3xl mx-auto text-justify">
              <p>
                Działamy na rynku od 1992 roku, łącząc wieloletnie doświadczenie z pasją do druku reklamowego. Specjalizujemy się zarówno w popularnych produktach,
                takich jak koszulki, kubki, długopisy czy parasole, jak i w realizacjach nietypowych, które dla konkurencji są wyzwaniem nie do pokonania.
                Dzięki nowoczesnym technologiom i indywidualnemu podejściu do każdego zlecenia, dostarczamy wyjątkowe, trwałe i dopasowane do Twoich potrzeb rozwiązania.
              </p>
            </div>
            <a href="#contact">
              <Button variant="outline">Napisz do nas</Button>
            </a>
          </section>

          <section className="py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Galeria</h2>
            <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded-xl shadow-sm"
                />
              ))}
              </div>
            </div>
          </section>

          <section className="py-10 bg-white rounded-2xl shadow-md mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Nasi klienci</h2>

            <div className="overflow-hidden relative">
              <div
                className="flex animate-scroll gap-8"
                style={{ animation: "scroll 30s linear infinite", width: "max-content" }}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-none min-w-[150px] h-32 flex items-center justify-center"
                  >
                    <div className="w-30 h-30 flex items-center justify-center bg-white rounded-md p-2">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Napisz do nas</h2>
            <form className="space-y-4 bg-white p-6 rounded-2xl shadow-md" onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Imię"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                placeholder="Wiadomość"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full">Wyślij</Button>
              {status && <p className="text-center text-sm text-green-600 mt-2">{status}</p>}
            </form>
          </section>
      </div>
    </main>
  );
}
