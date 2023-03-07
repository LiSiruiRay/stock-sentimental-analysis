# Ray
# Created By: 2023-03-03
# Description: Deprecated
# This is a one time function, scraping stop words from certain website

import requests
from bs4 import BeautifulSoup
import time

# URL of the news article
url = 'https://www.link-assistant.com/seo-stop-words.html'

header = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
# Send a GET request to the URL and get the HTML response
response = requests.get(url, headers = header)
soup = BeautifulSoup(response.content, 'html.parser')
print(type(soup))
news_passage = soup.find('table', {'class': 'pr100'})
tags = soup.find_all('td')
result = "{"
for tag in tags:
    brs2 = tag.find_all('br')
    for br_tag in brs2:
        text = br_tag.previous_sibling.strip()
        result = result + '"' + text + '", '
result = result + "}"
with open("testStopWords_Scraper", 'w') as f:
    f.write(result)

