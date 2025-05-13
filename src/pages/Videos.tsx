
import React from 'react';
import VideoList from '@/components/VideoList';

const Videos = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-curso-azul-escuro text-white py-4">
        <div className="container-curso">
          <h1 className="text-2xl md:text-3xl font-bold">
            Curso de Portugol
          </h1>
        </div>
      </header>
      
      <main>
        <section className="section-padding bg-white">
          <div className="container-curso">
            <VideoList />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Videos;
