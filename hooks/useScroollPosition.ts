
"use client"


import { useEffect, useState } from "react"

export const useScroollPosition =()=>{

      const [scrollPosition, setScrollPosition] = useState(0)

      useEffect(() => {
            const updatePosition = () => {
              setScrollPosition(window.pageYOffset);
            };
            window.addEventListener("scroll", updatePosition);
            updatePosition();
          
            return () => {
              // Cleanup correcto para evitar fugas de memoria
              window.removeEventListener("scroll", updatePosition);
            };
          }, []);

      return scrollPosition
}