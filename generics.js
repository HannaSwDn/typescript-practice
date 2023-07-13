// Generics allows to create reusable code, that can be used with different types.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var colors = ['white', 'grey', 'blue', 'red'];
var addColorToItem = function (item) {
    var color = colors[Math.floor(Math.random() * colors.length)];
    return __assign(__assign({}, item), { color: color });
};
var itemOne = addColorToItem({ type: "plane", model: "A380" });
/*
    If we nog log this to the console:

    console.log(itemOne.type);

    It will give us an error:
    Property 'type' does not exist on type '{ color: number; }'

    This is because we don't know exactly what properties the object we passed to the function has.
*/
/*
    When using generics like below, we can pass in any object no matter
    what keys it has, and still add a color to it
*/
var addColorToItemAgain = function (item) {
    var color = colors[Math.floor(Math.random() * colors.length)];
    return __assign(__assign({}, item), { color: color });
};
var itemTwo = addColorToItemAgain({ type: "plane", model: "737-800" });
console.log(itemTwo.color);
