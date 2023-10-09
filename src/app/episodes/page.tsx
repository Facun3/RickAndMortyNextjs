import EpisodeCard from "@/components/EpisodeCard";
import { fetchAllEpisodes } from "@/services/episodeService";
import { EpisodeType } from "@/types/Types";

export async function getEpisodes(){
    const data: EpisodeType[] = await fetchAllEpisodes();
    console.log(data);  
    return {episodes: data}
  };

export default async function Page() {

    const { episodes } : { episodes:EpisodeType[] } = await getEpisodes();
     
    return(
        <>
        <div className="grid gap-6 justify-center p-4 mt-5 sm:grid-cols-3 xl:grid-cols-6">
            {
                episodes?.map( val => <EpisodeCard key={val.id} episode={val}/>)
            }
        </div>
        </> 
    )
}