export type int = number & { __int: never };
export type unitFloat = number & { __unitFloat: never };
export type float = number & { __float: never };
 
export const isInt = (n: number): n is int => Math.round(n) === n;
export const isUnitFloat = (n: number): n is unitFloat => n < 1.0 && n > 0.0;
export const isFloat = (n: number): n is float => !isInt(n);

export const Int = (i: number) => {
    if (isInt(i)) {
        return i;
    } else {
        throw new TypeError(`Tried to assert that ${i} was an integer when it wasn't.`);
    }
}

export const UnitFloat = (f: number) => {
    if (isUnitFloat(f)) {
        return f;
    } else {
        throw new TypeError(`Tried to assert that ${f} was a unit float when it wasn't.`);
    }
}

export const Float = (f: number) => {
    if (isFloat(f)) {
        return f;
    } else {
        throw new TypeError(`Tried to assert that ${f} was a float when it wasn't.`);
    }
}