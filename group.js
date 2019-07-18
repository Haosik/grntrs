'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.items = [
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
exports.expected = [
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
    const itemsHashObj = items.reduce((acc, item) => {
        const { manufacturerId } = item;
        if (!acc.hasOwnProperty(manufacturerId)) {
            acc[manufacturerId] = [item];
            idsArray.push(manufacturerId);
        }
        else {
            acc[manufacturerId].push(item);
        }
        return acc;
    }, {});
    result = idsArray.map((manufacturerId) => {
        return itemsHashObj[manufacturerId];
    });
    return result;
}
exports.groupByManufacturer = groupByManufacturer;
//# sourceMappingURL=group.js.map