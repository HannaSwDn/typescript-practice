// Generics allows to create reusable code, that can be used with different types.

interface Plane {
    type: string,
    model: string
}

const colors: string[] = ['white', 'grey', 'blue', 'red'];

const addColorToItem = (item: object) => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    return {...item, color};
};

let itemOne = addColorToItem({ type: "plane", model: "A380" });

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

const addColorToItemAgain = <T extends Plane>(item: T) => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    return {...item, color};
};

let itemTwo = addColorToItemAgain({ type: "plane", model: "737-800" });

let itemThree = addColorToItemAgain({ type: "small plane", model: "Cessna 172", seats: 4 });

console.log(itemThree.seats);