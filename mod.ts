export type int = number & { __int: never };
export type unitFloat = number & { __unitFloat: never };
export type float = number & { __float: never };
 
export const isInt = (n: number): n is int => Math.round(n) === n;
export const isUnitFloat = (n: number): n is unitFloat => n < 1.0 && n > 0.0;
export const isFloat = (n: number): n is float => !isInt(n);