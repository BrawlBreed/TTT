import requests
import base64

# replace the following URL with your blob URL


def blobSolver(URL):

    blob_url = URL

    # download the binary data from the blob URL
    response = requests.get(blob_url)

    # encode the binary data as a base64-encoded string
    base64_data = base64.b64encode(response.content)

    # create a data URL by prefixing the base64-encoded string with "data:image/jpeg;base64,"
    data_url = 'data:image/jpeg;base64,' + base64_data.decode('utf-8')
    print(data_url)

    return data_url


def blobHandler(driver, blob_url):
    from selenium import webdriver
    import time
    import base64

    # initialize the Chrome driver

    # navigate to the page that contains the blob URL
    driver.get('data:text/html,<script>(async function() {var response = await fetch("' + blob_url +
               '");var blob = await response.blob();var reader = new FileReader();reader.readAsDataURL(blob);reader.onloadend = function() {var base64data = reader.result.split(",")[1];document.write(base64data);}})();</script>')

    time.sleep(5)
    base64_data = driver.page_source

    data_url = 'data:image/jpeg;base64,' + base64_data

    print(data_url)
    driver.back()

    return data_url


def getContent(driver, uri):
    result = driver.execute_async_script("""
        var uri = arguments[0];
        var callback = arguments[1];
        var toBase64 = function(buffer){for(var r,n=new Uint8Array(buffer),t=n.length,a=new Uint8Array(4*Math.ceil(t/3)),i=new Uint8Array(64),o=0,c=0;64>c;++c)i[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(c);for(c=0;t-t%3>c;c+=3,o+=4)r=n[c]<<16|n[c+1]<<8|n[c+2],a[o]=i[r>>18],a[o+1]=i[r>>12&63],a[o+2]=i[r>>6&63],a[o+3]=i[63&r];return t%3===1?(r=n[t-1],a[o]=i[r>>2],a[o+1]=i[r<<4&63],a[o+2]=61,a[o+3]=61):t%3===2&&(r=(n[t-2]<<8)+n[t-1],a[o]=i[r>>10],a[o+1]=i[r>>4&63],a[o+2]=i[r<<2&63],a[o+3]=61),new TextDecoder("ascii").decode(a)};
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'arraybuffer';
        xhr.onload = function(){ callback(toBase64(xhr.response)) };
        xhr.onerror = function(){ callback(xhr.status) };
        xhr.open('GET', uri);
        xhr.send();
        """, uri)
    if type(result) == int:
        raise Exception("Request failed with status %s" % result)
    return result
    # return base64.b64decode(result)
