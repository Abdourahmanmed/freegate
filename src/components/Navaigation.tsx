"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { MenuNavMobile } from "./MenuNavMobile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Signin from "./Signin";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Navigation pour écran large */}
      <div className="hidden lg:flex items-center justify-between h-16 px-8">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image src="/logo.jpg" alt="Logo" width={64} height={20} />
        </div>

        {/* Liens de navigation */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a
              href="/Entreposage"
              className="text-gray-700 hover:text-gray-900"
            >
              Entreposage
            </a>
          </li>
          <li>
            <a href="/Contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>

        {/* Bouton d'action */}

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Sign In
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] text-center">
            <DialogHeader>
              <DialogTitle>Connexion</DialogTitle>
              <DialogDescription>
                Veuiller se conncter pour faire une lettre credit.
              </DialogDescription>
            </DialogHeader>
             <Signin />
          </DialogContent>
        </Dialog>
      </div>

      {/* Navigation pour mobile */}
      <div className="flex lg:hidden items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image src="/logo.jpg" alt="Logo" width={64} height={20} />
        </div>

        {/* Menu Mobile */}
        <MenuNavMobile />
      </div>
    </nav>
  );
};

export default Navigation;
