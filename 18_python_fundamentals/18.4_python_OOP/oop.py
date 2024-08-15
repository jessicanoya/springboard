# A template from which an object can be created
# An instance is another name for an object created from a class definition
class Kettle(object):

    power_source = 'electricity'

    def __init__(self, make, price):
        self.make = make
        self.price = price
        self.on = False

    def switch_on(self):
        self.on = True


# create instance self.make is an instance of Kettle object
kendwood = Kettle('Kenwood', 8.99)
print(kendwood.make)
print(kendwood.price)

kendwood.price = 12.75
print(kendwood.price)

hamilton = Kettle('Hamilton', 14.55)

print('Models: {} = {}, {} = {}'.format(kendwood.make,
      kendwood.price, hamilton.make, hamilton.price))

print('Models: {0.make} = {0.price}, {1.make} = {1.price}'.format(
    kendwood, hamilton))

"""
Class: template for creating objects. All objects created using the same class will have the same characteristics.
Objects: an instance of a class.
Instantiate: create an instance of a class.
Method: a function defined in a class.
Attribute: a variable bound to an instance of a class.
"""

print(hamilton.on)
hamilton.switch_on
print(hamilton.on)

Kettle.switch_on(kendwood)
print(kendwood.on)
kendwood.switch_on()

print("*" * 80)
kendwood.power = 1.5
print(kendwood.power)
# print(hamilton.power)

print('Switch to atomic power')
Kettle.power_source = 'atomic'
print(Kettle.power_source)
print('Switch kenwood to gas')
kendwood.power_source = 'gas'
print(kendwood.power_source)
print(hamilton.power_source)
print(Kettle.__dict__)
print(kendwood.__dict__)
print(hamilton.__dict__)
