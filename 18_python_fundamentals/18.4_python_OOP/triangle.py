from math import sqrt


class Triangle:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def get_hypotenuse(self):
        return sqrt(self.a ** 2 + self.b ** 2)

    def get_area(self):
        return self.a * self.b / 2


c = Triangle(9, 12)
print(c.get_hypotenuse())
print(c.get_area())
