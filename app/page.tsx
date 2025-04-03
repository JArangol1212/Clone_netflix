import { Navbar } from "@/components/shared/Navbar";
import { SliderVideo } from "@/app/(routes)/home/components/SliderVideo";
import { auth } from "@/auth";


import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import TrendingMovies from "./(routes)/home/components/TrendingMovies/TrendingMovies";
import { LisMovies } from "./(routes)/home/components/ListMovies";





export default async function Home() {

   const session = await auth()

   if(!session || !session.user || !session.user.id) {
      return redirect('/login')
   }

   const userNerFlix = await db.userNetflix.findMany({
      where:{
         userId:session?.user?.id
      }
   })
  
    
   
   const movies = await db.movie.findMany()
      const trendingMovies = await db.popularMovie.findMany({
         orderBy: { ranking: 'asc'}
      })

      console.log(movies)
      console.log(trendingMovies)
   return (

   <div className="relative bg-zinc-900 text-white">
   
   <Navbar users ={userNerFlix}/>
   <SliderVideo/>
   <TrendingMovies movies={trendingMovies}/>
   <LisMovies movies={movies}/>



   </div>
  
   )
}
