simple_list = [x for x in range(3)]
print(simple_list)

nested_list = [[0 for y in range(3)] for x in range(3)]
print(nested_list)


def gen_board(size, initial_val=None):
    return [[initial_val for x in range(size)] for y in range(size)]


board = gen_board(5, 5)
print(board)

evens = [x for x in range(10) if x % 2 == 0]
print(evens)

evens_doubled = [x * 2 for x in range(10) if x % 2 == 0]
print(evens_doubled)

people = [
    {"name": 'Henry', "sex": 'Male'},
    {"name": 'Lady Gray', "sex": 'Female'},
    {"name": 'Junior', "sex": 'Male'},
    {"name": 'Anna', "sex": 'Female'}
]

women = [person["name"] for person in people if person["sex"] == "Female"]
print(women)

scores = [55, 89, 99, 87, 60, 70, 74, 76, 90, 50, 82]

# Add a conditional with an 'if else' list comprehension
# [expression_if_true if condition else expression_if_false for item in iterable]
grades = ['PASS' if score >= 70 else 'FAIL' for score in scores]


def get_letter(char):
    MORSE_CODE_DICT = {'A': '.-', 'B': '-...',
                       'C': '-.-.', 'D': '-..', 'E': '.',
                       'F': '..-.', 'G': '--.', 'H': '....',
                       'I': '..', 'J': '.---', 'K': '-.-',
                       'L': '.-..', 'M': '--', 'N': '-.',
                       'O': '---', 'P': '.--.', 'Q': '--.-',
                       'R': '.-.', 'S': '...', 'T': '-',
                       'U': '..-', 'V': '...-', 'W': '.--',
                       'X': '-..-', 'Y': '-.--', 'Z': '--..',
                       '1': '.----', '2': '..---', '3': '...--',
                       '4': '....-', '5': '.....', '6': '-....',
                       '7': '--...', '8': '---..', '9': '----.',
                       '0': '-----', ', ': '--..--', '.': '.-.-.-',
                       '?': '..--..', '/': '-..-.', '-': '-....-',
                       '(': '-.--.', ')': '-.--.-'}
    return MORSE_CODE_DICT.get(char.upper(), '')


msg = [get_letter(char) for char in 'SOS']
print(msg)


def get_morse_code(phrase):
    return " ".join([get_letter(char) for char in phrase])


sentence = get_morse_code('hello')
print(sentence)
