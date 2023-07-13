type shape = string | number;

function add(a: shape, b: shape) {
    if (typeof a === 'string' && typeof b === 'string') {
        return true;
    } else {
        return false;
    }
}

