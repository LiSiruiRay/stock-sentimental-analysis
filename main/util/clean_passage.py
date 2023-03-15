# Ray
# Created By: 2023-03-03
# Description: Read the file and then replace the word

import os
import re
import logging
import shutil

def replace(directory, read_file_name, to_replace, replace):
    """This function is the eventual cleaning method that copies a file from the key-word folder to key-word_clean folder and finish cleaning

    Args:
        directory (string): this is the folder ending with key word e.g.  /resources/news/Google
        read_file_name (string): this is the actual file name: e.g 1.txt
        to_replace (string): the string to be replaced
        replace (string): string to replace the to_replace string
    """
    # logging.info(directory"")
    dst_path = directory + "_cleaned"
    # logging.info("Clean and save the file to: " + dst_path)
    if not os.path.exists(dst_path):
        shutil.copytree(directory, dst_path)
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
    modified_contents = ""
    with open(read_path, 'r') as f:
        file_contents = f.read()
        modified_contents = re.sub(" " + to_replace + " ", replace, file_contents.lower())
    with open(read_path, 'w') as f:
        f.write(modified_contents)

def clean_empty_lines_in_place(directory):
    """this is the method to clean all the empty lines from a file in place

    Args:
        path (string): the file path of the file: e.g: news/Google/1.txt
    """
    # logging.info(directory + ": cleaning the empty lines in place")
    # Open the file for reading and writing
    with open(directory, 'r+') as file:
        # Read all lines from the file
        lines = file.readlines()
        # Move the file pointer back to the beginning of the file
        file.seek(0)
        # Truncate the file to remove all contents
        file.truncate()
        # Rewrite non-empty lines to the file
        for line in lines:
            if line.strip():  # Check if line is not empty
                file.write(line)
        # Move the file pointer to the end of the file
        file.seek(0, os.SEEK_END)
        # Truncate the file to remove any remaining content after the last line
        file.truncate()
# clean_empty_lines_in_place()