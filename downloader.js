console.clear();
// select the container of image grid
const _main = document.querySelector('body section main div');
// '3' because the 3rd child is real grid container
const _grid_cnt = _main.childNodes[5];
// still not the real one :p (actually it is grid of rows)
const _real_grid_cnt = _grid_cnt.querySelector('article div div');

// empty array to be filled with links of images
var _imgs = [];
// quality parameter defaults to 640
var _quality = 640;

// variable to check if scroll possible
var _dev_y = 0;
console.log('%cPlease scroll till you reach the bottom of page so that script is able to fetch links','color:red;font-size:20px');

function forceDownload(url, fileName){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}

function _init_ig_private_downloader(_quality = 640){
  _quality = _quality;
// //   scrolling to load images and hence urls
//   var _si = setInterval(function(){
//     window.scrollBy(0,300);
//     _dev_y += 300;
//     console.log(_dev_y, window.pageYOffset);
//     if(_dev_y > window.pageYOffset){
//       clearInterval(_si);
//       console.log('ahead');
//       _make_array_imgs();
//     }
//   },400);
  
  console.log('%cwait a few seconds trying to do magic','color:green;font-size:24px;');
  
  setTimeout(()=>{
    _make_array_imgs();
  },3000);
}

function _make_array_imgs(){
  // now loop through rows
  _real_grid_cnt.childNodes.forEach((row)=>{
  //  each row has 3 containers of images
  //  yeah instagram sucks
    row.childNodes.forEach((image_container)=>{
      if(typeof image_container.querySelector('a div div') != 'undefined' || image_container.querySelector('a div div') !== null){
        var _img = image_container.querySelector('a div div img');
        if(_img !== null){
          var _src_set = _img.srcset;
          var _src_set_arr = _src_set.split(',');
          var complicated_arr = [];
  //       i am doing this because to make it easier for manipulating srcset
          _src_set_arr.forEach((src)=>{
            var _temp = src.split(' ');
            complicated_arr[_temp[1]] = _temp[0];
          });
          _imgs.push(complicated_arr);
        }
      }
    });
  });
  
  _download_imgs();
}

function _download_imgs(){
    _create_ad();
    console.log('%cMade by Saurabh Sharma','font-size:20px;color:blue;');
    console.log('%cHope you like it https://saurabh.gq https://github.com/DevSaurabhcb/instagram-private-downloader','font-size:20px;color:white;background:black;');
    if(typeof _imgs[0] != 'undefined'){
      if(typeof _imgs[0][_quality+'w'] != 'undefined'){
         _imgs.forEach((img)=>{
           forceDownload(img[_quality+'w'],'devSaurabh_oug_private_ig_img_'+Math.floor(Math.random()*10000)+'.jpg');
         });
      }
      else {
        _imgs.forEach((img)=>{
           forceDownload(img[Object.keys(img).length - 1],'devSaurabh_oug_private_ig_img_'+Math.floor(Math.random()*10000)+'.jpg');
        });
      }
    }
  else {
    console.log('Sorry found some error, try refreshing the page and scroll to bottom before using function. If problem persists please let me know https://github.com/DevSaurabhcb/instagram-private-downloader/');
  }
}

function _create_ad(){
  var d = document.createElement('div');
  var s = d.style;
  s.position = 'fixed';
  s.height = '100%';
  s.width = '100%';
  s.left = 0;
  s.top = 0;
  s.background = 'steelblue';
  s.textAlign = 'center';
  s.fontSize = '50px';
  s.zIndex = '9999999';
  s.lineHeight = '100%';
  d.innerHTML = '#OUGrocks <br/> made with love by <a href="https://saurabh.gq" style="color:white;text-decoration:none;">"Saurabh Sharma" (devSaurabh)</a>';
  document.body.appendChild(d);
}

_init_ig_private_downloader();
