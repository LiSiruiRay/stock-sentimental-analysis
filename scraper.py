import requests
from bs4 import BeautifulSoup
import time

# URL of the news article
url = 'https://cointelegraph.com/news/bitcoin-regains-25k-amid-hope-record-china-easing-will-boost-btc-price'

header = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
# Send a GET request to the URL and get the HTML response
response = requests.get(url, headers = header)
# time.sleep(5)
# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')
# print(soup)

# print(type(soup))



# Find the news passage element by its class name
news_passage = soup.find('div', {'class': 'post-content'})
# print("the passage in tag postfull text: ", news_passage)
# Extract the text from the news passage element
text = news_passage.get_text().strip()

# Print the text of the news passage
file = open("testingContent.txt", "w")
file.write(text)
file.close
print(text)
