const items = [
    {name:'Bike', net: 400, gross:500, vat: 100},
    {name:'E-Scooter', net:900, gross:1000, vat: 100},
    {name:'E-Bike', net:2900, gross:3000, vat: 100},
    {name:'Car', net: 49000, gross:50000, vat: 100}
]
const net = items.reduce((currentnet, item) => {
    return item.name + currentnet
}, 0)

console.log(net)


// const a1 = ['ID'];
// const a2 = ['books'];
// const a3 = ['author'];
// const a4 = ['order'];

// const column = [a1,a2,a3,a4];
// const result = column.filter(b => {
//     console.log(b);

// })