# Can 'spread' iterables
nums = [2, 4, 6, 8]
print([*nums])
print([-2, 0, *nums])
odds=[1, 3, 5, 7, 9]
print([*odds, *nums])
import calendar
