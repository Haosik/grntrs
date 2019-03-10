'use strict';
const items = [
    {
        manufacturerId: 1,
        price: 42
    },
    {
        manufacturerId: 3,
        price: 49
    },
    {
        manufacturerId: 9,
        price: 92
    },
    {
        manufacturerId: 4,
        price: 32
    },
    {
        manufacturerId: 2,
        price: 65
    },
    {
        manufacturerId: 2,
        price: 82
    },
    {
        manufacturerId: 9,
        price: 77
    },
    {
        manufacturerId: 4,
        price: 70
    }
];
const expected = [
    [
        {
            manufacturerId: 1,
            price: 42
        }
    ],
    [
        {
            manufacturerId: 3,
            price: 49
        }
    ],
    [
        {
            manufacturerId: 9,
            price: 92
        },
        {
            manufacturerId: 9,
            price: 77
        }
    ],
    [
        {
            manufacturerId: 4,
            price: 32
        },
        {
            manufacturerId: 4,
            price: 70
        }
    ],
    [
        {
            manufacturerId: 2,
            price: 65
        },
        {
            manufacturerId: 2,
            price: 82
        }
    ]
];
function groupByManufacturer(items) {
    let result = [];
    let idsArray = [];
    items.forEach(item => {
        const itemId = item.manufacturerId;
        const indexOfId = idsArray.indexOf(itemId);
        if (indexOfId === -1) {
            idsArray.push(itemId);
            result.push([item]);
        }
        else {
            result[indexOfId].push(item);
        }
    });
    return result;
}
console.log(groupByManufacturer(items));
//# sourceMappingURL=group.js.map