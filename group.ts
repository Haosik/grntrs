'use strict';

export interface Item {
  manufacturerId: number;
  price: number;
}

export type hashMapItems = {
  [manufacturerId: number]: Item[];
};

export type GroupedItems = Item[];

export const items: Item[] = [
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

export const expected: GroupedItems[] = [
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

export function groupByManufacturer(items: Item[]): GroupedItems[] {
  // TODO:
  // * implement grouping algo
  // * manufacturerid ordering in the output should be the same as in the input
  // * test code using any tool you like
  // return [[]];

  let result: GroupedItems[] = [];
  let idsArray: number[] = [];

  const itemsHashObj: hashMapItems = items.reduce((acc: hashMapItems, item: Item) => {
    const { manufacturerId } = item;
    if (!acc.hasOwnProperty(manufacturerId)) {
      acc[manufacturerId] = [item];
      idsArray.push(manufacturerId);
    } else {
      acc[manufacturerId].push(item);
    }
    return acc;
  }, {});

  result = idsArray.map((manufacturerId: number) => {
    return itemsHashObj[manufacturerId];
  });

  return result;
}
