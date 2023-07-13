type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'string' && typeof b === 'string') {
        return true;
    } else {
        return false;
    }
}

