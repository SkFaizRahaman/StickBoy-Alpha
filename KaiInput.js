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