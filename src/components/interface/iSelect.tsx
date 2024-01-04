export interface iSelect{
    label: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: number | string;
    options: {value: number | string, text: string}[];
}
