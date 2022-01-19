declare type Person = {
    firstname: string;
};
declare const details: {
    lastname: string;
    firstname: string;
};
declare function getElement<O extends object, K extends keyof O>(obj: O, key: K): O[K];
