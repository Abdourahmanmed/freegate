import Container from "@/components/Container";
import LetterOfCreditForm from "@/components/Importateur/Lettre_credit";
import Navigation from "@/components/Navaigation";
import React from "react";

export default function page() {
  return (
    <>
      <Navigation />
      <Container className="mt-[67px] bg-primary text-white py-2">
        <LetterOfCreditForm />
      </Container>
    </>
  );
}
