var buttonColours=["red", "blue", "green", "yellow"]
var gamePattern=[];
var userClickedPattern=[];
var keyboardKeyPressed=false;
var level;
var start;

function playSound(name)
{
   var audio=new Audio("sounds/"+name+".mp3");
   audio.play();
}
function animatePress(currentColour)
{
  $("#"+currentColour).addClass("pressed");
  setTimeout(() => {
     $("#"+currentColour).removeClass("pressed");
     
  }, 100);
}
function nextSequence()
{  level++;
   $("#level-title").text("Level "+level);
   var randomNumber=Math.floor(Math.random()*4);
//    console.log(randomNumber);
   var randomChosenColour=buttonColours[randomNumber];
//console.log(randomChosenColour);
   gamePattern.push(randomChosenColour);
   console.log(gamePattern)
   
   $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
   start=0;

}

function startOver()
{
   keyboardKeyPressed=false;
        
   gamePattern=[];
   level=0;
}
$(".btn").click(function()
{  
   var userChosenColour=$(this).attr("id");
   // console.log(userChosenColour);
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   
      if(gamePattern[start]!=userChosenColour)
      {
         startOver();
         $("#level-title").text("Game Over,Press Any Key to Restart");
         var audioWrong=new Audio("sounds/wrong.mp3");
         audioWrong.play();
         $("body").addClass("game-over");
         setTimeout(() => {
            $("body").removeClass("game-over");
            
         }, 200);

         
      }
      start++;
   
   if(start===gamePattern.length)
   {  
      
      setTimeout(function(){
         nextSequence() ;
      },2000);
      
   }
   
   
   // console.log(userClickedPattern);
})
    

    


   $(document).keydown(function(){
      if(keyboardKeyPressed===false)
      {
      level=0;
      keyboardKeyPressed=true;
      setTimeout(nextSequence,1000);
 
      
      // console.log(keyboardKeyPressed)
      }
     
   })





