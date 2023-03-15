# Ray
# Created By: 2023-03-01
# Description: This function takes in a key word and google searcht the key word. After that, the passage will be store in the resources/news/{key_word} folder


from GoogleNews import GoogleNews
from newspaper import Article
import os
import json
import datetime
import logging

def save_results(key_word):
    """This function will reasearch a key word and save the result into a folder named of the key word and the result as sub files named 1.txt, 2.txt, etc.

    Args:
        key_word (string): the key word for searching in google news
    """
    logging.info(key_word + ": searching")
    
    #get search result as list named results
    googlenews = GoogleNews()
    googlenews.search(key_word)
    results = googlenews.result() #list
    # directory name
    directory = "../resources/news/" + key_word
    
    meta_data_path = os.path.join(directory, "meta_data.json") #path to meta_data
    errpath = os.path.join(directory, "err_log.txt") #path to store err message
    #if not exist, create such directory
    meta_data = {};
    if not os.path.exists(directory):
        os.makedirs(directory)
    for i in range(0, len(results)):
        result_date = results[i]["datetime"]
        if (result_date):
            if not isinstance(result_date, float):
                results[i]["datetime"] = result_date.strftime('%Y-%m-%d %H:%M:%S.%f');
        filename = str(i) + ".txt"
        # print(results[i]["datetime"]);
        meta_data[filename] = results[i]
        filepath = os.path.join(directory, filename)
        url = results[i]["link"]
        try: #try to scrape url, if suceed, write it into a file
            article = Article(url)
            article.download()
            article.parse()
        except Exception as e: # if not, write the erro message into a err_log file (append writing)
            with open(errpath, "a") as f:
                f.write(str(e) + "\n" + "--------------------------" + "\n")
                continue #if not exist we kip this round
        with open(filepath, "w") as file:
            file.write(article.text)
    with open(meta_data_path, "w") as f:
        logging.info("Matadata Saving: " + key_word)
        json.dump(meta_data, f)