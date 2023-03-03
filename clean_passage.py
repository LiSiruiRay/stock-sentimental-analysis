# Ray
# Created By: 2023-03-03
# Description: Read the file and then replace the word

import os
import re
import shutil

def replace(directory, read_file_name, to_replace, replace):
    dst_path = directory + "_cleaned"
    if not os.path.exists(dst_path):
        shutil.copytree(directory, dst_path)
    replace_on_site(dst_path, read_file_name, to_replace, replace)
    
def replace_on_site(directory, read_file_name, to_replace, replace):
    read_path = os.path.join(directory, read_file_name)
    modified_contents = ""
    with open(read_path, 'r') as f:
        file_contents = f.read()
        modified_contents = re.sub(r'\b{}\b'.format(to_replace), replace, file_contents.lower())
    with open(read_path, 'w') as f:
        f.write(modified_contents)