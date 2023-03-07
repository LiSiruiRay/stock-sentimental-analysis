# Ray
# Created By: 2023-03-06
# Description: Cleaning the passage by a single thread

# Ray
# Created By: 2023-03-03
# Description: This is a function clean the stop words in all the passage under a folder

# import threading
import util.clean_passage as clean_passage
import os
import util.read_stop_words as read_stop_words

def clean_folder(folder_path):
    # print(os.getcwd())
    # Get a list of all the file names in the folder
    # test_path = "../resources/news/Fuck"
    # file_names = [f for f in os.listdir(test_path) if os.path.isfile(os.path.join(test_path, f))]
    # print(file_names, "---------")
    
    file_names = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

    # thread_list = [] # container for threads
    stop_word_list = read_stop_words.readStopWords('../resources/static/stop_words') # get all the stop words
    
    #function for clean one passage
    def replace(directory, read_file_name):
        for stop_word in stop_word_list:
            clean_passage.replace(directory, read_file_name, stop_word, '') 
        
    for read_file_name in file_names:
        if (read_file_name == "err_log"): continue
        replace(folder_path, read_file_name)
        # t = threading.Thread(target=replace(folder_path, read_file_name))
        # thread_list.append(t)

    # for each_t in thread_list:
    #     each_t.start()
    # for each_t in thread_list:
    #     each_t.join()

# clean_passage('resources/Tesla')