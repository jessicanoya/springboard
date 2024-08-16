"""Python serial number generator."""


class SerialGenerator:
    """Machine to create unique incrementing serial numbers.

    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=0):
        """Initialize the serial generator with a starting number."""
        self.start = start
        self.current = start

    def __repr__(self):
        """Provide a string representation of the SerialGenerator instance."""
        return f"<SerialGenerator start={self.start} next={self.current}>"

    def generate(self):
        """Generate the next serial number."""
        current_number = self.current
        self.current += 1
        return current_number

    def reset(self):
        """Reset the generator back to the original start number."""
        self.current = self.start


serial = SerialGenerator(start=100)
print(serial.generate())  # 100
print(serial.generate())  # 101
print(serial.generate())  # 102
print(serial.reset())  # None
print(serial.generate())  # 100
print(serial.generate())  # 101
print(serial.generate())  # 102
print(serial)  # <SerialGenerator start=100 next=103>
