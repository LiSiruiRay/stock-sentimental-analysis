# Ray
# Created By: 2023-03-06
# Description: Cleaning the passage by a single thread

# Ray
# Created By: 2023-03-03
# Description: This is a function clean the stop words in all the passage under a folder

import util.clean_passage as clean_passage
import os
import util.read_stop_words as stop_words_reader

def clean_folder(folder_path, stop_word_list):
    # Get a list of all the file names in the folder
    file_names = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

    # stop_word_list = stop_words_reader.read_stop_words('../resources/static/stop_words') # get all the stop words
    
    #function for clean one passage
    def replace(directory, read_file_name):
        for stop_word in stop_word_list:
            clean_passage.replace(directory, read_file_name, stop_word, ' ') 
            
        clean_passage.replace(directory, read_file_name, "  ", ' ') 
            
        #clean all the multiple-consecutive empty lines
        # clean_passage.replace(directory, read_file_name, "\n\n", '') 
    for read_file_name in file_names:
        if (read_file_name == "err_log.txt"): continue
        if (read_file_name == "meta_data.json"): continue
        replace(folder_path, read_file_name)

# clean_passage('resources/Tesla')