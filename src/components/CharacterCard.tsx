import { CharacterType } from "../types/Types";

export default function CharacterCard({value}: {value: CharacterType}) {

    return(
        <>
        <div className="flex flex-col items-center p-3 rounded-md shadow-md bg-gray-800 w-[19rem]">
            <div className="font-bold text-xl mb-2 overflow-hidden">{value.name}</div>
            <img className="object-cover object-center rounded-md h-60 w-auto pb-2 dark:bg-gray-500" src={value.image} alt="Sunset in the mountains"/>
            <div className="flex flex-col w-full justify-start pl-2">
                <div className="flex flex-row w-30 h-10 px-3 items-center">
                    <span className={`inline-block rounded-full w-3 h-3 py-1 font-semibold mr-2 animate-pulse chip-${value.status.toLowerCase()}`}></span>
                    <span className="inline-block text-white font-bold">{value.status} - {value.species}</span>
                </div>                
            </div>
            <div className="flex flex-col pb-2 w-full text-start pl-5">            
                <span className=" text-gray-500 font-bold">Last known location</span>
                <span className="text-white font-bold text-sm">{value.location.name}</span>
            </div>
        </div>
        </>
    )
}