import { EpisodeType } from "../types/Types";

const EpisodeCard = ({ episode }: { episode: EpisodeType }) => {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <div className="text-4xl text-gray-500 opacity-60 mb-2">#{episode.id}</div>
        <div className="text-xl font-semibold">{episode.name}</div>
        <div className="text-lg">{episode.episode}</div>
      </div>
    );
  };
  
  export default EpisodeCard;
  