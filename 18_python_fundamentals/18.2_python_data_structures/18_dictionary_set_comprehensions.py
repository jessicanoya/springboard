# General Syntax of Dictionary Comprehension
# {key_expression: value_expression for item in iterable if condition}
numbers = {num: num * num for num in range(1, 10) if num % 2 == 0}
print(numbers)
