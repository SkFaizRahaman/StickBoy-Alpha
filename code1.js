gdjs.MainSceneCode = {};
gdjs.MainSceneCode.GDStickObjects1= [];
gdjs.MainSceneCode.GDStickObjects2= [];
gdjs.MainSceneCode.GDStickObjects3= [];
gdjs.MainSceneCode.GDStickObjects4= [];
gdjs.MainSceneCode.GDStickObjects5= [];
gdjs.MainSceneCode.GDScoreObjects1= [];
gdjs.MainSceneCode.GDScoreObjects2= [];
gdjs.MainSceneCode.GDScoreObjects3= [];
gdjs.MainSceneCode.GDScoreObjects4= [];
gdjs.MainSceneCode.GDScoreObjects5= [];
gdjs.MainSceneCode.GDTilesObjects1= [];
gdjs.MainSceneCode.GDTilesObjects2= [];
gdjs.MainSceneCode.GDTilesObjects3= [];
gdjs.MainSceneCode.GDTilesObjects4= [];
gdjs.MainSceneCode.GDTilesObjects5= [];
gdjs.MainSceneCode.GDPlayerObjects1= [];
gdjs.MainSceneCode.GDPlayerObjects2= [];
gdjs.MainSceneCode.GDPlayerObjects3= [];
gdjs.MainSceneCode.GDPlayerObjects4= [];
gdjs.MainSceneCode.GDPlayerObjects5= [];
gdjs.MainSceneCode.GDMainMenuObjects1= [];
gdjs.MainSceneCode.GDMainMenuObjects2= [];
gdjs.MainSceneCode.GDMainMenuObjects3= [];
gdjs.MainSceneCode.GDMainMenuObjects4= [];
gdjs.MainSceneCode.GDMainMenuObjects5= [];
gdjs.MainSceneCode.GDAppleLogoObjects1= [];
gdjs.MainSceneCode.GDAppleLogoObjects2= [];
gdjs.MainSceneCode.GDAppleLogoObjects3= [];
gdjs.MainSceneCode.GDAppleLogoObjects4= [];
gdjs.MainSceneCode.GDAppleLogoObjects5= [];
gdjs.MainSceneCode.GDAppleScoreTextObjects1= [];
gdjs.MainSceneCode.GDAppleScoreTextObjects2= [];
gdjs.MainSceneCode.GDAppleScoreTextObjects3= [];
gdjs.MainSceneCode.GDAppleScoreTextObjects4= [];
gdjs.MainSceneCode.GDAppleScoreTextObjects5= [];
gdjs.MainSceneCode.GDBackgroundsObjects1= [];
gdjs.MainSceneCode.GDBackgroundsObjects2= [];
gdjs.MainSceneCode.GDBackgroundsObjects3= [];
gdjs.MainSceneCode.GDBackgroundsObjects4= [];
gdjs.MainSceneCode.GDBackgroundsObjects5= [];
gdjs.MainSceneCode.GDGameOverScreenObjects1= [];
gdjs.MainSceneCode.GDGameOverScreenObjects2= [];
gdjs.MainSceneCode.GDGameOverScreenObjects3= [];
gdjs.MainSceneCode.GDGameOverScreenObjects4= [];
gdjs.MainSceneCode.GDGameOverScreenObjects5= [];
gdjs.MainSceneCode.GDAdsButtonObjects1= [];
gdjs.MainSceneCode.GDAdsButtonObjects2= [];
gdjs.MainSceneCode.GDAdsButtonObjects3= [];
gdjs.MainSceneCode.GDAdsButtonObjects4= [];
gdjs.MainSceneCode.GDAdsButtonObjects5= [];
gdjs.MainSceneCode.GDRestartButtonObjects1= [];
gdjs.MainSceneCode.GDRestartButtonObjects2= [];
gdjs.MainSceneCode.GDRestartButtonObjects3= [];
gdjs.MainSceneCode.GDRestartButtonObjects4= [];
gdjs.MainSceneCode.GDRestartButtonObjects5= [];
gdjs.MainSceneCode.GDBackButtonObjects1= [];
gdjs.MainSceneCode.GDBackButtonObjects2= [];
gdjs.MainSceneCode.GDBackButtonObjects3= [];
gdjs.MainSceneCode.GDBackButtonObjects4= [];
gdjs.MainSceneCode.GDBackButtonObjects5= [];
gdjs.MainSceneCode.GDPanelObjects1= [];
gdjs.MainSceneCode.GDPanelObjects2= [];
gdjs.MainSceneCode.GDPanelObjects3= [];
gdjs.MainSceneCode.GDPanelObjects4= [];
gdjs.MainSceneCode.GDPanelObjects5= [];
gdjs.MainSceneCode.GDHighScoreObjects1= [];
gdjs.MainSceneCode.GDHighScoreObjects2= [];
gdjs.MainSceneCode.GDHighScoreObjects3= [];
gdjs.MainSceneCode.GDHighScoreObjects4= [];
gdjs.MainSceneCode.GDHighScoreObjects5= [];
gdjs.MainSceneCode.GDscorePanelObjects1= [];
gdjs.MainSceneCode.GDscorePanelObjects2= [];
gdjs.MainSceneCode.GDscorePanelObjects3= [];
gdjs.MainSceneCode.GDscorePanelObjects4= [];
gdjs.MainSceneCode.GDscorePanelObjects5= [];
gdjs.MainSceneCode.GDAdBtnObjects1= [];
gdjs.MainSceneCode.GDAdBtnObjects2= [];
gdjs.MainSceneCode.GDAdBtnObjects3= [];
gdjs.MainSceneCode.GDAdBtnObjects4= [];
gdjs.MainSceneCode.GDAdBtnObjects5= [];
gdjs.MainSceneCode.GDNewObjectObjects1= [];
gdjs.MainSceneCode.GDNewObjectObjects2= [];
gdjs.MainSceneCode.GDNewObjectObjects3= [];
gdjs.MainSceneCode.GDNewObjectObjects4= [];
gdjs.MainSceneCode.GDNewObjectObjects5= [];

gdjs.MainSceneCode.conditionTrue_0 = {val:false};
gdjs.MainSceneCode.condition0IsTrue_0 = {val:false};
gdjs.MainSceneCode.condition1IsTrue_0 = {val:false};
gdjs.MainSceneCode.condition2IsTrue_0 = {val:false};
gdjs.MainSceneCode.condition3IsTrue_0 = {val:false};
gdjs.MainSceneCode.conditionTrue_1 = {val:false};
gdjs.MainSceneCode.condition0IsTrue_1 = {val:false};
gdjs.MainSceneCode.condition1IsTrue_1 = {val:false};
gdjs.MainSceneCode.condition2IsTrue_1 = {val:false};
gdjs.MainSceneCode.condition3IsTrue_1 = {val:false};


gdjs.MainSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainSceneCode.GDStickObjects2, gdjs.MainSceneCode.GDStickObjects3);


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition0IsTrue_0;
gdjs.MainSceneCode.condition0IsTrue_1.val = false;
gdjs.MainSceneCode.condition1IsTrue_1.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("stickHeight")) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("rightTilePosX")) - (( gdjs.MainSceneCode.GDStickObjects3.length === 0 ) ? 0 :gdjs.MainSceneCode.GDStickObjects3[0].getPointX("")) - 2;
}if ( gdjs.MainSceneCode.condition0IsTrue_1.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("stickHeight")) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("rightTilePosX")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("rightTileWidth")) - (( gdjs.MainSceneCode.GDStickObjects3.length === 0 ) ? 0 :gdjs.MainSceneCode.GDStickObjects3[0].getPointX("")) - 2;
}}
gdjs.MainSceneCode.conditionTrue_1.val = true && gdjs.MainSceneCode.condition0IsTrue_1.val && gdjs.MainSceneCode.condition1IsTrue_1.val;
}
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("isStickRightPosition").setNumber(1);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isStickRightPosition")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainSceneCode.GDPlayerObjects2, gdjs.MainSceneCode.GDPlayerObjects3);

{runtimeScene.getVariables().get("isGameOver").setNumber(0);
}{for(var i = 0, len = gdjs.MainSceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPlayerObjects3[i].getBehavior("Tween").addObjectPositionXTween("PlayerRun", gdjs.evtTools.common.toNumber(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("PlayerReachedPos"))), "linear", 1000, false);
}
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isStickRightPosition")) == 0;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainSceneCode.GDPlayerObjects2 */
/* Reuse gdjs.MainSceneCode.GDStickObjects2 */
{for(var i = 0, len = gdjs.MainSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionXTween("PlayerRun", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LeftTileWidth")) + (( gdjs.MainSceneCode.GDStickObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDStickObjects2[0].getHeight()) + 16, "linear", 1000, false);
}
}{runtimeScene.getVariables().get("playerDown").setNumber(1);
}}

}


};gdjs.MainSceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isStickRightPosition")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "soundWin1.wav", 2, false, 50, 1);
}}

}


};gdjs.MainSceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Stick"), gdjs.MainSceneCode.GDStickObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDStickObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDStickObjects2[i].getAngle() >= 89 ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDStickObjects2[k] = gdjs.MainSceneCode.GDStickObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDStickObjects2.length = k;}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition1IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8264252);
}
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainSceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPlayerObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainSceneCode.GDPlayerObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
gdjs.MainSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDPlayerObjects2[i].getBehavior("Tween").hasFinished("PlayerRun") ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDPlayerObjects2[k] = gdjs.MainSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDPlayerObjects2.length = k;}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("playerDown")) == 1;
}if ( gdjs.MainSceneCode.condition1IsTrue_0.val ) {
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition2IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8268676);
}
}}
}
if (gdjs.MainSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainSceneCode.GDPlayerObjects2 */
{runtimeScene.getVariables().get("isGameOver").setNumber(1);
}{for(var i = 0, len = gdjs.MainSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionYTween("PlayerDown", 870, "linear", 100, false);
}
}{runtimeScene.getVariables().get("isAdReady").setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "lose1.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainSceneCode.GDPlayerObjects1);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDPlayerObjects1[i].getX() == gdjs.evtTools.common.toNumber(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("PlayerReachedPos"))) ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDPlayerObjects1[k] = gdjs.MainSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition1IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8270844);
}
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPlayerObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().get("isPlayerReached").setNumber(1);
}{runtimeScene.getVariables().get("score").add(1);
}
{ //Subevents
gdjs.MainSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score")) >= 10;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainSceneCode.GDScoreObjects2, gdjs.MainSceneCode.GDScoreObjects3);

{for(var i = 0, len = gdjs.MainSceneCode.GDScoreObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDScoreObjects3[i].setX(210);
}
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score")) < 9;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainSceneCode.GDScoreObjects2, gdjs.MainSceneCode.GDScoreObjects3);

{for(var i = 0, len = gdjs.MainSceneCode.GDScoreObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDScoreObjects3[i].setX(216);
}
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("isBannerAdShow")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AdBtn"), gdjs.MainSceneCode.GDAdBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MainSceneCode.GDNewObjectObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDAdBtnObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDAdBtnObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDNewObjectObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDNewObjectObjects2[i].hide(false);
}
}}

}


};gdjs.MainSceneCode.eventsList4 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.MainSceneCode.GDHighScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MainSceneCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDScoreObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score")));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHighScoreObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("hiScore")));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHighScoreObjects2[i].setX(226);
}
}
{ //Subevents
gdjs.MainSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tiles"), gdjs.MainSceneCode.GDTilesObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects2[i].getBehavior("Tween").hasFinished("GoLeft") ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects2[k] = gdjs.MainSceneCode.GDTilesObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects2.length = k;}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition1IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8277180);
}
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("canStickCreate").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tiles"), gdjs.MainSceneCode.GDTilesObjects1);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects1.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects1[i].getBehavior("Tween").hasFinished("GoLeft") ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects1[k] = gdjs.MainSceneCode.GDTilesObjects1[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects1.length = k;}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects1.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects1[i].getX() < 2 ) {
        gdjs.MainSceneCode.condition1IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects1[k] = gdjs.MainSceneCode.GDTilesObjects1[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects1.length = k;}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainSceneCode.GDTilesObjects1 */
{for(var i = 0, len = gdjs.MainSceneCode.GDTilesObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTilesObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.MainSceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isStickRightPosition")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stick"), gdjs.MainSceneCode.GDStickObjects3);
gdjs.copyArray(gdjs.MainSceneCode.GDTilesObjects2, gdjs.MainSceneCode.GDTilesObjects3);

{for(var i = 0, len = gdjs.MainSceneCode.GDStickObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDStickObjects3[i].getBehavior("Tween").addObjectPositionXTween("GoLeft", (gdjs.MainSceneCode.GDStickObjects3[i].getPointX("")) + (0 - (( gdjs.MainSceneCode.GDTilesObjects3.length === 0 ) ? 0 :gdjs.MainSceneCode.GDTilesObjects3[0].getX())), "linear", 600, true);
}
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isStickRightPosition")) == 0;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stick"), gdjs.MainSceneCode.GDStickObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDStickObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDStickObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.MainSceneCode.mapOfGDgdjs_46MainSceneCode_46GDTilesObjects2Objects = Hashtable.newFrom({"Tiles": gdjs.MainSceneCode.GDTilesObjects2});gdjs.MainSceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tiles"), gdjs.MainSceneCode.GDTilesObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects2[i].getX() == 2 ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects2[k] = gdjs.MainSceneCode.GDTilesObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects2.length = k;}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stick"), gdjs.MainSceneCode.GDStickObjects2);
/* Reuse gdjs.MainSceneCode.GDTilesObjects2 */
{for(var i = 0, len = gdjs.MainSceneCode.GDTilesObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTilesObjects2[i].getBehavior("Tween").addObjectPositionXTween("GoLeft", (gdjs.MainSceneCode.GDTilesObjects2[i].getWidth()) - (( gdjs.MainSceneCode.GDStickObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDStickObjects2[0].getPointX("")) + (2 - gdjs.evtTools.common.toNumber(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("rightTilePosX")))), "linear", 600, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tiles"), gdjs.MainSceneCode.GDTilesObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects2[i].getX() >= 158 ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects2[k] = gdjs.MainSceneCode.GDTilesObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects2.length = k;}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects2[i].getX() <= 337 ) {
        gdjs.MainSceneCode.condition1IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects2[k] = gdjs.MainSceneCode.GDTilesObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects2.length = k;}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainSceneCode.GDPlayerObjects2);
/* Reuse gdjs.MainSceneCode.GDTilesObjects2 */
{for(var i = 0, len = gdjs.MainSceneCode.GDTilesObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTilesObjects2[i].getBehavior("Tween").addObjectPositionXTween("GoLeft", 2, "linear", 600, false);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionXTween("GoLeft", 2 + (((( gdjs.MainSceneCode.GDTilesObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDTilesObjects2[0].getWidth()) - (gdjs.MainSceneCode.GDPlayerObjects2[i].getWidth())) - 2), "linear", 600, false);
}
}
{ //Subevents
gdjs.MainSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tiles"), gdjs.MainSceneCode.GDTilesObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects2[i].getX() > 400 ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects2[k] = gdjs.MainSceneCode.GDTilesObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects2.length = k;}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainSceneCode.GDTilesObjects2 */
{for(var i = 0, len = gdjs.MainSceneCode.GDTilesObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTilesObjects2[i].getBehavior("Tween").addObjectPositionXTween("GoLeft", gdjs.randomInRange(158, 337), "linear", 600, false);
}
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition0IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8283956);
}
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.MainSceneCode.GDTilesObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainSceneCode.mapOfGDgdjs_46MainSceneCode_46GDTilesObjects2Objects, 650, 485, "");
}{for(var i = 0, len = gdjs.MainSceneCode.GDTilesObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTilesObjects2[i].setWidth(gdjs.randomInRange(26, 96));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDTilesObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTilesObjects2[i].setHeight(368);
}
}{runtimeScene.getVariables().get("isPlayerReached").setNumber(0);
}{runtimeScene.getVariables().get("isStickRotate").setNumber(0);
}{runtimeScene.getVariables().get("isStickRightPosition").setNumber(0);
}}

}


{



}


};gdjs.MainSceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isPlayerReached")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainSceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.mapOfGDgdjs_46MainSceneCode_46GDStickObjects3Objects = Hashtable.newFrom({"Stick": gdjs.MainSceneCode.GDStickObjects3});gdjs.MainSceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition0IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8287748);
}
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.MainSceneCode.GDStickObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainSceneCode.mapOfGDgdjs_46MainSceneCode_46GDStickObjects3Objects, gdjs.evtTools.common.toNumber(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("LeftTileWidth"))), 486, "");
}{for(var i = 0, len = gdjs.MainSceneCode.GDStickObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDStickObjects3[i].setHeight(0);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDStickObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDStickObjects3[i].setWidth(4.5);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound.wav", 1, true, 50, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Stick"), gdjs.MainSceneCode.GDStickObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDStickObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDStickObjects2[i].setHeight(gdjs.MainSceneCode.GDStickObjects2[i].getHeight() + (10));
}
}}

}


};gdjs.MainSceneCode.eventsList9 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("canStickCreate")) == 1;
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainSceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPlayerObjects2[i].setAnimation(2);
}
}{runtimeScene.getVariables().get("keyPressed").setNumber(1);
}
{ //Subevents
gdjs.MainSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("keyPressed")) == 1;
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stick"), gdjs.MainSceneCode.GDStickObjects2);
{runtimeScene.getVariables().get("keyPressed").setNumber(0);
}{runtimeScene.getVariables().get("isStickRotate").setNumber(1);
}{runtimeScene.getVariables().get("canStickCreate").setNumber(0);
}{runtimeScene.getVariables().get("stickHeight").setNumber((( gdjs.MainSceneCode.GDStickObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDStickObjects2[0].getHeight()));
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stick"), gdjs.MainSceneCode.GDStickObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isStickRotate")) == 1;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDStickObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDStickObjects2[i].getAngle() <= 89 ) {
        gdjs.MainSceneCode.condition1IsTrue_0.val = true;
        gdjs.MainSceneCode.GDStickObjects2[k] = gdjs.MainSceneCode.GDStickObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDStickObjects2.length = k;}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainSceneCode.GDStickObjects2 */
{for(var i = 0, len = gdjs.MainSceneCode.GDStickObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDStickObjects2[i].setAngle(gdjs.MainSceneCode.GDStickObjects2[i].getAngle() + (5));
}
}}

}


{



}


{



}


};gdjs.MainSceneCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tiles"), gdjs.MainSceneCode.GDTilesObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
gdjs.MainSceneCode.condition2IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects2[i].getX() >= 158 ) {
        gdjs.MainSceneCode.condition1IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects2[k] = gdjs.MainSceneCode.GDTilesObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects2.length = k;}if ( gdjs.MainSceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects2[i].getX() <= 337 ) {
        gdjs.MainSceneCode.condition2IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects2[k] = gdjs.MainSceneCode.GDTilesObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects2.length = k;}}
}
if (gdjs.MainSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainSceneCode.GDTilesObjects2 */
{runtimeScene.getVariables().get("rightTilePosX").setNumber((( gdjs.MainSceneCode.GDTilesObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDTilesObjects2[0].getX()));
}{runtimeScene.getVariables().get("rightTileWidth").setNumber((( gdjs.MainSceneCode.GDTilesObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDTilesObjects2[0].getWidth()));
}{runtimeScene.getVariables().get("PlayerReachedPos").setNumber((( gdjs.MainSceneCode.GDTilesObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDTilesObjects2[0].getX()) + (((( gdjs.MainSceneCode.GDTilesObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDTilesObjects2[0].getWidth()) - 26) - 2));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tiles"), gdjs.MainSceneCode.GDTilesObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects2[i].getX() == 2 ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects2[k] = gdjs.MainSceneCode.GDTilesObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects2.length = k;}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainSceneCode.GDTilesObjects2 */
{runtimeScene.getVariables().get("LeftTilePos").setNumber((( gdjs.MainSceneCode.GDTilesObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDTilesObjects2[0].getX()));
}{runtimeScene.getVariables().get("LeftTileWidth").setNumber((( gdjs.MainSceneCode.GDTilesObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDTilesObjects2[0].getWidth()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tiles"), gdjs.MainSceneCode.GDTilesObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDTilesObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDTilesObjects2[i].getX() > 400 ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDTilesObjects2[k] = gdjs.MainSceneCode.GDTilesObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDTilesObjects2.length = k;}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainSceneCode.GDTilesObjects2 */
{runtimeScene.getVariables().get("OutSideScreenPos").setNumber((( gdjs.MainSceneCode.GDTilesObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDTilesObjects2[0].getX()));
}}

}


{



}


};gdjs.MainSceneCode.eventsList11 = function(runtimeScene) {

{



}


};gdjs.MainSceneCode.eventsList12 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Restart")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Backgrounds"), gdjs.MainSceneCode.GDBackgroundsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainSceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDBackgroundsObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDBackgroundsObjects2[i].setAnimation(gdjs.randomInRange(0, 3));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPlayerObjects2[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("PlayerReachedPos")),441);
}
}{runtimeScene.getVariables().get("playerDown").setNumber(0);
}{runtimeScene.getVariables().get("isGameOver").setNumber(0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOverPanel");
}{runtimeScene.getVariables().get("score").setNumber(-(1));
}{runtimeScene.getVariables().get("Restart").setNumber(0);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Resume")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Backgrounds"), gdjs.MainSceneCode.GDBackgroundsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainSceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDBackgroundsObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDBackgroundsObjects1[i].setAnimation(gdjs.randomInRange(0, 3));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("PlayerReachedPos")),441);
}
}{runtimeScene.getVariables().get("playerDown").setNumber(0);
}{runtimeScene.getVariables().get("isGameOver").setNumber(0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOverPanel");
}{runtimeScene.getVariables().get("Resume").setNumber(0);
}{runtimeScene.getVariables().get("score").sub(1);
}}

}


};gdjs.MainSceneCode.eventsList13 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isAdReady")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AdsButton"), gdjs.MainSceneCode.GDAdsButtonObjects4);
{runtimeScene.getVariables().get("adBtnSelect").setNumber(1);
}{for(var i = 0, len = gdjs.MainSceneCode.GDAdsButtonObjects4.length ;i < len;++i) {
    gdjs.MainSceneCode.GDAdsButtonObjects4[i].setColor("235;243;150");
}
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isAdReady")) == 0;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AdsButton"), gdjs.MainSceneCode.GDAdsButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.MainSceneCode.GDRestartButtonObjects3);
{runtimeScene.getVariables().get("restartBtnSelect").setNumber(1);
}{for(var i = 0, len = gdjs.MainSceneCode.GDAdsButtonObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDAdsButtonObjects3[i].setColor("74;74;74");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDRestartButtonObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRestartButtonObjects3[i].setColor("235;243;150");
}
}}

}


};gdjs.MainSceneCode.eventsList14 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("adBtnSelect")) == 1;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isKeyPressed")) == 0;
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AdsButton"), gdjs.MainSceneCode.GDAdsButtonObjects4);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.MainSceneCode.GDRestartButtonObjects4);
{runtimeScene.getVariables().get("restartBtnSelect").setNumber(1);
}{runtimeScene.getVariables().get("adBtnSelect").setNumber(0);
}{runtimeScene.getVariables().get("isKeyPressed").setNumber(1);
}{for(var i = 0, len = gdjs.MainSceneCode.GDRestartButtonObjects4.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRestartButtonObjects4[i].setColor("235;243;150");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDAdsButtonObjects4.length ;i < len;++i) {
    gdjs.MainSceneCode.GDAdsButtonObjects4[i].setColor("255;255;255");
}
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("restartBtnSelect")) == 1;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isKeyPressed")) == 0;
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainSceneCode.GDBackButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.MainSceneCode.GDRestartButtonObjects3);
{runtimeScene.getVariables().get("restartBtnSelect").setNumber(0);
}{runtimeScene.getVariables().get("exitBtnSelect").setNumber(1);
}{runtimeScene.getVariables().get("isKeyPressed").setNumber(1);
}{for(var i = 0, len = gdjs.MainSceneCode.GDRestartButtonObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRestartButtonObjects3[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDBackButtonObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDBackButtonObjects3[i].setColor("235;243;150");
}
}}

}


};gdjs.MainSceneCode.eventsList15 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("exitBtnSelect")) == 1;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isKeyPressed")) == 0;
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainSceneCode.GDBackButtonObjects4);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.MainSceneCode.GDRestartButtonObjects4);
{runtimeScene.getVariables().get("restartBtnSelect").setNumber(1);
}{runtimeScene.getVariables().get("exitBtnSelect").setNumber(0);
}{runtimeScene.getVariables().get("isKeyPressed").setNumber(1);
}{for(var i = 0, len = gdjs.MainSceneCode.GDBackButtonObjects4.length ;i < len;++i) {
    gdjs.MainSceneCode.GDBackButtonObjects4[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDRestartButtonObjects4.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRestartButtonObjects4[i].setColor("235;243;150");
}
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
gdjs.MainSceneCode.condition2IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("restartBtnSelect")) == 1;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isKeyPressed")) == 0;
}if ( gdjs.MainSceneCode.condition1IsTrue_0.val ) {
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition2IsTrue_0;
gdjs.MainSceneCode.condition0IsTrue_1.val = false;
gdjs.MainSceneCode.condition1IsTrue_1.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isAdReady")) == 1;
if( gdjs.MainSceneCode.condition0IsTrue_1.val ) {
    gdjs.MainSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.MainSceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("apples")) >= 10;
if( gdjs.MainSceneCode.condition1IsTrue_1.val ) {
    gdjs.MainSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
if (gdjs.MainSceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AdsButton"), gdjs.MainSceneCode.GDAdsButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.MainSceneCode.GDRestartButtonObjects3);
{runtimeScene.getVariables().get("restartBtnSelect").setNumber(0);
}{runtimeScene.getVariables().get("adBtnSelect").setNumber(1);
}{runtimeScene.getVariables().get("isKeyPressed").setNumber(1);
}{for(var i = 0, len = gdjs.MainSceneCode.GDAdsButtonObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDAdsButtonObjects3[i].setColor("235;243;150");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDRestartButtonObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRestartButtonObjects3[i].setColor("255;255;255");
}
}}

}


};gdjs.MainSceneCode.eventsList16 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("adBtnSelect")) == 1;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isKeyPressed")) == 0;
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Resume").setNumber(1);
}{runtimeScene.getVariables().get("isKeyPressed").setNumber(1);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("restartBtnSelect")) == 1;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isKeyPressed")) == 0;
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.MainSceneCode.GDRestartButtonObjects3);
{runtimeScene.getVariables().get("Restart").setNumber(1);
}{for(var i = 0, len = gdjs.MainSceneCode.GDRestartButtonObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRestartButtonObjects3[i].setColor("255;255;255");
}
}{runtimeScene.getVariables().get("isKeyPressed").setNumber(1);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("exitBtnSelect")) == 1;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isKeyPressed")) == 0;
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuScene", false);
}{runtimeScene.getVariables().get("isKeyPressed").setNumber(1);
}}

}


{


{
}

}


};gdjs.MainSceneCode.eventsList17 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("apples")) < 10;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition1IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8305300);
}
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.MainSceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("apples")) >= 10;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition1IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8308036);
}
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AdsButton"), gdjs.MainSceneCode.GDAdsButtonObjects3);
{for(var i = 0, len = gdjs.MainSceneCode.GDAdsButtonObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDAdsButtonObjects3[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDAdsButtonObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDAdsButtonObjects3[i].setColor("235;243;150");
}
}{runtimeScene.getVariables().get("adBtnSelect").setNumber(1);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isDownKeyPressed")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("isDownKeyPressed").setNumber(0);
}
{ //Subevents
gdjs.MainSceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isUpKeyPressed")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("isUpKeyPressed").setNumber(0);
}
{ //Subevents
gdjs.MainSceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("isSpaceKeyPressed").setNumber(1);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isSpaceKeyPressed")) == 1;
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition1IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8320084);
}
}}
if (gdjs.MainSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("isSpaceKeyPressed").setNumber(0);
}
{ //Subevents
gdjs.MainSceneCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList18 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isGameOver")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOverPanel");
}
{ //Subevents
gdjs.MainSceneCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("isKeyPressed").setNumber(0);
}}

}


};gdjs.MainSceneCode.eventsList19 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("isDownKeyPressed").setNumber(1);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("isUpKeyPressed").setNumber(1);
}}

}


{


{
}

}


};gdjs.MainSceneCode.eventsList20 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("score", "scoreGroup");
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("score", "scoreGroup", runtimeScene, runtimeScene.getVariables().get("hiScore"));
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("hiScore"));
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("score", "scoreGroup", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MainSceneCode.GDScoreObjects1);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainSceneCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDScoreObjects1[i].isOnLayer("GameOverPanel") ) {
        gdjs.MainSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainSceneCode.GDScoreObjects1[k] = gdjs.MainSceneCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDScoreObjects1.length = k;}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainSceneCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.MainSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDScoreObjects1[i].setX(226);
}
}}

}


};gdjs.MainSceneCode.eventsList21 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isGameOver")) == 1;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainSceneCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList22 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AdBtn"), gdjs.MainSceneCode.GDAdBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Backgrounds"), gdjs.MainSceneCode.GDBackgroundsObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MainSceneCode.GDNewObjectObjects1);
{runtimeScene.getVariables().get("canStickCreate").setNumber(1);
}{runtimeScene.getVariables().get("isGameOver").setNumber(0);
}{for(var i = 0, len = gdjs.MainSceneCode.GDBackgroundsObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDBackgroundsObjects1[i].setAnimation(gdjs.randomInRange(0, 3));
}
}{runtimeScene.getVariables().get("apples").setNumber(0);
}{runtimeScene.getVariables().get("score").setNumber(0);
}{for(var i = 0, len = gdjs.MainSceneCode.GDAdBtnObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDAdBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDNewObjectObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Tiles"), gdjs.MainSceneCode.GDTilesObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}{gdjs.evtTools.window.setMargins(runtimeScene, 40, 0, 0, 0);
}{for(var i = 0, len = gdjs.MainSceneCode.GDTilesObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTilesObjects1[i].setZOrder(6);
}
}}

}


{


gdjs.MainSceneCode.eventsList2(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList4(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList7(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList9(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList10(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList11(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList12(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList18(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList19(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList21(runtimeScene);
}


{


{
}

}


};

gdjs.MainSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainSceneCode.GDStickObjects1.length = 0;
gdjs.MainSceneCode.GDStickObjects2.length = 0;
gdjs.MainSceneCode.GDStickObjects3.length = 0;
gdjs.MainSceneCode.GDStickObjects4.length = 0;
gdjs.MainSceneCode.GDStickObjects5.length = 0;
gdjs.MainSceneCode.GDScoreObjects1.length = 0;
gdjs.MainSceneCode.GDScoreObjects2.length = 0;
gdjs.MainSceneCode.GDScoreObjects3.length = 0;
gdjs.MainSceneCode.GDScoreObjects4.length = 0;
gdjs.MainSceneCode.GDScoreObjects5.length = 0;
gdjs.MainSceneCode.GDTilesObjects1.length = 0;
gdjs.MainSceneCode.GDTilesObjects2.length = 0;
gdjs.MainSceneCode.GDTilesObjects3.length = 0;
gdjs.MainSceneCode.GDTilesObjects4.length = 0;
gdjs.MainSceneCode.GDTilesObjects5.length = 0;
gdjs.MainSceneCode.GDPlayerObjects1.length = 0;
gdjs.MainSceneCode.GDPlayerObjects2.length = 0;
gdjs.MainSceneCode.GDPlayerObjects3.length = 0;
gdjs.MainSceneCode.GDPlayerObjects4.length = 0;
gdjs.MainSceneCode.GDPlayerObjects5.length = 0;
gdjs.MainSceneCode.GDMainMenuObjects1.length = 0;
gdjs.MainSceneCode.GDMainMenuObjects2.length = 0;
gdjs.MainSceneCode.GDMainMenuObjects3.length = 0;
gdjs.MainSceneCode.GDMainMenuObjects4.length = 0;
gdjs.MainSceneCode.GDMainMenuObjects5.length = 0;
gdjs.MainSceneCode.GDAppleLogoObjects1.length = 0;
gdjs.MainSceneCode.GDAppleLogoObjects2.length = 0;
gdjs.MainSceneCode.GDAppleLogoObjects3.length = 0;
gdjs.MainSceneCode.GDAppleLogoObjects4.length = 0;
gdjs.MainSceneCode.GDAppleLogoObjects5.length = 0;
gdjs.MainSceneCode.GDAppleScoreTextObjects1.length = 0;
gdjs.MainSceneCode.GDAppleScoreTextObjects2.length = 0;
gdjs.MainSceneCode.GDAppleScoreTextObjects3.length = 0;
gdjs.MainSceneCode.GDAppleScoreTextObjects4.length = 0;
gdjs.MainSceneCode.GDAppleScoreTextObjects5.length = 0;
gdjs.MainSceneCode.GDBackgroundsObjects1.length = 0;
gdjs.MainSceneCode.GDBackgroundsObjects2.length = 0;
gdjs.MainSceneCode.GDBackgroundsObjects3.length = 0;
gdjs.MainSceneCode.GDBackgroundsObjects4.length = 0;
gdjs.MainSceneCode.GDBackgroundsObjects5.length = 0;
gdjs.MainSceneCode.GDGameOverScreenObjects1.length = 0;
gdjs.MainSceneCode.GDGameOverScreenObjects2.length = 0;
gdjs.MainSceneCode.GDGameOverScreenObjects3.length = 0;
gdjs.MainSceneCode.GDGameOverScreenObjects4.length = 0;
gdjs.MainSceneCode.GDGameOverScreenObjects5.length = 0;
gdjs.MainSceneCode.GDAdsButtonObjects1.length = 0;
gdjs.MainSceneCode.GDAdsButtonObjects2.length = 0;
gdjs.MainSceneCode.GDAdsButtonObjects3.length = 0;
gdjs.MainSceneCode.GDAdsButtonObjects4.length = 0;
gdjs.MainSceneCode.GDAdsButtonObjects5.length = 0;
gdjs.MainSceneCode.GDRestartButtonObjects1.length = 0;
gdjs.MainSceneCode.GDRestartButtonObjects2.length = 0;
gdjs.MainSceneCode.GDRestartButtonObjects3.length = 0;
gdjs.MainSceneCode.GDRestartButtonObjects4.length = 0;
gdjs.MainSceneCode.GDRestartButtonObjects5.length = 0;
gdjs.MainSceneCode.GDBackButtonObjects1.length = 0;
gdjs.MainSceneCode.GDBackButtonObjects2.length = 0;
gdjs.MainSceneCode.GDBackButtonObjects3.length = 0;
gdjs.MainSceneCode.GDBackButtonObjects4.length = 0;
gdjs.MainSceneCode.GDBackButtonObjects5.length = 0;
gdjs.MainSceneCode.GDPanelObjects1.length = 0;
gdjs.MainSceneCode.GDPanelObjects2.length = 0;
gdjs.MainSceneCode.GDPanelObjects3.length = 0;
gdjs.MainSceneCode.GDPanelObjects4.length = 0;
gdjs.MainSceneCode.GDPanelObjects5.length = 0;
gdjs.MainSceneCode.GDHighScoreObjects1.length = 0;
gdjs.MainSceneCode.GDHighScoreObjects2.length = 0;
gdjs.MainSceneCode.GDHighScoreObjects3.length = 0;
gdjs.MainSceneCode.GDHighScoreObjects4.length = 0;
gdjs.MainSceneCode.GDHighScoreObjects5.length = 0;
gdjs.MainSceneCode.GDscorePanelObjects1.length = 0;
gdjs.MainSceneCode.GDscorePanelObjects2.length = 0;
gdjs.MainSceneCode.GDscorePanelObjects3.length = 0;
gdjs.MainSceneCode.GDscorePanelObjects4.length = 0;
gdjs.MainSceneCode.GDscorePanelObjects5.length = 0;
gdjs.MainSceneCode.GDAdBtnObjects1.length = 0;
gdjs.MainSceneCode.GDAdBtnObjects2.length = 0;
gdjs.MainSceneCode.GDAdBtnObjects3.length = 0;
gdjs.MainSceneCode.GDAdBtnObjects4.length = 0;
gdjs.MainSceneCode.GDAdBtnObjects5.length = 0;
gdjs.MainSceneCode.GDNewObjectObjects1.length = 0;
gdjs.MainSceneCode.GDNewObjectObjects2.length = 0;
gdjs.MainSceneCode.GDNewObjectObjects3.length = 0;
gdjs.MainSceneCode.GDNewObjectObjects4.length = 0;
gdjs.MainSceneCode.GDNewObjectObjects5.length = 0;

gdjs.MainSceneCode.eventsList22(runtimeScene);
return;

}

gdjs['MainSceneCode'] = gdjs.MainSceneCode;
