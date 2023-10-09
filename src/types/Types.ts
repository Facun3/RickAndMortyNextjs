export type SubmenuType = {
    name: string;
    href: string;
}

export type ResponseType = {
    info:    InfoType;
    results: any[];
}

export type InfoType = {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}


export type CharacterType = {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   LocationType;
    location: LocationType;
    image:    string;
    url:      string;
    created:  Date;
}

export type LocationType = {
    name: string;
    url:  string;
}

export type EpisodeType = {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}


export type CardValues = {
    key: string,
    value: any
}