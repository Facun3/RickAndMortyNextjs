'use server'

import { API_BASE_URL } from "../enviroment/constants";
import { CharacterType, ResponseType } from "@/types/Types";

export async function fetchCharacters({ page = 1, search}:{ page?:number, search?: string | undefined }): Promise<CharacterType[]> {

    const response = await fetch(`${API_BASE_URL}character?page=${page}&name=${search}`);
    const data: ResponseType = await response.json();

    return data.results ? data.results : [];
}