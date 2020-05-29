var player;//YouTube 撥放器
var currentPlay=0;//目前播到第幾首

//當YouTube API準備好時
function onYouTubeIframeAPIReady(){
   player= new YT.Player("player",
   {
      height:"390",
      width:"640",
      videoId:playlist[currentPlay],
      playerVars:{
         "autoplay":0,
         "controls":0,
         "start":playTime[currentPlay][0],
         "end":playTime[currentPlay][1],
         "showinfo":0,
         "rel":0,
         "iv_load_policy":3
      },
      events:{
         "onReady":onPlayerReady,
         "onStateChange":onPlayerStateChange
      }
   });
}

//當YouTube撥放器準備好時
function onPlayerReady(event){
   $("#playButton").click(function(){
      $("h2").text(player.getVideoData().title);
      player.playVideo();
   });
}

//當播放器撥放狀態改變時
function onPlayerStateChange(event){
   //當目前撥放秒數與預期撥放結束想數相同時去撥下一首
   if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
      //撥下一首
      if(currentPlay<playlist.length-1){
         currentPlay++;
         player.loadVideoById({
            "videoId":playlist[currentPlay],
            "startSeconds":playTime[currentPlay][0],
            "endSeconds":playTime[currentPlay][1],
            "suggestedQuality":"large"
         });
      }else{//撥到最後一首時，回到第一首並結束
         currentPlay=0;
         player.cueVideoById({
            "videoId":playlist[currentPlay],
            "startSeconds":playTime[currentPlay][0],
            "endSeconds":playTime[currentPlay][1],
            "suggestedQuality":"large"
         });
      }//影片開始抓取影像標題來顯示
   }
   if(player.getVideoLoadedFraction()>0)
   {
      $("h2").text(player.getVideoData().title);
   }

}