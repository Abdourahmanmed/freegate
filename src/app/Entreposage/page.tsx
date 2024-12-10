"use client";
import React from "react";
import Image from "next/image";
import Footer from '@/components/Footer'
import Navigation from '@/components/Navaigation'

interface Entrepot {
  id: number;
  nom: string;
  adresse: string;
  capacite: string;
  description: string;
  image: string; // URL de l'image
}

const entrepots: Entrepot[] = [
  {
    id: 1,
    nom: "Entrepôt Nord",
    adresse: "123 Rue du Nord, Ville A",
      capacite: "5000 m²",
    description: "Entrepôt moderne avec température contrôlée.",
    image: "/animations/Memory-storage-bro.svg",
  },
  {
    id: 2,
    nom: "Entrepôt Sud",
    adresse: "456 Avenue du Sud, Ville B",
    capacite: "7000 m²",
    description: "Entrepôt équipé pour les matériaux dangereux.",
    image: "/animations/Memory-storage-bro.svg", 
  },
  {
    id: 3,
    nom: "Entrepôt Est",
    adresse: "789 Boulevard de l'Est, Ville C",
    capacite: "6000 m²",
    description: "Entrepôt logistique avec zones de tri avancées.",
    image: "/animations/Memory-storage-bro.svg", 
  },
];

const Entreposage: React.FC = () => {
  return (
    <div>
      <section className="bg-primary h-[100%] lg:h-[80vh] flex flex-col lg:flex-row justify-between items-center mt-[50px]">
        <div className="w-full lg:w-[55%] text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white py-4">
            <span className="uppercase">freegate:</span> <br /> 
            Découvrez nos entrepôts modernes, conçus pour offrir une solution optimale d'entreposage alliant sécurité, efficacité logistique et standards de qualité élevés.
            </h1>
        </div>

        {/* Illustration GIF */}
        <div className="w-full lg:w-[40%] mt-6 lg:mt-0 flex justify-center">
            <Image
            src="/animations/Happy-announcement-bro.svg" // Chemin vers ton GIF
            alt="Illustration de entrepot"
            width={350} // Largeur de l'image
            height={350} // Hauteur de l'image
            className="object-contain"
            priority/>
            </div>
        </section>
      <Navigation />
    
      <main className="container mx-auto py-10 px-4">
        {/* Liste des entrepôts */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">Liste des entrepôts</h2>
          <p className="py-4 text-sm sm:text-base text-primary">Découvrez nos entrepôts modernes, conçus pour garantir une gestion optimale de vos marchandises avec une logistique de pointe, une sécurité renforcée et des solutions de stockage adaptées à vos besoins.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entrepots.map((entrepot) => (
              <div
                key={entrepot.id}
                className="bg-white shadow-md rounded-lg overflow-hidden border"
              >
                {/* Image de l'entrepôt */}
                <img
                  src={entrepot.image}
                  alt={entrepot.nom}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{entrepot.nom}</h3>
                  <p className="text-gray-600">
                    <strong>Adresse :</strong> {entrepot.adresse}
                  </p>
                  <p className="text-gray-600">
                    <strong>Capacité :</strong> {entrepot.capacite}
                  </p>
                  <p className="text-gray-600">{entrepot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

              {/* Section Sécurité */}
<section className="mt-12">
  <div className="flex items-center space-x-6">
    <div className="w-1/2 animate-fadeInLeft">
      <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
        Sécurité
      </h2>
      <p className="text-gray-600">
        Nos entrepôts sont équipés de systèmes de surveillance 24h/24, de
        détecteurs de fumée et de protocoles d'intervention rapide en cas
        d'urgence.
      </p>
    </div>
    <div className="w-1/3">
      <img
        src="/arlington-research-Kz8nHVg_tGI-unsplash.jpg" // Remplacez par votre image
        alt="Sécurité entrepôt"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

{/* Section Logistique */}
<section className="mt-12">
  <div className="flex items-center space-x-6">
    <div className="w-1/3">
      <img
        src="/arlington-research-Kz8nHVg_tGI-unsplash.jpg" // Remplacez par votre image
        alt="Logistique entrepôt"
        className="rounded-lg shadow-lg"
      />
    </div>
    <div className="w-1/2 animate-fadeInRight">
      <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
        Logistique
      </h2>
      <p className="text-gray-600">
        Nous utilisons des systèmes de gestion logistique avancés pour
        optimiser le stockage et la distribution des marchandises.
      </p>
    </div>
  </div>
</section>

{/* Section Packing */}
<section className="mt-12">
  <div className="flex items-center space-x-6">
    <div className="w-1/2 animate-fadeInLeft">
      <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
        Packing
      </h2>
      <p className="text-gray-600">
        Nos services de packing garantissent une protection maximale pour
        vos produits avec des emballages personnalisés et des matériaux de
        qualité supérieure.
      </p>
    </div>
    <div className="w-1/3">
      <img
        src="/arlington-research-Kz8nHVg_tGI-unsplash.jpg" // Remplacez par votre image
            alt="Packing entrepôt"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

{/* animations dans styles global */}
<style jsx>{`
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-in-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-in-out;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      </main>

      <Footer />
      
    </div>
  );
};

export default Entreposage;

