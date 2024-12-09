"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Signin from "./Signin";
import Link from "next/link";
// Composant du menu mobile
export function MenuNavMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" aria-label="Open Menu">
          ☰
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64 bg-white">
        <SheetHeader>
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
        </SheetHeader>
        <ul className="mt-6 space-y-4">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Annonce"
              className="text-gray-700 hover:text-gray-900"
            >
              Annonces
            </Link>
          </li>
          <li>
            <Link href="/Entreposage" className="text-gray-700 hover:text-gray-900">
              Entreposage
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>

        <div className="mt-8">
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
      </SheetContent>
    </Sheet>
  );
}
