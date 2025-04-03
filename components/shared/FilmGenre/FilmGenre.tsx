import { FilmGenresProps } from "./FIlmGenres.types";


export function FilmeGenre(props:FilmGenresProps){

      const {genres} =props;

      // convertir genres en un array si es una cadena de texto
      
      return(
            <div className=" flex gap-4 text-[10px] text-white ">

                  {genres.map((genre) =>(
                   
                   <p key={genre}>{genre}</p>
                  ))}
            
            </div>
      )
}