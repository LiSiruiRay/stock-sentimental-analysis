# from newsapi import NewsApiClient
# import json
from GoogleNews import GoogleNews
import pandas as pd

googlenews = GoogleNews()
print("test")
googlenews.search('Telsa')
print("test2")
result  = googlenews.results()
print("test3")
df = pd.DataFrame(result)
print(df, "------")

# def write_to_JSON(key_word, category, language, country, out_put_file):
#     newsapi = NewsApiClient(api_key='e7a5a41dd4994001905e774060430e17')
#     top_headlines = newsapi.get_everything(q=key_word) #dict tystpe


#     print(top_headlines) 
#     with open(out_put_file, "w") as outfile:
#         json.dump(top_headlines, outfile)

#     outfile.close

# write_to_JSON('bitcoin', 'business', 'en', 'us', "testingJSON.json")
# file = open ("testingJSON.json", "w")
# file = open("testingAPIResultFile.txt", "w")
# file.close
# articals = top_headlines["articles"]
# for artical in articals:
#     url = artical["url"]
#     file.write(url + "\n")
# file.close
# # # print(type(artical))
# # for key, value in artical.items():
# #     print(key + ": " + value)
# # print(artical)
# # print(type(articals))
# firstArtical = articals[0]
# # print(firstArtical)
# # print(type(firstArtical))
# for key, value in firstArtical.items():
#     print(key + "--------------------------" + "\n" + str(value))
# contentOfFirst = firstArtical["content"]
# linkOfFirst = firstArtical["url"]
# # print(contentOfFirst)
#     # print(value)
# # for key in artical:
# #     print(key)

# file = open("testingAPIResultFile.txt", "w")
# file.write(contentOfFirst)
# file.close