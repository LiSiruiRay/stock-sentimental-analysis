# Ray
# Created By: 2023-03-03
# Description: read stop words from file

# Default directory: '../../resources/static/stop_words'

def read_stop_words(file_name):
    # Open the file in read mode
    file = open(file_name, 'r')

    # Read the contents of the file
    set_string = file.read()

    # Convert the string back to a set
    my_set = eval(set_string)

    # Close the file
    file.close()
    
    return my_set