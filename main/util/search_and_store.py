# Ray
# Created By: 2023-03-01
# Description: This function takes in a key word and google searcht the key word. After that, the passage will be store in the resources/news/{key_word} folder

from GoogleNews import GoogleNews
from newspaper import Article
import os
#this was for testing
#import tempResult

def save_results(key_word):
    #get search result as list named results
    googlenews = GoogleNews()
    googlenews.search(key_word)
    results = googlenews.result() #list
    # directory name
    directory = "resources/" + key_word
    errpath = os.path.join(directory, "err_log") #path to store err message
    #if not exist, create such directory
    if not os.path.exists(directory):
        os.makedirs(directory)
    for i in range(0, len(results)):
        filename = str(i)
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
