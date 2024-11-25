"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react"; // Exemple d'icône pour le spinner

const Signin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Réinitialise l'erreur avant une nouvelle tentative

    try {
      const res = await signIn("google", { redirect: false });

      if (res?.error) {
        setError("La connexion a échoué. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Une erreur inattendue s'est produite.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit}
      aria-label="Formulaire de connexion avec Google"
    >
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <Button
        className="bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/70 focus:outline-none flex items-center justify-center transition-transform duration-200 ease-in-out transform hover:scale-105"
        type="submit"
        disabled={isLoading}
        aria-disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="animate-spin w-5 h-5 mr-2" aria-hidden="true" />
        ) : (
          "Se connecter avec Google"
        )}
      </Button>
    </form>
  );
};

export default Signin;
