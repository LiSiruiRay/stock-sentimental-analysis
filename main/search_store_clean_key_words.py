# Ray
# Created By: 2023-03-06
# Description: This is the function to search multiple key words then use multi-thread to implement the saving (and/or cleaning)

from util.search_and_store import save_results
from util.clean_folder_st import clean_folder
from util.read_stop_words import read_stop_words
import threading
import logging



# Collection of string or string[]
def search_key_words(key_words):
    """This is the function to search multiple key words and then use save and clean them

    Args:
        key_words (Collection(string)): a collection of string, or list of string, or anything iterable in python with string inside
        
    """
    STOP_WORD_DIR = "../resources/static/stop_words.txt"
    
    stop_words = read_stop_words(STOP_WORD_DIR)
    # print(stop_words)
    
    logging.basicConfig(
        level = logging.INFO,
        format="%(asctime)s %(levelname)s %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    
    thread_list = []
    def search_and_clean(word):
        save_results(word)
        clean_folder("../resources/news/" + word, stop_words)
        
        
    for key_word in key_words:
        t = threading.Thread(target=search_and_clean, args=(key_word,))
        logging.info("Thread is created: " + key_word)
        # print()
        thread_list.append(t)
    
    for i in range(0, len(key_words)):
        thread_list[i].start()
        logging.info("Thread started: " + key_words[i])
        
    # for each_t in thread_list:
    #     each_t.start()
    #     logging.info("Thread started: " + key_word)
    for i in range(0, len(key_words)):
        thread_list[i].join()
        logging.info("Thread finished: " + key_words[i])
    # for each_t in thread_list:
    #     each_t.join()
        
key_words_test = ["Google", "Apple", "Tesla"]
# # key_words_test = ["MIT"]
search_key_words(key_words_test)