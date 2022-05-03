
var subbutton = document.getElementById('sub');
var nextbutton = document.getElementById('next');
var exitbuttton = document.getElementById('exit');
var questions;
var newplayer;
var totalscore=0;
var qgw=0;
var count = 0;
var qarr=[];
var aarr=[];
var parr=[];
var gamescore=0;
var wrong=0;
var x = 0;


exitbuttton.addEventListener("click",function(){pageboth();});


subbutton.addEventListener("click",function(){


var firstn = document.getElementById('fname').value;
var lastn = document.getElementById('lname').value;
var age = document.getElementById('age').value;
var category = document.getElementById('category');
var incategory = category.options[category.selectedIndex].text;// got this from https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript



      newplayer = new Player(firstn,lastn,age,incategory);
      
    

     if(newplayer.category=='Food'){

                 Foodquestions();

     }

     else if(newplayer.category=='Politics'){


            Politicsquestions();

        
     }

     else if(newplayer.category=='Geography'){


            Geographyquestions();
            
        
     }

    else if(newplayer.category=='Celebrations'){



            Celebrationsquestions();
           
       


     }

     


      questions = new Questions(aarr,qarr,parr);
      x=questions.question.length;

     scoredisplay();
     gamedisplay();
   

      for(var i=0;i<questions.question.length;i++){

  totalscore+=questions.points[i];

}



 



     });







nextbutton.addEventListener("click",function(){

x--;


if(count<questions.question.length && wrong<3){


 check();

}



});




var Player = function(fname, lname, age,category){//player object blueprint

this.fname= fname;
this.lname= lname;
this.age= age;
this.category= category;


}//end of player object

var Questions = function(answer,question,points){//question object blueprint 

    
    


this.answer = answer;
this.question= question;
this.points= points;


}//end of question object



 function scoredisplay(){// displays score and wrong counter

  var score = document.getElementById('score');
  score.innerHTML = 'Score: '+gamescore;

  var wrongans = document.getElementById('wrong');
  wrongans.innerHTML = 'Wrong: '+wrong;

}// end of score display function


 function gamedisplay(){//sets up game display


  var dp = document.getElementById('dis');
  var dp1 = document.getElementById('dis1');
  var dp2 = document.getElementById('dis2');
  var dp3 = document.getElementById('dis3');
  var dp4 = document.getElementById('dis4');
  var firstn = document.getElementById('fname');
  var lastn = document.getElementById('lname');
  var age = document.getElementById('age');
  var category = document.getElementById('category');

  
  dp.setAttribute('class','dp');
  dp1.setAttribute('class','dp');
  dp2.setAttribute('class','dp');
  dp3.setAttribute('class','dp');
  dp4.setAttribute('class','dp');
  firstn.setAttribute('class','dp');
  lastn.setAttribute('class','dp');
  age.setAttribute('class','dp');
  category.setAttribute('class','dp');
  subbutton.setAttribute('class','dp');



  var arrows = document.getElementById('arrows');
  arrows.innerHTML = '<img class="arrow"  src="arrow.gif"><img class="arrow"  src="arrow.gif"><img class="arrow1"  src="arrow.gif"><img class="arrow1"  src="arrow.gif"><img class="arrow2"  src="arrow.gif"><img class="arrow2"  src="arrow.gif">';

  var game = document.getElementById('area');
  game.innerHTML ='<textarea disabled id="Textarea" class="tarea"></textarea>'+'<br><label class="af" for="answer">Answer:</label><input class="af"type="text" id="ans" name="ans"><br><br>';
  nextbutton.setAttribute("class","nb");
  exitbuttton.setAttribute("class","eb");
  exitbuttton.scrollIntoView(); 

  var tarea = document.getElementById("Textarea"); 
  tarea.innerHTML= questions.question[0];
  

  var name = document.getElementById("name");
  name.innerHTML ='Name: '+newplayer.fname+"   "+newplayer.lname+"<br>Age: "+newplayer.age;

 
    
}// end of game display function


function check(){


var pans = document.getElementById('ans').value;

   if(pans.toLowerCase()==questions.answer[count].toLowerCase()){//check to see if answer is correct

    
       greencorrect();


      if(gamescore<totalscore&&count<=questions.question.length-1){gamescore +=questions.points[count];}//adds to points to score if answer correct



      if(count<questions.question.length-1){count++;}


    var tarea = document.getElementById("Textarea");
    pans= " ";
    tarea.innerHTML= questions.question[count];

    if(wrong>0){wrong=0;}//resets the wrong count to 0 if answer is correct
     
    scoredisplay(); 

    if(count==questions.question.length-1 && gamescore==totalscore){pagewin();}//if player answers all question correctly
    else if(x==0&&count==questions.question.length-1 && gamescore<totalscore && qgw>0){pageboth();}//if player answers all questions but not all correctly

}//end of if



else{//if the answer is wrong

    redcorrect();

if(count<=questions.question.length-1 && wrong<3){// if player gets question wrong

    qgw++;
    wrong++;
if(wrong>=3){pagefail();}//player fails if wrong counter is 3

else if(x==0&&count==questions.question.length-1 && gamescore<totalscore && qgw>0){pageboth();}////if player answers all questions but not all correctly



}
if(count<questions.question.length-1){count++;}//end if

var tarea = document.getElementById("Textarea");
    pans= " ";
    tarea.innerHTML= questions.question[count];

scoredisplay();


}//end else

}//end check function


 function Foodquestions(){//creates food question, answers and points array

qarr[0]='What is the name of the dish that is served with curried channa, cucumber, various sauces and two fried dough?';
         qarr[1]='What is the name of the local dish that requires pumkin, okra, scotch bonnet pepper, dasheen bush and coconut milk?';
           qarr[2]='What is another known name for Paratha Roti?';
             qarr[3]='Spit peas cooked down with various spices and seasonings until thick and is commonly eaten with rice is called?';
               qarr[4]='Dhalpuri Roti is one of the most sort after dishes in T&T but what is it predominantly stuffed with?';
          
       aarr[0]= 'Doubles';
          aarr[1]= 'Calaloo';
            aarr[2]= 'Buss up shot';
               aarr[3]= 'Dhal';
                   aarr[4]= 'Split peas'; 


       parr[0]= 2;   
          parr[1]= 4;
             parr[2]= 6;
                parr[3]= 4;
                   parr[4]= 4;  

}//end foodquestions function


function Politicsquestions(){//creates politics question, answers and points array



    qarr[0]= 'Who was Trinidad\'s first prime minister?';
              qarr[1]= 'At what year was the P.N.M founded?';
                 qarr[2]= 'What does the U.N.C stands for?';
                    qarr[3]= 'Who founded the U.N.C?';
                        qarr[4]= 'Mr. Arthur Napoleon Raymond Robinson was T&T third prime minister and third President true/false?';

          
       aarr[0]= 'Dr Eric Williams';
          aarr[1]= '1955';
            aarr[2]= 'United National Congress';
               aarr[3]= 'Basdeo Panday';
                   aarr[4]= 'True'; 


       parr[0]= 2;
          parr[1]= 6;
              parr[2]= 4;
                 parr[3]= 5;
                    parr[4]= 3;

}// end politics question function



function Geographyquestions(){//creates geography question, answers and points array



qarr[0]= 'The capital of Trinidad and Tobago is?';
              qarr[1]= 'Which island(Trinidad/Tobago) is Maracas Beach located on?';
                 qarr[2]= 'What is the tallest mountain in Trinidad and Tobago?';
                    qarr[3]= 'Tobago is which direction from Trinidad?';
                        qarr[4]= 'How many boroughs are there in Trinidad?';
                        
          
       aarr[0]= 'Port of Spain';
          aarr[1]= 'Trinidad';
            aarr[2]= 'El Cerro Del Airpo';
               aarr[3]= 'North East';
                   aarr[4]= '3'; 

       parr[0]= 2;
          parr[1]= 2;
              parr[2]= 6;
                 parr[3]= 2;
                    parr[4]= 8;      


}// end geography question function


function Celebrationsquestions(){//creates celebration question, answers and points array



    qarr[0]= 'What month is Tobago\'s blue food festival celebrated?';
              qarr[1]= 'Name the festival of Trinidad and Tobago that only falls on Monday and Tuesday?';
                 qarr[2]= 'T&T celebrates its independence on __st of August?';
                    qarr[3]= 'Name festival that is held in August in honour of the remaining Caribs on the islands?';
                        qarr[4]= 'The Hindu Festival of Lights is called?';
                        
          
       aarr[0]= 'October';
          aarr[1]= 'Carnival';
            aarr[2]= '31';
               aarr[3]= 'Santa Rosa';
                   aarr[4]= 'Divali'; 

   
       parr[0]= 5;
          parr[1]= 2;
              parr[2]= 3;
                 parr[3]= 6;
                    parr[4]= 4;  

}// end celebration question function


function greencorrect(){//makes backgroung green if question is right

var back = document.getElementById('back');

    setTimeout(() =>{

back.setAttribute('style','background-image: url(\'green2.jpg\')');

    
     setTimeout(() =>{

back.setAttribute('style','background-image: url(\'trini2.jpg\')');

    },550);

    },550);


      
}// end green correct function

function redcorrect(){//makes backgroung red if question is wrong


   var back = document.getElementById('back');

    setTimeout(() =>{

back.setAttribute('style','background-image: url(\'red2.jpg\')');

    
     setTimeout(() =>{

back.setAttribute('style','background-image: url(\'trini2.jpg\')');

    },550);

    },550);


}// end red correct function

function pagewin(){//opens a win page

//got the window open code here https://stackoverflow.com/questions/40080668/how-to-return-data-from-child-to-parent-window-using-javascript-without-using-se

var myWindow = window.open("final2.html", "_self", "width=1200,height=200");
myWindow.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>TriniTing</title><link rel="stylesheet" type="text/css" href="final2.css"></head><body id="back" style="background-image: url(\'trini2.jpg\')"><h1>Congratulations You Won</h1><br><br><h2><img class="win"  src="win.jpg"></h2>');
myWindow.document.write('<h3>Name: '+newplayer.fname+'&nbsp;'+newplayer.lname+'<br>Your Final Score: '+gamescore+'<br></h3>');
myWindow.document.write('<h4><button onclick="location.reload()" class="btn">Play Again?</button></h4>');
myWindow.document.write('</body></htm>');



}//end of page win function

function pageboth(){//opens a try page


var myWindow = window.open("final2.html", "_self", "width=1200,height=200");
myWindow.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>TriniTing</title><link rel="stylesheet" type="text/css" href="final2.css"></head><body id="back" style="background-image: url(\'trini2.jpg\')"><h1>Nice Try</h1><br><br><h2><img class="win"  src="try.jpg"></h2>');
myWindow.document.write('<h3>Name: '+newplayer.fname+' &nbsp; '+newplayer.lname+'<br>Your Final Score: '+gamescore+'<br></h3>');
myWindow.document.write('<h4><button onclick="location.reload()" class="btn">Play Again?</button></h4>');
myWindow.document.write('</body></htm>');


}//end of page both function


function pagefail(){//opens a lose page


var myWindow = window.open("final2.html", "_self", "width=1200,height=200");
myWindow.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>TriniTing</title><link rel="stylesheet" type="text/css" href="final2.css"></head><body id="back" style="background-image: url(\'trini2.jpg\')"><h1>You Lose</h1><br><br><h2><img class="win"  src="lose.jpg"></h2>');
myWindow.document.write('<h3>Name: '+newplayer.fname+'&nbsp;'+newplayer.lname+'<br>Your Final Score: '+gamescore+'<br><br></h3>');
myWindow.document.write('<h4><button onclick="location.reload()" class="btn">Play Again?</button></h4>');
myWindow.document.write('</body></htm>');


}//end of page fail function