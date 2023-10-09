'use server';
import { API_BASE_URL } from "../enviroment/constants";

export const fetchAllEpisodes = (url = `${API_BASE_URL}episode`) => {
  return fetch(url)
    .then((res) => res.json())
    .then((response: any) => {
      const { results, info } = response;
      const episodes = results || [];

      if (info.next) {
        // Si hay una página siguiente, hacemos una solicitud recursiva
        return fetchAllEpisodes(info.next).then((nextEpisodes: any[]) => {
          // Concatenamos los resultados actuales con los resultados de la página siguiente
          return episodes.concat(nextEpisodes);
        });
      }

      // Si no hay una página siguiente, devolvemos los resultados actuales
      return episodes;
    });
};