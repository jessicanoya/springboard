import os
import random

"""Word Finder: finds random words from a dictionary."""


class WordFinder:

    def __init__(self, file_path):
        """Initializes the WordFinder with the path to a file containing words."""
        self.file_path = file_path
        self.words = self.read_words()
        print(f"{len(self.words)} words read")

    def read_words(self):
        """Reads the words from the file and returns them as a list."""
        with open(self.file_path, 'r') as file:
            words = [line.strip() for line in file]
        return words

    def random(self):
        """Returns a random word from the list of words."""
        return random.choice(self.words)


class SpecialWordFinder(WordFinder):  # subclass
    def read_words(self):
        """Reads the words from the file, ignoring blank lines and comments."""
        words = super().read_words()

        filter_words = [
            word for word in words if word and not word.startswith('#')
        ]
        return filter_words


script_dir = os.path.dirname(__file__)
file_path = os.path.join(script_dir, "words.txt")
file = WordFinder(file_path)
print(file.random())
