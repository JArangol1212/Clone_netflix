import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
} from "@/components/ui/carousel"




import { CarouselMovieProps } from "./CarouselMovie.types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { ActionsButtons } from "./ActionsButtons";
import { ChaptersInfo } from "../../Chapterinfo";
import { FilmeGenre } from "../../FilmGenre";


export function CarouselMovie(props: CarouselMovieProps) {

      const { movies, isMyList } = props

      return (
            <Carousel className="w-full">
                  <CarouselContent className="-ml-1 gap-2 overflow-inherit">


                        {movies.map((movie) => (
                              <CarouselItem key={movie.id}
                                    className="pl-1 md:basis-1/2 lg:basis-1/5 transition delay-300 group relative hover:bg-transparent">

                                    <Card className="cursor-pointer transition delay-300 group relative:">

                                          <CardContent className="flex aspect-video items-center justify-center p-6 relative border-none rounded-md bg-zinc-900">
                                                <Image src={movie.thumbnailUrl} alt="Image" fill sizes="(max-width: 700px) 100vw, 50vw"
                                                      className="rounded-md"></Image>

                                                <div className="opacity-0 absolute top-0 transition-all duration-300 invisible group-hover:opacity-100 group-hover:visible
                                                                   w-full bg-zinc-900 rounded-lg scale-0 group-hover:scale-125 group-hover:-translate-y-[5vw]">
                                                      <Image src={movie.thumbnailUrl}
                                                            alt="movie"
                                                            width={200}
                                                            height={200}
                                                            className="cursor-pointer object-cover transition-all duration-300 shadow-xl w-full rounded-t-lg">

                                                      </Image>
                                                      <div className="p-2 shadow-lg">
                                                            <ActionsButtons movieId={movie.id} movie={movie} isMyList={isMyList} />

                                                      </div>
                                                          <ChaptersInfo age={movie.age} duration={movie.duration}/>
                                                                        
                                                            <FilmeGenre genres={movie.genre}/>
                                                  
                                                </div>
                                          </CardContent>

                                    </Card>
                              </CarouselItem>


                        ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
            </Carousel>

      )
}