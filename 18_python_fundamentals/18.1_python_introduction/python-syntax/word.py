def print_upper_words(words, must_start_with=None):
    for word in words:
        print(word.upper())

        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())


# this should print "HELLO", "HEY", "YO", and "YES"
print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                  must_start_with={"h", "y"})
