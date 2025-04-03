import { Movie } from "@prisma/client";
import { toast } from "./use-toast";
import { UseCurrentNerflixUser } from "./use-current-user";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UseAddFilMyList {
    lovedFilmsByUser: { [userId: string]: Movie[] };
    addLovedFilm: (data: Movie) => void;
    removeLovedItem: (id: string) => void;
}

export const useLovedFilms = create(
    persist<UseAddFilMyList>(
        (set, get) => ({
            lovedFilmsByUser: {},

            addLovedFilm: (data: Movie) => {
                const { currentUser } = UseCurrentNerflixUser.getState();

                if (!currentUser) {
                    return toast({
                        title: "Ningún usuario seleccionado",
                    });
                }

                const currentLovedItems = get().lovedFilmsByUser[currentUser.id] || [];

                const existingItem = currentLovedItems.find((item: Movie) => item.id === data.id);
                if (existingItem) {
                    return toast({
                        title: "La película ya está en tu lista",
                        variant: "destructive",
                    });
                }

                set({
                    lovedFilmsByUser: {
                        ...get().lovedFilmsByUser,
                        [currentUser.id]: [...currentLovedItems, data],
                    },
                });

                toast({
                    title: "Película añadida a tu lista",
                });
            },

            removeLovedItem: (id: string) => {
                const { currentUser } = UseCurrentNerflixUser.getState();

                if (!currentUser) {
                    return toast({
                        title: "Ningún usuario seleccionado",
                        variant: "destructive",
                    });
                }

                const currentLovedItems = get().lovedFilmsByUser[currentUser.id] || [];

                set({
                    lovedFilmsByUser: {
                        ...get().lovedFilmsByUser,
                        [currentUser.id]: currentLovedItems.filter((item) => item.id !== id),
                    },
                });

                toast({
                    title: "La película ha sido eliminada de tu lista",
                });
            },
        }),
        {
            name: "add-loved-films-by-user",
            storage: createJSONStorage(() => localStorage),
        }
    )
);