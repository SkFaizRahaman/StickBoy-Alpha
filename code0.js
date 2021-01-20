gdjs.MenuSceneCode = {};
gdjs.MenuSceneCode.GDBackGroundObjects1= [];
gdjs.MenuSceneCode.GDBackGroundObjects2= [];
gdjs.MenuSceneCode.GDPlayBtnObjects1= [];
gdjs.MenuSceneCode.GDPlayBtnObjects2= [];
gdjs.MenuSceneCode.GDExitBtnObjects1= [];
gdjs.MenuSceneCode.GDExitBtnObjects2= [];

gdjs.MenuSceneCode.conditionTrue_0 = {val:false};
gdjs.MenuSceneCode.condition0IsTrue_0 = {val:false};
gdjs.MenuSceneCode.condition1IsTrue_0 = {val:false};
gdjs.MenuSceneCode.condition2IsTrue_0 = {val:false};

//For Kai Inputs
const softkeyCallback = {
    ArrowRightClick: function(){keys.ClickRight = true},
    ArrowLeftClick: function(){keys.ClickLeft = true},
    ArrowUpClick: function(){keys.ClickUp = true},
    ArrowDownClick: function(){keys.ClickDown = true},
    left: function(){keys.left = true},
    right: function(){keys.right = 1},
    center: function(){keys.center = 1}
};
//End

gdjs.MenuSceneCode.eventsList0 = function(runtimeScene) {

{


{
}

}


};gdjs.MenuSceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MenuSceneCode.GDPlayBtnObjects1);
{runtimeScene.getVariables().get("playSelected").setNumber(1);
}{for(var i = 0, len = gdjs.MenuSceneCode.GDPlayBtnObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDPlayBtnObjects1[i].setColor("248;231;28");
}
}
{ //Subevents
gdjs.MenuSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}{gdjs.evtTools.window.setMargins(runtimeScene, 40, 0, 0, 0);
}{runtimeScene.getGame().getVariables().get("isBannerAdShow").setNumber(1);
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
gdjs.MenuSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.MenuSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MenuSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("playSelected")) == 1;
}}
if (gdjs.MenuSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExitBtn"), gdjs.MenuSceneCode.GDExitBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MenuSceneCode.GDPlayBtnObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDExitBtnObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDExitBtnObjects1[i].setColor("248;231;28");
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDPlayBtnObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDPlayBtnObjects1[i].setColor("255;255;255");
}
}{runtimeScene.getVariables().get("playSelected").setNumber(0);
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
gdjs.MenuSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.MenuSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MenuSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("playSelected")) == 0;
}}
if (gdjs.MenuSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExitBtn"), gdjs.MenuSceneCode.GDExitBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MenuSceneCode.GDPlayBtnObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDPlayBtnObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDPlayBtnObjects1[i].setColor("248;231;28");
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDExitBtnObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDExitBtnObjects1[i].setColor("255;255;255");
}
}{runtimeScene.getVariables().get("playSelected").setNumber(1);
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
gdjs.MenuSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene)
}if(softkeyCallback.center){
if ( gdjs.MenuSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MenuSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("playSelected")) == 1;
}}
if (gdjs.MenuSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "MainScene");
}}
}
}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("playSelected")) == 0;
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
}

}


};

gdjs.MenuSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuSceneCode.GDBackGroundObjects1.length = 0;
gdjs.MenuSceneCode.GDBackGroundObjects2.length = 0;
gdjs.MenuSceneCode.GDPlayBtnObjects1.length = 0;
gdjs.MenuSceneCode.GDPlayBtnObjects2.length = 0;
gdjs.MenuSceneCode.GDExitBtnObjects1.length = 0;
gdjs.MenuSceneCode.GDExitBtnObjects2.length = 0;

gdjs.MenuSceneCode.eventsList1(runtimeScene);
return;

}

gdjs['MenuSceneCode'] = gdjs.MenuSceneCode;
