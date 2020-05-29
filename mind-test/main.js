$(document).ready(function(){
   //建立currentQuiz
   let currentQuiz=null;
   $("#startButton").click(function(){
      if(currentQuiz==null){
         //設定目前作答到第0題
         currentQuiz=0;
        
         //清空選項區域
         $("#question").empty();
         $("#options").empty();

         //顯示題目
         $("#question").text(questions[0].question);
         
         //加入選項
         for(let x=0;x<questions[0].answers.length;x++)
         {
            $("#options").append(
               "<input name='options' type='radio' value="+
               x+">"+
               "<label>"+questions[0].answers[x][0]+
               "</label><br><br>"
            );
         }

          //將按鈕文字換成下一個
         $("#startButton").attr("value","Next");
      }
      else{//如果已經開始作答就從這裡繼續
         //尋訪每個選項是否有被選取
         $.each(
            $(":radio"),function(i,val){
               if(val.checked){
                  //是否已產生最終結果(A~D)
                  if(isNaN(questions[currentQuiz].answers[i][1])){
                     //最終結果
                     let finalresult =questions[currentQuiz].answers[i][1];

                     //顯示最終成果的標題
                     $("#question").text(finalAnswers[finalresult][0]);

                     //清空選項區域
                     $("#options").empty();

                     //顯示最終結果內容
                     $("#options").append(finalAnswers[finalresult][1]+"<br><br>");

                     //將目前做到第幾題的變數清空
                     currentQuiz=null;

                     //修改按鈕為重新開始
                     $("#startButton").attr("value","Restart");

                  }
                  else{
                     //指定下一個要顯示的題目，原始資料是從1開始，所以-1
                     currentQuiz=questions[currentQuiz].answers[i][1]-1;

                     //顯示新的題目
                     $("#question").text(questions[currentQuiz].question);

                     //清空舊的選項內容
                     $("#options").empty();

                     //顯示新的選項內容
                     for(x=0;x<questions[currentQuiz].answers.length;x++){
                        $("#options").append(
                           "<input name='options' type='radio' value="+
                           x+">"+
                           "<label>"+questions[currentQuiz].answers[x][0]+
                           "</label><br><br>"
                        );
                     }
                  }
                  //完成並離開迴圈
                  return false;

               }
            }
         );

      }
      
   });
});

