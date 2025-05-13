
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-curso flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="/" className="text-curso-azul-escuro font-title text-xl font-bold">
            Curso<span className="text-curso-azul-destaque">Portugol</span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-curso-text-primary hover:text-curso-azul-destaque transition-colors">
            Início
          </a>
          <a href="#sobre" className="text-curso-text-primary hover:text-curso-azul-destaque transition-colors">
            Sobre o Curso
          </a>
          <a href="#modulos" className="text-curso-text-primary hover:text-curso-azul-destaque transition-colors">
            Módulos
          </a>
          <a href="#inscricao" className="text-curso-text-primary hover:text-curso-azul-destaque transition-colors">
            Inscrição
          </a>
          <Button className="btn-primary">
            Acessar Plataforma
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#inicio"
              className="text-curso-text-primary hover:text-curso-azul-destaque transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-curso-text-primary hover:text-curso-azul-destaque transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre o Curso
            </a>
            <a
              href="#modulos"
              className="text-curso-text-primary hover:text-curso-azul-destaque transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Módulos
            </a>
            <a
              href="#inscricao"
              className="text-curso-text-primary hover:text-curso-azul-destaque transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inscrição
            </a>
            <Button className="btn-primary w-full">
              Acessar Plataforma
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
