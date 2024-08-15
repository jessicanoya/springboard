from math import sqrt
from random import randint


class Triangle:
    """A class used to represent a right-angled triangle"""

    def __init__(self, a, b):
        self.a = a
        self.b = b

    def __repr__(self):
        return f"Triangle<a={self.a}, b={self.b}>"

    def __str__(self):
        return self.describe()

    def __eq__(self, other):
        return self.a == other.a and self.b == other.b

    @classmethod
    def random(cls):
        """Class method which returns Triangle with random sides"""
        return cls(randint(1, 20), randint(1, 20))

    def get_hypotenuse(self):
        """Calculates hypotenuse (3rd side of right triangle)"""
        return sqrt(self.a ** 2 + self.b ** 2)

    def get_area(self):
        """Calculates area of triangle"""
        return self.a * self.b / 2

    def describe(self):
        """returns string representing triangle"""
        return f"I am a triangle with sides: {self.a} & {self.b}"


c = Triangle(9, 12)
print(c.get_hypotenuse())
print(c.get_area())
t = Triangle.random()
print(t.a)
print(t.b)
