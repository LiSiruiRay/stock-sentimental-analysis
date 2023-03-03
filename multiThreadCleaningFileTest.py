import threading
import time
import cleanPassageTest
import os
import stopWordsReader

folder_path = 'resources/Tesla'

# Get a list of all the file names in the folder
file_names = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
print(file_names)

thread_list = []
stop_word_list = stopWordsReader.readStopWords('testStopWords_Scraper')

def replace(directory, filename, replace):
    for stop_word in stop_word_list:
        cleanPassageTest.replace(folder_path, file_name, stop_word, '')
    

for file_name in file_names:
    t = threading.Thread(target=replace(folder_path, file_name, ''))
    thread_list.append(t)

for each_t in thread_list:
    each_t.start()

for each_t in thread_list:
    each_t.join()
print("Done")  

# Create two new threads
# t1 = threading.Thread(target=print_numbers)
# t2 = threading.Thread(target=print_letters)

# Start both threads
# t1.start()
# t2.start()

# Main thread continues to execute
# for i in range(3):
#     print("Main thread doing some other work")
#     time.sleep(1)

# Wait for both threads to complete
# t1.join()
# t2.join()


