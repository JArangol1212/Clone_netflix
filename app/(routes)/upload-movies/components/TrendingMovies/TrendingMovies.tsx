"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { Upload } from "lucide-react"
import { useState } from "react"
import { trendingMovies } from "./TrendingMovies.data"
import { toast } from "@/hooks/use-toast"

export   function TrendingMovies (){
      const [isLoading, setIsLoading] = useState(false)

      const uploadTrendingMovies = async ()=>{
            setIsLoading(true)
            try {
                  await axios.post("/api/create-popular-movies",{
                        movies:trendingMovies
                  }

                  )
                  toast({title: "Película subida con éxito"})
                  setIsLoading(false)
                  
            } catch (error) {
                  console.log(error)
                  setIsLoading(false)
                  
            }
      }


      return (
            <div className="border rounded-lg border-white-400 p-6  hover:bg-slate-500 transition-all duration-300">
                  <h1 className="text-xl font-bold mb-4">Subir películas populares </h1>
                  <Button className="w-full "onClick={uploadTrendingMovies} 
                  variant="secondary"disabled={isLoading}>
                        Subir Películas
                        <Upload className="w-4 h-4 ml-2"/>
                  </Button>
            </div>
      )
}