
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle } from "lucide-react";
import VideoPlayer from './VideoPlayer';

// Dados dos vídeos (você pode substituir pelos seus próprios vídeos)
const videos = [
  {
    id: 1,
    title: "Introdução ao Portugol",
    description: "Conheça o Portugol e configure seu ambiente de desenvolvimento",
    duration: "15:30",
    module: "Módulo 1",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Intro+ao+Portugol",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 2,
    title: "Variáveis e Tipos de Dados",
    description: "Aprenda a criar e utilizar variáveis em Portugol",
    duration: "20:45",
    module: "Módulo 1",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Variáveis",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 3,
    title: "Estruturas Condicionais",
    description: "Saiba como implementar decisões em seus programas",
    duration: "18:20",
    module: "Módulo 2",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Condicionais",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 4,
    title: "Laços de Repetição",
    description: "Aprenda a criar loops e repetições em seus algoritmos",
    duration: "25:10",
    module: "Módulo 2",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Loops",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 5,
    title: "Vetores e Matrizes",
    description: "Trabalhe com coleções de dados em Portugol",
    duration: "22:30",
    module: "Módulo 3",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Vetores",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
  },
  {
    id: 6,
    title: "Funções e Procedimentos",
    description: "Crie código reutilizável com funções em Portugol",
    duration: "27:15",
    module: "Módulo 3",
    thumbnail: "https://placehold.co/640x360/1e3a8a/ffffff?text=Funções",
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
                  <Play className="h-8 w-8 text-curso-azul-destaque" />
                </div>
              </div>
              <Badge className="absolute top-3 right-3 bg-curso-azul-destaque">
                {video.duration}
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{video.title}</CardTitle>
              </div>
              <Badge variant="outline" className="mt-1">
                {video.module}
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription>{video.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
