export interface iRange {
    id: string;
    type:string;
    min: string;
    max: string;
    step: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}