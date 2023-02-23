export interface useCounterOption {
    initialValue?: number;
    step?: number;
}
export interface useCounterReturn {
    count: number;
    increment: () => void;
    decrement: () => void;
}
export declare function useCounter({ initialValue, step }: useCounterOption): useCounterReturn;
