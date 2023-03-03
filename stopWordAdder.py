# can take any Collection<String>
# e.g String[], Set<String>
def addStopWordsToFile(file_name, stop_words):
    for word in stop_words:
        addStopWordToFile(file_name, word)

#Add one Stop Word to default file, for test
def addStopWordTest(word):
    return addStopWordToFile('testAddStopWords', word)
    
#Add one stop word into the `file_name` file
def addStopWordToFile(file_name, word):
    # Open the file in read mode
    file = open(file_name, 'r')

    # Read the contents of the file
    set_string = file.read()

    # Convert the string back to a set
    my_set = eval(set_string)

    # Close the file
    file.close()
    my_set.add(word)
    set_string = str(my_set)
    file = open(file_name, 'w')
    file.write(set_string)
    file.close()
    
#testing
addStopWordTest("a")