


import { Info, Play } from "lucide-react";
import { Button } from "../../../../../components/ui/button";

export function SliderVideo() {

      return (
        <div className="relative w-full -[80vw] md:h-[56.25vw] lg:h-[45vw]">
          <video
            autoPlay
            loop
            muted
            className="brightness-50 object-fill w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]"
            src="videos/video-1.mp4"
          />
          <div 
          className="flex flex-col justify-end absolute w-full md:w-[36%] px-4
          md:px-0 md:le-[4%] z-20 top-0 -bottom-7 md:bottom-[36%]"
          >
          <div className="pt-24 md:pt-0">
            <h2 className="text-2xl md:text-5xl lg:text-8xl font-bold drop-shadow-xl">
              ArangoDev
            </h2>
            <p className="max-w-md mt-2 text-xs md:text-base">
              Aprende a crear desde cero un clon de NerFlex con todos sus funciones,
               clave, desde la gestion de usuarios hasta la reproducion de videos,
                mientras descubres los secretos detras de una plataforma de streaming exitosa.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-5">
              <Button size="lg" variant="secondary" className="bg-white text-black">
                <Play className="h-6 w-6 mr-2" />
                Reproducir
              </Button>
              <Button size="lg" className="bg-gray-500/50 hover:bg-gray-500/40 text-white">
                <Info className="h-6 w-6 mr-2" />
                Más Informacion
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-transparent bg-no-repeat bg-contain w-full opacity-100 top-auto h-[14.7vw]
         -bottom-16 absolute gradient-video"></div>
        
          
       
        </div>
      );
    }