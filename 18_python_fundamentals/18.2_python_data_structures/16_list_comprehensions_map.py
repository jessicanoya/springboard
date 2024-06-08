nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

evens = []

for num in nums:
    if num % 2 == 0:
        evens.append(num)
print(evens)

# Square brackets denote that this is a list comprehension
# Syntax - [expression for item in iterable if condition]
evens = [num for num in nums if num % 2 == 0]

double = [num * 2 for num in nums]
print(double)

squared = [n * n for n in [2, 4, 6, 8]]
print(squared)

char = [char for char in 'hello']
print(char)

range = [num for num in range(10, 20)]
print(range)