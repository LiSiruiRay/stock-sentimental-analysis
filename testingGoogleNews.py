from GoogleNews import GoogleNews
from newspaper import Article
import os
import tempResult

key_word = 'Tesla'
# googlenews = GoogleNews()
# googlenews.search(key_word)
# results = googlenews.result() #list
results = tempResult.getResults2()
directory = "resources/" + key_word

# print(results)

if not os.path.exists(directory):
    os.makedirs(directory)
    print("created the directory")
print("finished creating directory")
for i in range(0, len(results)):
    filename = str(i)
    filepath = os.path.join(directory, filename)
    errpath = os.path.join(directory, "err_log")
    
    url = results[i]["link"]
    try:
        article = Article(url)
        article.download()
        article.parse()
    except Exception as e:
        with open(errpath, "a") as f:
            f.write(str(e) + "\n" + "--------------------------" + "\n")
            # print("err---------------------------")
            continue
    
    with open(filepath, "w") as file:
        file.write(article.text)
# print(result)

def test():
    print("testing def")
