# Ray
# Created By: 2023-03-06
# Description: This is the function to search multiple key words then use multi-thread to implement the saving (and/or cleaning)

from util.search_and_store import save_results
from util.clean_folder_st import clean_folder
import threading


# Collection of string or string[]
def search_key_words(key_words):
    thread_list = []
    def search_and_clean(word):
        save_results(word)
        clean_folder("../resources/news/" + word)
        
        
    for key_word in key_words:
        t = threading.Thread(target=search_and_clean, args=(key_word,))
        # print("before appending---------")
        thread_list.append(t)
        # print("after appending---------")
        
    for each_t in thread_list:
        # print("before start---------")
        each_t.start()
        # print("after start---------")
    for each_t in thread_list:
        # print("before join---------")
        each_t.join()
        # print("after start---------")

key_words_test = ["Google", "Apple", "Tesla"]
# # key_words_test = ["MIT"]
search_key_words(key_words_test)