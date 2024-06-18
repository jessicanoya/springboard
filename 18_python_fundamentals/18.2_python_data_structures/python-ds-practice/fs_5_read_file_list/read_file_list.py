def read_file_list(filename):
    """Read file and print out each line separately with a "-" before it.

    For example, if we have a file, `dogs`, containing:
        Fido
        Whiskey
        Dr. Sniffle

    This should work:

        >>> read_file_list("dogs")
        - Fido
        - Whiskey
        - Dr. Sniffle

    It will raise an error if the file cannot be found.
    """

    # hint: when you read lines of files, there will be a "newline"
    # (end-of-line character) at the end of each line, and you want to
    # strip that off before you print it. Do some research on that!

    try:
        with open(filename, 'r') as file:
            for line in file:
                print(f"- {line.strip()}")
    except FileNotFoundError:
        print(f"The file {filename} cannot be found.")


files = ['fs_5_read_file_list/dogs', 'fs_5_read_file_list/cats']

for file in files:
    read_file_list(file)
