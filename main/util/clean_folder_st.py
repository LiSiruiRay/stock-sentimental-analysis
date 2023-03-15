# Ray
# Created By: 2023-03-06
# Description: Cleaning the passage by a single thread

# Ray
# Created By: 2023-03-03
# Description: This is a function clean the stop words in all the passage under a folder

import util.clean_passage as clean_passage
import os
import logging

def clean_folder(folder_path, stop_word_list):
    """This function cleans all the file under the folder called folder_path with all the words in stop_word_list, replace the word with ""

    Args:
        folder_path (string): this is the path of the folder under which all the files will be cleaned except matadata.json and erro_log
        stop_word_list (Collection<string>, string[], or any iterable data structure with a string inside): this is a list of stop words
    """
    
    logging.info("Cleaning: " + folder_path)
    # Get a list of all the file names in the folder
    file_names = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
    
    #function for clean one passage
    def replace(directory, read_file_name):
        for stop_word in stop_word_list:
            clean_passage.replace(directory, read_file_name, stop_word, ' ')
        
        # clean_passage.replace(directory, read_file_name, "  ", ' ') 
            
        #clean all the multiple-consecutive empty lines
        # clean_passage.replace(directory, read_file_name, "\n\n", '')
    logging.info("Cleaning the file: " + folder_path) 
    for read_file_name in file_names:
        if (read_file_name == "err_log.txt"): continue
        if (read_file_name == "meta_data.json"): continue
        replace(folder_path, read_file_name)
        clean_passage.clean_empty_lines_in_place(folder_path + "_cleaned" + "/" + read_file_name)
# clean_passage('resources/Tesla')