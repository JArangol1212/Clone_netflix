"use client"

import { BlockMovies } from "@/components/shared/BlockMovies";
import { ListMoviesProps } from "./ListMovies.types";
import { useLovedFilms } from "@/hooks/use-loved-films";
import { UseCurrentNerflixUser } from "@/hooks/use-current-user";

export function LisMovies(props: ListMoviesProps) {


      const { movies } = props
      const { lovedFilmsByUser } = useLovedFilms()
      const { currentUser } = UseCurrentNerflixUser()

      const userNetflix = currentUser?.id
      const lovedFilms = userNetflix ? lovedFilmsByUser[userNetflix] : []
      return (
            <div>

                  <BlockMovies
                        title="peliculas Favoritas"
                        movies={lovedFilms}
                        isMyList={true}
                  />
                  <BlockMovies
                        title="Peliculas mas recientes "
                        movies={movies}
                        isMyList={false}
                  />

            </div>
      )
}      