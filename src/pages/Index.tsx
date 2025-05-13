
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CourseModules from '@/components/CourseModules';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <section id="sobre" className="section-padding bg-white">
          <div className="container-curso">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-curso-azul-escuro mb-4">
                Por que aprender Portugol?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                O Portugol é uma pseudolinguagem ideal para dar os primeiros passos na programação.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-curso-cinza-claro p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-curso-azul-destaque rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sintaxe em Português</h3>
                <p className="text-gray-600">
                  Aprenda os conceitos de programação na sua língua nativa, facilitando o entendimento.
                </p>
              </div>
              
              <div className="bg-curso-cinza-claro p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-curso-azul-destaque rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Foco na Lógica</h3>
                <p className="text-gray-600">
                  Concentre-se no desenvolvimento da lógica de programação sem se preocupar com sintaxes complexas.
                </p>
              </div>
              
              <div className="bg-curso-cinza-claro p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-curso-azul-destaque rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Base Sólida</h3>
                <p className="text-gray-600">
                  Construa uma fundação forte para depois migrar facilmente para linguagens como Python, Java ou JavaScript.
                </p>
              </div>
            </div>
            
            <div className="mt-16 bg-curso-cinza-medio p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-bold text-curso-azul-escuro mb-4">
                    Sobre o Instrutor
                  </h3>
                  <p className="text-gray-700 mb-4">
                    O curso é ministrado por um profissional com mais de 10 anos de experiência 
                    em desenvolvimento de software e ensino de programação.
                  </p>
                  <p className="text-gray-700">
                    Utilizando uma metodologia prática e didática, o instrutor guiará você pelos 
                    fundamentos da programação de forma clara e objetiva, garantindo que mesmo 
                    iniciantes possam acompanhar e evoluir.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 bg-curso-azul-claro rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Separator />
        
        <CourseModules />
        
        <section className="section-padding bg-curso-azul-escuro text-white text-center">
          <div className="container-curso">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pronto para começar sua jornada na programação?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Acesse agora nossos vídeos e comece a aprender Portugol!
            </p>
            <Link to="/videos">
              <Button className="bg-white text-curso-azul-escuro font-medium px-8 py-6 rounded-md hover:bg-gray-100 transition-colors duration-300">
                Acessar Vídeos do Curso
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
