// type guards performs a run-time type check, since TypeScript only exists in compile-time

type alphanumeric = string | number;

// check if both a and b are of string type

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'string' && typeof b === 'string') {
        return true;
    } else {
        return false;
    }
}

