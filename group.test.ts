import { Item, GroupedItems, items, expected, groupByManufacturer } from './group';

const singleItem: Item[] = [
  {
    manufacturerId: 1,
    price: 10
  }
];

const expectedSingleItem: GroupedItems[] = [
  [
    {
      manufacturerId: 1,
      price: 10
    }
  ]
];

const nullUndefinedItems: Item[] = [
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

const expectedNullUndefineditems: GroupedItems[] = [
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
  expect(groupByManufacturer(items)).toEqual(expected);
});

test('Grouping of array with single item', () => {
  expect(groupByManufacturer(singleItem)).toEqual(expectedSingleItem);
});

test('Items with "null" and "undefined" manufacturerId go into separate groups', () => {
  expect(groupByManufacturer(nullUndefinedItems)).toEqual(expectedNullUndefineditems);
});
