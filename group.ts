'use strict';

interface Item {
  manufacturerId: number;
  price: number;
}

type GroupedItems = Item[];

const items: Item[] = [
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

const expected: GroupedItems[] = [
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

function groupByManufacturer(items: Item[]): GroupedItems[] {
  // TODO:
  // * implement grouping algo
  // * manufacturerid ordering in the output should be the same as in the input
  // * test code using any tool you like
  // return [[]];

  let result: GroupedItems[] = [];
  let idsArray: number[] = [];

  items.forEach(item => {
    const itemId = item.manufacturerId;
    const indexOfId = idsArray.indexOf(itemId);

    if (indexOfId === -1) {
      idsArray.push(itemId);
      result.push([item]);
    } else {
      result[indexOfId].push(item);
    }
  });

  return result;
}
console.log(groupByManufacturer(items));
