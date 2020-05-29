$(document).ready(function(){
   //建立currentQuiz
   let currentQuiz=0;
   let quiznumber=1;
   $("[type=range]").show();
   $("LABEL").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);
   
   $("[type=range]").change(function(){
      $("LABEL").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);
   });


     //顯示題目
     $("#question").text(quiznumber+"."+questions[currentQuiz]);
     
   $("#startButton").click(function(){
      //顯示題目
     $("#question").text(quiznumber+"."+questions[currentQuiz]);
      if(quiznumber==30)
     {
          answers[currentQuiz]=parseInt( $("[type=range]").val());
          console.log(answers[currentQuiz]);
         $("[type=range]").hide();
         $("[type=range]").empty();
         $("LABEL").empty();
         allScores[0].Score=answers[4]+answers[9]+answers[13]+answers[17]+answers[23]+answers[29];
         allScores[1].Score=answers[2]+answers[5]+answers[12]+answers[19]+answers[21]+answers[28];
         allScores[2].Score=answers[1]+answers[7]+answers[14]+answers[16]+answers[24]+answers[27];
         allScores[3].Score=answers[0]+answers[6]+answers[10]+answers[15]+answers[20]+answers[25];
         allScores[4].Score=answers[3]+answers[8]+answers[11]+answers[18]+answers[22]+answers[26];
         allScores.sort(function (a, b) {
            return b.Score - a.Score;
          });

          for(let i=0;i<allScores.length;i++)
          {
            $("LABEL").append(allScores[i].Char+": "+allScores[i].Score+"<br>");
          }
          $("#question").empty();
     }
     if(quiznumber==31)
     {
      $("#question").empty();
      currentQuiz=-1;
      quiznumber=0;
      for(let x=0;x<answers.length;x++)
      {
         answers[x]=0;
      }
      $("LABEL").empty();
      $("[type=range]").show();
      $("LABEL").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);
      
     }
     if(quiznumber<30)
     {
         //存分數
         answers[currentQuiz]=parseInt( $("[type=range]").val());
         // console.log(answers[currentQuiz]);
 
      
        //清除上個題目
        $("#question").empty();
 
          currentQuiz++;//題目++
          quiznumber++;//題號++
       
         //顯示題目
        $("#question").text(quiznumber+"."+questions[currentQuiz]);
     }
     else
     quiznumber++;//題號++
   });
});

