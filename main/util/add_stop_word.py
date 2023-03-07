# Ray
# Created By: 2023-03-03
# Description: this function is to add stop words

# add multiple stops words
# can take any Collection<String>
# e.g String[], Set<String>
def add_stop_words_to_file(file_name, stop_words):
    for word in stop_words:
        add_stop_word_to_file(file_name, word) # add one stop word

# testing method
# Add one Stop Word to default file
def add_stop_word_test(word):
    return add_stop_word_to_file('../../resources/static/testwords', word)
    
#Add one stop word into the `file_name` file
def add_stop_word_to_file(file_name, word):
    # Open the file in read mode
    file = open(file_name, 'r')

    # Read the contents of the file
    set_string = file.read()

    # Convert the string back to a set
    my_set = eval(set_string)

    # Close the file
    file.close()
    # add stop word to the list then serialize it
    my_set.add(word)
    set_string = str(my_set)
    file = open(file_name, 'w')
    file.write(set_string)
    file.close()
