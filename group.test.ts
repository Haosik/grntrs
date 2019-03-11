import { mocked } from 'ts-jest/utils';
import { Item, groupByManufacturer } from './group';

const mockedItems: Item[] = [
  {
    manufacturerId: 33,
    price: 11
  },
  {
    manufacturerId: 1,
    price: 250
  },
  {
    manufacturerId: 33,
    price: 95
  }
];

test('basic grouping', () => {
  const groupByManufacturer = require('./group.ts').groupByManufacturer;
  expect(groupByManufacturer(mockedItems)).toEqual([
    [
      {
        manufacturerId: 33,
        price: 11
      },
      {
        manufacturerId: 33,
        price: 95
      }
    ],
    [
      {
        manufacturerId: 1,
        price: 250
      }
    ]
  ]);
});
