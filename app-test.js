describe("arithmetic functions", function() {
  let total;

  beforeEach(function() {
    total = 100;
    console.log("beforeEach ran"); // you need to open the console to view this
  });

  it("returns the difference of two numbers", function() {
    expect(subtract(total, 8)).toBe(92);
  });

  it("returns the sum of two numbers", function() {
    expect(add(total, 2)).toBe(102);
  });

  //作成分
  const testCase1 = "3\n5\n19\n1\n2";

  it("testCase1", function() {
    expect(sortAscending(testCase1)).toBe([1, 2, 3, 5, 19]);
  });
});
