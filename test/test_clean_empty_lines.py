with open('test_input_file.txt', 'r') as input_file, open('test_output_file.txt', 'w') as output_file:
    for line in input_file:
        if line.strip():  # check if the line is not empty
            output_file.write(line)
            prev_line_empty = False
        elif not prev_line_empty:  # check if the previous line was not empty
            output_file.write(line)
            prev_line_empty = True
