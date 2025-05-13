
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";
import VideoList from '@/components/VideoList';

const Videos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="section-padding bg-white">
          <div className="container-curso">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-curso-azul-escuro mb-4">
                Vídeos do Curso de Portugol
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Aprenda programação com Portugol através das nossas videoaulas completas.
              </p>
            </div>
            
            <VideoList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
