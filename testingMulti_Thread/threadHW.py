import threading
import time

def print_numbers():
    """Prints numbers from 1 to 10"""
    for i in range(1, 11):
        print(i)
        time.sleep(0.5)  # Add a small delay to simulate work

def print_letters():
    """Prints letters from A to J"""
    for letter in 'ABCDEFGHIJ':
        print(letter)
        time.sleep(0.5)  # Add a small delay to simulate work

# Create two new threads
t1 = threading.Thread(target=print_numbers)
t2 = threading.Thread(target=print_letters)

# Start both threads
t1.start()
t2.start()

# Main thread continues to execute
for i in range(3):
    print("Main thread doing some other work")
    time.sleep(1)

# Wait for both threads to complete
t1.join()
t2.join()

print("Done")
