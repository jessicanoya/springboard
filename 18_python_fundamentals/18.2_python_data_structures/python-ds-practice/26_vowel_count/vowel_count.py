def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}

        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    lowercase_phrase = phrase.lower()

    count = {x: sum([1 for char in lowercase_phrase if char == x])
             for x in 'aeiou'}

    count = {k: v for k, v in count.items() if v > 0}

    return count


print(vowel_count('rithm school'))
print(vowel_count('HOW ARE YOU? i am great!'))
