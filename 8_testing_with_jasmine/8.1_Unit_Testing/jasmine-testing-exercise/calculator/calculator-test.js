
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 250000,
    years: 8,
    rate: 8
  };
  expect(calculateMonthlyPayment(values)).toEqual('3534.17');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 250000,
    years: 8,
    rate: 8.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('3598.03');
});
