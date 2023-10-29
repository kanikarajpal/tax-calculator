import { INCOME, TYPES_OF_INVESTMENT } from "./data";
export const calculateTax = (currValues) => {
  const { salePrice, purchasePrice, expenses, annualIncome } = currValues;

  let capitalGain = salePrice - purchasePrice - expenses;
  let discount = 0;

  if (capitalGain > 0) {
    discount = 0.5 * capitalGain;
  } else discount = 0;

  let netCapital = capitalGain;
  if (currValues?.investmentType !== TYPES_OF_INVESTMENT[0].value) {
    netCapital -= discount;
  }

  let tax = 0;
  tax = INCOME[annualIncome] * netCapital;

  return {
    capitalGain,
    longTermDiscount: discount,
    netCapital,
    tax,
  };
};
