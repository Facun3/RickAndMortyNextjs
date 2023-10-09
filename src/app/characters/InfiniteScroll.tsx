"use client";

import CharacterCard from "@/components/CharacterCard";
import SearchComponent from "@/components/SearchComponent";
import { CharacterType } from "@/types/Types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function InfiniteScrollComponent({
  initialData,
  fetchFn,
}: {
  initialData: Array<any>;
  fetchFn: ({
    page,
    search,
  }: {
    search?: string | undefined;
    page?: number | undefined;
  }) => Promise<Array<any> | undefined>;
}) {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  async function loadMoreData() {
    const next = page + 1;
    const data = await fetchFn({ search: "", page: next });
    if (data?.length) {
      setPage(next);
      setData((prev: CharacterType[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...data,
      ]);
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreData();
    }
  }, [inView]);

  return (
    <>
    <SearchComponent/>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-4 mx-2 my-2 sm:p-1 gap-3 justify-items-center">
        {data?.map((val) => (
          <CharacterCard key={val.id} value={val} />
        ))}
      </div>
      <div ref={ref} className="flex justify-center items-center mt-5 py-5">
        <h1 className="animate-pulse">Loading...</h1>
      </div>
    </>
  );
}
