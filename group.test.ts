import { Item, GroupedItems, items, expected, groupByManufacturer } from './group';

describe('groupByManufacturer sorting', () => {
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

  test('Basic grouping with saving order of manufacturerId appearing in input', () => {
    expect(groupByManufacturer(items)).toEqual(expected);
  });

  test('Grouping of array with single item', () => {
    expect(groupByManufacturer(singleItem)).toEqual(expectedSingleItem);
  });
});
