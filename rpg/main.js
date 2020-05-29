//mapArray:決定地圖中每個格子的元素
//ctx :HTML Canvas使用
//currentImgMainX ,currentImgMainY:決定主角所在座標
let mapArray,ctx,currentImgMainX ,currentImgMainY;
let imgMountain, imgMain,imgEnemy;
$(document).ready(function(){
   //0:可走 1:障礙 2:終點 3:敵人
   mapArray=[0,1,1,0,0,0,3,1,2];
   ctx=$("#myCanvas")[0].getContext("2d");

   imgMain=new Image();
   imgMain.src="rpg/images/spriteSheet.png";
   currentImgMainX=0;
   currentImgMainY=0;

   imgMain.onload=function(){
      ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
   };
   
   //放障礙物與敵人
   imgMountain=new Image();
   imgMountain.src="rpg/images/material.png";
   imgEnemy=new Image();
   imgEnemy.src="rpg/images/Enemy.png";

   imgMountain.onload=function(){
      imgEnemy.onload=function(){
        for(let x in mapArray){
           if(mapArray[x]==1){
            ctx.drawImage(imgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
           }
           else if(mapArray[x]==3){
              ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
           }
        }
      }
   };
});

$(document).keydown(function(event){
    
      let targetImgMainX, targetImgMainY, targetBlock , cutImgPositionX;
      event.preventDefault();
      switch(event.originalEvent.code)
      {
         case "ArrowLeft":
            targetImgMainX=currentImgMainX-200;
            targetImgMainY=currentImgMainY;
            cutImgPositionX=175;
            break;
         case "ArrowUp":
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY-200;
            cutImgPositionX=355;
            break;
         case "ArrowRight":
            targetImgMainX=currentImgMainX+200;
            targetImgMainY=currentImgMainY;
            cutImgPositionX=540;
            break;
         case "ArrowDown":
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY+200;
            cutImgPositionX=0;
            break;
         default:
            return;
      }
      //邊界內
      if(targetImgMainX<=400&&targetImgMainX>=0&&targetImgMainY<=400&&targetImgMainY>=0){
         targetBlock =targetImgMainX/200+targetImgMainY/200*3;
      }
      else{//出界
         targetBlock=-1;
      }

      //清除主角原本位置
      ctx.clearRect(currentImgMainX,currentImgMainY,200,200);

      if(targetBlock==-1||mapArray[targetBlock]==1||mapArray[targetBlock]==3)
      {

      }
      else{
         $("#talkBox").empty();
         currentImgMainX=targetImgMainX;
         currentImgMainY=targetImgMainY;
      }

      //新位置畫上主角
      ctx.drawImage(imgMain,cutImgPositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);

      //對應用文字顯示狀態
      switch(mapArray[targetBlock])
      {
         case undefined:
            $("#talkBox").text("邊界");
            break;
         case 1:
            $("#talkBox").text("有山");
            break;
         case 2:
            $("#talkBox").text("抵達終點");
            break;
         case 3:
            $("#talkBox").text("哈囉");
            break;
      }

      
});

