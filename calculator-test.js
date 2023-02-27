describe("Loan Calculator", function() {
it("should return a result with 2 decimal places", function() {
  const values = { amount: 10000, years: 5, rate: 3.5 };
  const result = calculateMonthlyPayment(values);
  const numDecimals = (result.split('.')[1] || []).length; // get number of decimal places in result
  expect(numDecimals).toEqual(2);
});

it("should calculate the monthly rate correctly", function() {
  const values = { amount: 10000, years: 5, rate: 3.5 };
  const expectedRate = 0.003;
  const monthlyPayment = calculateMonthlyPayment(values);
  const calculatedRate = (monthlyPayment / values.amount) / (values.years * 12);
  expect(calculatedRate).toBeCloseTo(expectedRate, 3);
});


it("handles zero loan term", function() {
    const values = { amount: 10000, years: 0, rate: 3.5 };
    const expectedPayment = Infinity;
    const result = calculateMonthlyPayment(values);
    expect(result).toEqual(expectedPayment.toString());
  });


it("handles invalid input", function() {
    const values = { amount: "invalid", years: "invalid", rate: "invalid" };
    const expectedPayment = NaN;
    const result = calculateMonthlyPayment(values);
    expect(result).toEqual(expectedPayment.toString());
  });
});



