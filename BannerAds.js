var isAdsShow = false;
var isGameRunning = false;
var x = document.getElementById('ad-container');
var keys = 
{
     ClickDown : false,
     ClickUp : false,
     ClickLeft : false,
     ClickRight : false,
     center : 0,
     left : false,
     right : 0
};
document.addEventListener("DOMContentLoaded", () => {
    console.log("BannerAds");
    getKaiAd({
        publisher: '3b38ba5c-be76-40f3-9bec-a1f37e7a7378',
        app: 'Stick Boy',
        slot: 'Banner',
        test: 1,        
        h: 40,
        w: 240,
    
        // Max supported size is 240x264
        // container is required for responsive ads
        container: document.getElementById('ad-container'),
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
            isAdsShow = true;
            // Ad is ready to be displayed
            // calling 'display' will display the ad
            ad.call('display', {
    
                // In KaiOS the app developer is responsible
                // for user navigation, and can provide
                // navigational className and/or a tabindex
                tabindex: 0,
    
                // if the application is using
                // a classname to navigate
                // this classname will be applied
                // to the container
                navClass: 'items',
    
                // display style will be applied
                // to the container block or inline-block
                display: 'none',
            })
           
			document.addEventListener('keydown',function AdClicked(){
      
        if(keys.right == 1)
				  {
						x.style.display = "block";
			
				  }
         })
        document.addEventListener('keydown',function AdClicked(){
          if(keys.left)
            {
                  ad.call('click')
            }
          })
    
           
        }
    })
    });
    
  

    