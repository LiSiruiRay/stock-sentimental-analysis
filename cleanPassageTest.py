import os
import re

def replace(directory, filename, to_replace, replace):
    path = os.path.join(directory, filename)
    modified_contents = ""
    with open(path, 'r') as f:
        file_contents = f.read()
        modified_contents = re.sub(r'\b{}\b'.format(to_replace), replace, file_contents)
    with open(path, 'w') as f:
        f.write(modified_contents)

replace("", "testingCleaningFile", 'a', '')
# Replace with three spaces