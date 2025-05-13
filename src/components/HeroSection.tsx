
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-gradient-to-b from-curso-cinza-claro to-white section-padding">
      <div className="container-curso">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-curso-azul-escuro leading-tight mb-4">
              Introdução à Programação com Portugol
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Aprenda os conceitos básicos de programação de forma simples e prática, 
              utilizando o Portugol - uma linguagem algorítmica em português.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-base">
                Começar Agora
              </Button>
              <Button variant="outline" className="border-curso-azul-destaque text-curso-azul-destaque hover:bg-curso-azul-destaque hover:text-white transition-colors duration-300 text-base">
                Conhecer o Programa
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                Novo
              </div>
              <span className="ml-2 text-gray-600">
                Curso atualizado em Maio de 2025
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-curso-azul-claro/10 rounded-xl overflow-hidden shadow-lg">
                <div className="p-6 bg-white m-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-gray-500 font-mono">portugol_exemplo.alg</div>
                  </div>
                  <pre className="text-sm font-mono bg-gray-50 p-4 rounded-md overflow-auto">
                    <code className="text-gray-800">
{`algoritmo "Olá Mundo"
inicio
   escreva("Olá, mundo!")
   escreva("Bem-vindo ao curso de Portugol")
fim`}
                    </code>
                  </pre>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-curso-azul-destaque rounded-full opacity-20 animate-float"></div>
                <div className="absolute top-10 -left-6 w-16 h-16 bg-curso-azul-claro rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
