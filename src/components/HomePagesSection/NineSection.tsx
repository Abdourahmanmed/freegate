import React from "react";
import Container from "../Container";
import Image from "next/image";

const NineSection = () => {
  return (
    <Container className="py-6 bg-blue-100">
      <h1 className="text-2xl sm:text-3xl font-semibold text-primary text-center lg:text-left">
        Offrir un support client personnalisé
      </h1>
      <p className="py-4 text-sm sm:text-base text-primary text-center lg:text-left">
        Freegate propose un support client personnalisé pour répondre aux
        questions, résoudre les problèmes et fournir des conseils aux
        utilisateurs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Assistance technique */}
        <div className="text-center">
          <Image
            src="/arlington-research-Kz8nHVg_tGI-unsplash.jpg"
            alt="assistance technique"
            width={300}
            height={100}
            className="rounded-md mx-auto"
          />
          <h1 className="text-xl font-semibold text-primary py-2">Assistance technique</h1>
          <p className="text-primary">
            Obtenez de l'aide pour utiliser la plateforme et résoudre les problèmes techniques.
          </p>
        </div>

        {/* Support téléphonique */}
        <div className="text-center">
          <Image
            src="/tyler-franta-iusJ25iYu1c-unsplash.jpg"
            alt="assistance technique"
            width={300}
            height={100}
            className="rounded-md mx-auto"
          />
          <h1 className="text-xl font-semibold text-primary py-2">Support téléphonique</h1>
          <p className="text-primary">
            Communiquez avec l'équipe de support client par téléphone.
          </p>
        </div>

        {/* Chat en ligne */}
        <div className="text-center">
          <Image
            src="/windows-6G6akT8biLg-unsplash.jpg"
            alt="assistance technique"
            width={300}
            height={100}
            className="rounded-md mx-auto"
          />
          <h1 className="text-xl font-semibold text-primary py-2">Chat en ligne</h1>
          <p className="text-primary">
            Bénéficiez d'une assistance instantanée via le chat en ligne.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NineSection;
