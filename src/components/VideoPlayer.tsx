
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface VideoPlayerProps {
  title: string;
  videoUrl: string;
}

const VideoPlayer = ({ title, videoUrl }: VideoPlayerProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-video">
          <iframe 
            src={videoUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
