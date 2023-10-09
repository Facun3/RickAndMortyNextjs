import { fetchCharacters } from "@/services/characterService";
import InfiniteScrollComponent from "./InfiniteScroll";

export default async function CharactersPage() {
    const characters = await fetchCharacters({ search: "" });

  return (
    <>
      <InfiniteScrollComponent
        initialData={characters}
        fetchFn={fetchCharacters}
      />
    </>
  );
}
