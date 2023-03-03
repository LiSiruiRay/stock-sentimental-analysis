def readStopWords(file_name):
    # Open the file in read mode
    file = open(file_name, 'r')

    # Read the contents of the file
    set_string = file.read()

    # Convert the string back to a set
    my_set = eval(set_string)

    # Close the file
    file.close()

    # Print the set
    # print(my_set)
    return my_set