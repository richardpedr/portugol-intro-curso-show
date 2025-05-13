
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import VideoPlayer from './VideoPlayer';

// Dados dos vídeos do curso de Portugol
const videos = [
  {
    id: 1,
    title: "Apresentação do curso",
    description: "Introdução ao curso de Portugol e visão geral do conteúdo",
    duration: "10:15",
    module: "Módulo 1",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Apresentação+do+curso",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 2,
    title: "O que é programação",
    description: "Conceitos básicos e fundamentos da programação",
    duration: "12:30",
    module: "Módulo 1",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=O+que+é+programação",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 3,
    title: "Introdução à Lógica de Programação pt1",
    description: "Primeiros conceitos sobre lógica de programação",
    duration: "15:45",
    module: "Módulo 1",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Lógica+pt1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 4,
    title: "Introdução à Lógica de Programação pt2",
    description: "Continuação dos conceitos de lógica de programação",
    duration: "14:20",
    module: "Módulo 1",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Lógica+pt2",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 5,
    title: "Introdução à Lógica de Programação pt3",
    description: "Conclusão dos conceitos de lógica de programação",
    duration: "16:10",
    module: "Módulo 1",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Lógica+pt3",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 6,
    title: "Introdução às Estruturas de Controle pt1",
    description: "Conceitos básicos de estruturas condicionais",
    duration: "18:30",
    module: "Módulo 2",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Estruturas+pt1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 7,
    title: "Introdução às Estruturas de Controle pt2",
    description: "Aprofundamento em estruturas condicionais",
    duration: "17:45",
    module: "Módulo 2",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Estruturas+pt2",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 8,
    title: "Introdução laços de repetição",
    description: "Conceitos iniciais de loops e iterações",
    duration: "20:15",
    module: "Módulo 2",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Laços+Intro",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 9,
    title: "Aula faça, enquanto e para",
    description: "Detalhamento dos diferentes tipos de laços: do-while, while e for",
    duration: "22:30",
    module: "Módulo 2",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Faça+Enquanto+Para",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 10,
    title: "Exercício pt1",
    description: "Aplicação prática dos conceitos aprendidos - parte 1",
    duration: "25:10",
    module: "Módulo 3",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Exercício+pt1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 11,
    title: "Exercício pt2",
    description: "Aplicação prática dos conceitos aprendidos - parte 2",
    duration: "23:45",
    module: "Módulo 3",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Exercício+pt2",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  }
];

const VideoList = () => {
  const [selectedVideo, setSelectedVideo] = useState<null | {
    title: string;
    videoUrl: string;
  }>(null);
  
  const handleVideoClick = (title: string, videoUrl: string) => {
    setSelectedVideo({ title, videoUrl });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="space-y-8">
      {selectedVideo && (
        <div className="mb-12">
          <VideoPlayer title={selectedVideo.title} videoUrl={selectedVideo.videoUrl} />
        </div>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleVideoClick(video.title, video.videoUrl)}>
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full rounded-t-lg h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                  <Play className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <Badge className="absolute top-3 right-3 bg-blue-600">
                {video.duration}
              </Badge>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
