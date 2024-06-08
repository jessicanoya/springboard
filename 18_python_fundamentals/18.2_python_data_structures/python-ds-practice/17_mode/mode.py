def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    counter = 0

    for num in nums:
        current_frequency = nums.count(num)
        if current_frequency > counter:
            counter = current_frequency
            i = num
    return i


print(mode([1, 2, 1]))
print(mode([2, 2, 3, 3, 2]))
print(mode([2, 2, 3, 3, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6]))
