def find_factors(num):
    """Find factors of num, in increasing order.

    >>> find_factors(10)
    [1, 2, 5, 10]

    >>> find_factors(11)
    [1, 11]

    >>> find_factors(111)
    [1, 3, 37, 111]

    >>> find_factors(321421)
    [1, 293, 1097, 321421]
    """
    factors = []
    for factor in range(1, num + 1):
        if num % factor == 0:
            if num % factor == 0:
                factors.append(factor)
    return factors


print(find_factors(10))
print(find_factors(11))
print(find_factors(111))
print(find_factors(321421))
