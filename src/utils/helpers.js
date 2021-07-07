export const getTen = () => 10;
export const addTen = (n) => n + 10;
export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// snake_case
// kebab-case
// PascalCase
// camelCase

export const generateExpanseInfo = (dataList) => {
  const total = dataList.reduce((acc, element) => acc + element.amount, 0);
  const amounts = dataList.map((el) => el.amount);

  const response = {
    min: Math.min(...amounts),
    max: Math.max(...amounts),
    total,
    average: Math.round(total / dataList.length),
  };

  return response;
};
