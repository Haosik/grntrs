"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const group_1 = require("./group");
const singleItem = [
    {
        manufacturerId: 1,
        price: 10
    }
];
const expectedSingleItem = [
    [
        {
            manufacturerId: 1,
            price: 10
        }
    ]
];
const nullUndefinedItems = [
    {
        manufacturerId: null,
        price: 11
    },
    {
        manufacturerId: 3,
        price: 250
    },
    {
        manufacturerId: undefined,
        price: 58
    },
    {
        manufacturerId: 3,
        price: 70
    },
    {
        manufacturerId: undefined,
        price: 99
    }
];
const expectedNullUndefineditems = [
    [
        {
            manufacturerId: null,
            price: 11
        }
    ],
    [
        {
            manufacturerId: 3,
            price: 250
        },
        {
            manufacturerId: 3,
            price: 70
        }
    ],
    [
        {
            manufacturerId: undefined,
            price: 58
        },
        {
            manufacturerId: undefined,
            price: 99
        }
    ]
];
test('Basic grouping with saving order of manufacturerId appearing in input', () => {
    expect(group_1.groupByManufacturer(group_1.items)).toEqual(group_1.expected);
});
test('Grouping of only one item in array', () => {
    expect(group_1.groupByManufacturer(singleItem)).toEqual(expectedSingleItem);
});
test('Items with "null" and "undefined" manufacturerId go into separate groups', () => {
    expect(group_1.groupByManufacturer(nullUndefinedItems)).toEqual(expectedNullUndefineditems);
});
//# sourceMappingURL=group.test.js.map