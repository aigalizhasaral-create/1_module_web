const map = [
    ["ligne n°1", "bus n°24", "tramway n°3", "ligne n°2", "bus n°20", "tramwayn°312", "ligne n°130", "bus n°28","tramway n°20", "ligne n°101"]
];

map.sort((a,b) => {
    const numA = parseInt(a.match(/\d+/));
    const numB = parseInt(a.match(/\d+/));

    return numA - numB;
})

console.log(map);