export const dummyDataset1 = [
  {
    id: 1,
    month: "Jan",
    total: 823,
  },
  {
    id: 2,
    month: "Feb",
    total: 345,
  },
  {
    id: 3,
    month: "Mar",
    total: 555,
  },
  {
    id: 4,
    month: "Apr",
    total: 4555,
  },
  {
    id: 5,
    month: "May",
    total: 234,
  },
  {
    id: 6,
    month: "Jun",
    total: 234,
  },
  {
    id: 7,
    month: "Jul",
    total: 234,
  },
  {
    id: 8,
    month: "Aug",
    total: 234,
  },
  {
    id: 9,
    month: "Sep",
    total: 234,
  },
];

export const generateDummyData = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
  ];
  let data = [];

  for (let i = 0; i < months.length; i++) {
    let expense = Math.floor(Math.random() * 1000 + 500); // Base expenses range between 500 and 1500
    let income;

    // Randomly decide if this month should have lower income than expense
    if (Math.random() > 0.3) {
      // 70% chance for income to be higher than expenses
      income = Math.floor(expense + Math.random() * 500);
    } else {
      // 30% chance for income to be lower than expenses
      income = Math.floor(expense - Math.random() * 300);
    }

    data.push({
      id: i + 1,
      month: months[i],
      expense,
      income,
    });
  }

  return data;
};

export const dummyDataset2 = generateDummyData();
