// type guards performs a run-time type check, since TypeScript only exists in compile-time

type alphanumeric = string | number;

// check if both a and b are of string type

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log('both values are string type')
    } else {
        console.log('one or both values are not of string type');
    }
}

add("test", 5);