---
layout: post
title:  "New Plan Pricing"
comments: true
author: luke
image: blog/blog_image.jpg
categories: [Announcements, Web Hosting, VPS]
---

Lorem markdownum usus nervus fetus et revolet et prioris phocen in cuius sexque
abiturus. Fraude ego.

> Valuere Tritona date vetaris decipis dictis numquam, nec inania caesique
> proceres illis, Ide Picus simillimus Ixione in? Socia desiluit si tamen:
> **dixit telo**, praerupit dant nihil tui! Auditurum superi adhuc deos Saturnia
> [ad exanimis](http://www.billmays.net/) servatos Aesacon requiris effuge, ex
> deique Hyllus quidem, cecidit legit. Crescere tumulo bracchia huius ut pollue
> **lacerat inquit riget** Phaeocomes imago, quinquennia
> [vetitum](http://zeus.ugent.be/).

Illo sic; capere solito ille! Te et mille, evincitque ipse aliena tanta
celeremque sacraria, qui. *Addidit* caede, et fugacem Cinyran [iram Lycopen
magis](http://imgur.com/) nec *vincitur* sono; iam manus sub ursaque zonae
curat.

<!--more-->

- Siqua puerile coronis isto Troiae
- Accendit coepere rapidae linguaque violaverat arcum est
- Et nitidaeque scire dumque sospes onus vellere
- Sustinuisse apex attollere at quae procorum
- Illa nec iacet quantum Ditem
- Soluti modo est vicimus apro

## Anhelitus coniunx

Te torque concita vidit, Rhodosque dubiam destrinxit eunti quem operatus at
omnia. **Ferro** commentaque cavo, sit ab tristitiam quae delapsam. Nec Cereri
corpusque referat linquit; iam forma tura iubet viriles. Scilicet vindexque
alter quanta: dracones: cur si **servare**: minitantiaque?

```python
import requests
import re
from bs4 import BeautifulSoup

from cloudbot import hook
from cloudbot.util import web, formatting, colors


SEARCH_URL = "http://www.amazon.{}/s/"
REGION = "com"

AMAZON_RE = re.compile(""".*ama?zo?n\.(com|co\.uk|com\.au|de|fr|ca|cn|es|it)/.*/(?:exec/obidos/ASIN/|o/|gp/product/|
(?:(?:[^"\'/]*)/)?dp/|)(B[A-Z0-9]{9})""", re.I)

# Feel free to set this to None or change it to your own ID.
# Or leave it in to support CloudBot, it's up to you!
AFFILIATE_TAG = "cloudbot-20"


@hook.regex(AMAZON_RE)
def amazon_url(match):
    cc = match.group(1)
    asin = match.group(2)
    return amazon(asin, _parsed=cc)


@hook.command("amazon", "az")
def amazon(text, _parsed=False):
    """<query> -- Searches Amazon for query"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, '
                      'like Gecko) Chrome/41.0.2228.0 Safari/537.36',
        'Referer': 'http://www.amazon.com/'
    }
    params = {
        'url': 'search-alias',
        'field-keywords': text.strip()
    }
    if _parsed:
        # input is from a link parser, we need a specific URL
        request = requests.get(SEARCH_URL.format(_parsed), params=params, headers=headers)
    else:
        request = requests.get(SEARCH_URL.format(REGION), params=params, headers=headers)

    soup = BeautifulSoup(request.text)

    # check if there are any results on the amazon page
    results = soup.find('div', {'id': 'atfResults'})
    if not results:
        if not _parsed:
            return "No results found."
        else:
            return

    # get the first item from the results on the amazon page
    results = results.find('ul', {'id': 's-results-list-atf'}).find_all('li', {'class': 's-result-item'})
    item = results[0]
    asin = item['data-asin']

    # here we use dirty html scraping to get everything we need
    title = formatting.truncate(item.find('h2', {'class': 's-access-title'}).text, 60)
    tags = []

    # tags!
    if item.find('i', {'class': 'a-icon-prime'}):
        tags.append("$(b)Prime$(b)")

    if item.find('i', {'class': 'sx-bestseller-badge-primary'}):
        tags.append("$(b)Bestseller$(b)")

    # we use regex because we need to recognise text for this part
    # the other parts detect based on html tags, not text
    if re.search(r"(Kostenlose Lieferung|Livraison gratuite|FREE Shipping|Envío GRATIS"
                 r"|Spedizione gratuita)", item.text, re.I):
        tags.append("$(b)Free Shipping$(b)")

    price = item.find('span', {'class': ['s-price', 'a-color-price']}).text

    # use a whole lot of BS4 and regex to get the ratings
    try:
        # get the rating
        rating = item.find('i', {'class': 'a-icon-star'}).find('span', {'class': 'a-icon-alt'}).text
        rating = re.search(r"([0-9]+(?:(?:\.|,)[0-9])?).*5", rating).group(1).replace(",", ".")
        # get the rating count
        pattern = re.compile(r'(product-reviews|#customerReviews)')
        num_ratings = item.find('a', {'href': pattern}).text.replace(".", ",")
        # format the rating and count into a nice string
        rating_str = "{}/5 stars ({} ratings)".format(rating, num_ratings)
    except AttributeError:
        rating_str = "No Ratings"

    # generate a short url
    if AFFILIATE_TAG:
        url = "http://www.amazon.com/dp/" + asin + "/?tag=" + AFFILIATE_TAG
    else:
        url = "http://www.amazon.com/dp/" + asin + "/"
    url = web.try_shorten(url)

    # join all the tags into a string
    tag_str = " - " + ", ".join(tags) if tags else ""

    # finally, assemble everything into the final string, and return it!
    if not _parsed:
        return colors.parse("$(b){}$(b) ({}) - {}{} - {}".format(title, price, rating_str, tag_str, url))
    else:
        return colors.parse("$(b){}$(b) ({}) - {}{}".format(title, price, rating_str, tag_str))
```

Multifori fuit! Stygia tenet, in auctor, deos vestes, vestrum morsusque urbem
monstraverat nisi quondam conferat, servabere eodem.

Loca et enim, se illis. Vestigia vel simus quater ad adest sedebat: meum sucos
miscet quod rerum ubi. Sed non et terramque atros flentibus semper, prius aequa
annos nitidum at corpus, tamen umor.

Sua quam Melantho neque; et grani Pergama: metu vicit iurantem, exempla aere
dixi digitorum traiectus **tange**. Carmina ore caelo sonanti, pudori ad pectora
Telamon; serpit Phobetora facit aether candida.
