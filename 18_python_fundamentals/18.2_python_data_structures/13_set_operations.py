# Sets have to be immutable O(1) runtime for adding, retrieving, deleting
# To create a set 'colors = {}'

# Union - combines sets
lemon = {'bumpy', 'fruit', 'sour', 'yellow'}
banana = {'fruit', 'smooth', 'sweet', 'yellow'}
orange = ['fruit', 'bumpy', 'sweet', 'orange']

print(lemon | banana | {'fruit', 'green', 'apple', 'tart'})
print(banana.union(lemon))

# Intersection - contains all the elements that are common to both sets
print(lemon & banana)
print(banana.intersection(lemon))

# Difference - returns a set that is the difference between two sets, the order matters
print(lemon - banana)  # Output is what they do not have in common
print(banana - lemon)
print(lemon.difference(banana))
print(banana.difference(lemon))

# Symmetric Difference - the symmetric difference of two sets A and B is a set of elements that are in either A or B, but not in both
print(banana ^ lemon)
print(lemon.symmetric_difference(banana))

# Operators only work between two sets
# The named methods accept an iterable
print(lemon & orange)  # Will not work, orange is a list
# Will work, intersection turns it into a set
print(lemon.intersection(orange))
