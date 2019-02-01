# instagram-private-downloader

Only works if you follow someone and you are able to view their photos

> The script downloads every image loaded in your viewport. Currently no solution for it, however in future releases I will consider adding it

Steps
1. Press ctrl+shift+i or F12 or right click anywhere in page and select inspect element (Open developer tools in short :p)
2. Select *console* tab in developer tools
3. **Please scroll down to bottom of the page and let those thumbnails appear or load.** Else you will not be able to download them all.
4. Simply copy and paste following in your console tab (this may sometime result in refusal to load the script, read solution given below)

```javascript
var _ig_s = document.createElement('script');
_ig_s.src = "https://cdn.jsdelivr.net/gh/devsaurabhcb/instagram-private-downloader@latest/downloader.js"; 
document.body.appendChild(_ig_s);
```
or all these in one line
```javascript
var _ig_s = document.createElement('script');_ig_s.src = "https://cdn.jsdelivr.net/gh/devsaurabhcb/instagram-private-downloader@latest/downloader.js"; document.body.appendChild(_ig_s);
```
If you are getting error like **Refused to load the script**
Then consider opening link given below *[https://cdn.jsdelivr.net/gh/devsaurabhcb/instagram-private-downloader@latest/downloader.min.js](https://cdn.jsdelivr.net/gh/devsaurabhcb/instagram-private-downloader@latest/downloader.min.js)*

Did you like it, let me know : *[email me](mailto:devsaurabh@mail.com)*

## _All Hail Saurabh Sharma, devSaurabh_
