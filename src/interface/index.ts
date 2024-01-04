export interface iLabel{
    id: string;
    text: string | number;
}

export interface iParagraph{
    id:string;
    text:string;
    value:number;
};

export interface iRange {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface iSelect{
    label: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: number | string;
    options: {value: number | string, text: string}[];
}