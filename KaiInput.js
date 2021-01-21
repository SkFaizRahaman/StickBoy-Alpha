const softkeyCallback = {
    ArrowRightClick: function(){keys.ClickRight = true},
    ArrowLeftClick: function(){keys.ClickLeft = true},
    ArrowUpClick: function(){keys.ClickUp = true},
    ArrowDownClick: function(){keys.ClickDown = true},
    left: function(){keys.left = true},
    right: function(){keys.right = 1},
    center: function(){keys.center = 1}
};
function handleKeyDown(evt) {
    switch (evt.key) {
      case 'ArrowRight':
            softkeyCallback.ArrowRightClick();
         break;
     case 'ArrowLeft':
            softkeyCallback.ArrowLeftClick();
         break;
     case 'ArrowUp':
         softkeyCallback.ArrowUpClick();
         break;
     case 'ArrowDown':
         softkeyCallback.ArrowDownClick();
         break;

     case 'SoftLeft':
            // Action case press left key
            softkeyCallback.left();
        break;

     case 'SoftRight':
            // Action case press right key
            softkeyCallback.right();
        break;

     case 'Enter':
            // Action case press center key
            softkeyCallback.center();
        break;
    }
};

document.addEventListener('keydown', handleKeyDown);


const keyCallback = {
    ArrowRightClickUp: function(){keys.ClickRight = false},
    ArrowLeftClickUp: function(){keys.ClickLeft = false},
    ArrowUpClickUp: function(){keys.ClickUp = false},
    ArrowDownClickUp: function(){keys.ClickDown = false},
    leftUp: function(){keys.left = false},
    rightUp: function(){keys.right = 2},
    centerUp: function(){keys.center = 2}
};
function handleKeyUp(evt) {
    switch (evt.key) {
      case 'ArrowRight':
            keyCallback.ArrowRightClickUp();
         break;
     case 'ArrowLeft':
            keyCallback.ArrowLeftClickUp();
         break;
     case 'ArrowUp':
         keyCallback.ArrowUpClickUp();
         break;
     case 'ArrowDown':
         keyCallback.ArrowDownClickUp();
         break;

     case 'SoftLeft':
            // Action case press left key
            keyCallback.leftUp();
        break;

     case 'SoftRight':
            // Action case press right key
            keyCallback.rightUp();
        break;

     case 'Enter':
            // Action case press center key
            keyCallback.centerUp();
        break;
    }
};

document.addEventListener('keyup', handleKeyUp);

/*

//Keys Inputs Configuration
var keys = {
    ClickRight =false,
    ClickLeft = false,
    ClickUp = false,
    ClickDown = false,
    left : false,
    right : 0,
    center : 0
};
//End Inputs Configurations
*/