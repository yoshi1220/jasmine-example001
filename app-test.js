describe('sort ascending functions', function() {
  it('returns the result sorted in ascending order.', function() {
    const input = '1\n2\n3\n';
    expect(sortAscending(input)).toEqual([1, 2, 3]);
  });

  it('returns the result sorted in ascending order. reversed input.', function() {
    const input = '3\n2\n1\n';
    expect(sortAscending(input)).toEqual([1, 2, 3]);
  });

  it('returns the result sorted in ascending order. random input.', function() {
    const input = '3\n5\n19\n1\n2\n';
    expect(sortAscending(input)).toEqual([1, 2, 3, 5, 19]);
  });

  it('returns the result sorted in ascending order. include same numbers.', function() {
    const input = '2\n3\n4\n5\n4\n3\n2\n1\n1\n8\n';
    expect(sortAscending(input)).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 8]);
  });

  it('returns the result sorted in ascending order. all same numbers.', function() {
    const input = '9\n9\n9\n9\n9\n9\n9\n9\n9\n9\n';
    expect(sortAscending(input)).toEqual([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
  });
});
