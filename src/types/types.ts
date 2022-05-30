export interface Response {
    name: string;
    gender: string | null;
    probability: number;
    count: number;
}

export interface Result {
    name: string,
    gender: string
}

export interface IForm {
    setResult(argument: Result): void;
}