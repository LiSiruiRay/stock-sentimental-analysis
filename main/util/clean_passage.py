# Ray
# Created By: 2023-03-03
# Description: Read the file and then replace the word

import os
import re
import logging
import shutil

# @Input: directory is the direcotry end with key word: e.g.: /resources/news/Google
# @Input: 
def replace(directory, read_file_name, to_replace, replace):
    """This function is the eventual cleaning method that copies a file from the key-word folder to key-word_clean folder and finish cleaning

    Args:
        directory (string): this is the folder ending with key word e.g.  /resources/news/Google
        read_file_name (string): this is the actual file name: e.g 1.txt
        to_replace (string): the string to be replaced
        replace (string): string to replace the to_replace string
    """
    # print("directory: " + directory)
    # print("read_file_name: " + read_file_name)
    
    dst_path = directory + "_cleaned"
    if not os.path.exists(dst_path):
        shutil.copytree(directory, dst_path)
    files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    # print(files)
    # if not os.path.exists(dst_path):
    #         os.mkdir(dst_path)
    for file in files:
        if (file == 'meta_data.json'):
            continue
        # clean_empty_lines(directory + "/" + file, dst_path + "/" + file)
        # logging.info("Cleaning empty line of file: " + file)
    
    replace_on_site(dst_path, read_file_name, to_replace, replace)
    
def replace_on_site(directory, read_file_name, to_replace, replace):
    """This function cleans a file on site, it does not move the file.
    First replace to_replace with replace, then clean all the empty lines

    Args:
        directory (string): this is the folder ending with key word e.g.  /resources/news/Google
        read_file_name (string): this is the actual file name: e.g 1.txt
        to_replace (string): the string to be replaced
        replace (string): string to replace the to_replace string
    """
    read_path = os.path.join(directory, read_file_name)
    # clean_empty_lines(read_path)
    modified_contents = ""
    with open(read_path, 'r') as f:
        file_contents = f.read()
        modified_contents = re.sub(" " + to_replace + " ", replace, file_contents.lower())
    with open(read_path, 'w') as f:
        f.write(modified_contents)

def clean_empty_lines(input_path, output_path):
    """this is the method to clean all the empty lines from a file

    Args:
        path (string): the file path of the file: e.g: news/Google/1.txt
    """
    with open(input_path, 'r') as input_file, open(output_path, 'w') as output_file:
        prev_line_empty = False
        for line in input_file:
            if line.strip():  # check if the line is not empty
                output_file.write(line)
                prev_line_empty = False
            elif not prev_line_empty:  # check if the previous line was not empty
                output_file.write(line)
                prev_line_empty = True