import { Logo } from "@/components/shared/Logo";
import { NormalMovie } from "./components/NormalMovie";
import { TrendingMovies } from "./components/TrendingMovies";



export default function UploadMoviePage (){

      return (

            <div className="bg-zinc-900 h-full flex flex-col justify-center items-center" >
               <Logo/>
               <h1 className="text-2xl my-8 font-semibold">Sube tus películas</h1>
               <div className="max-w-2xl mx-auto grid-cols-2 gap-4">
                  <NormalMovie/>
                  <TrendingMovies/>
               </div>
            </div>
            
      )
}