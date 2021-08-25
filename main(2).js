var player1 = localStorage.getItem("Player1");
var player2 = localStorage.getItem("Player2");

var player1_score = 0;
var player2_score = 0;

var question_turn = "player1";
var answer_turn = "player2";

document.getElementById("player_question").innerHTML = "Question Turn -" + player1 + "= " + player1_score;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2 + "= " + player2_score;

var equation;

function Send(){
    var sender1 = document.getElementById("number1_input").value;
    var sender2 = document.getElementById("number2_input").value;
    equation = parseInt(sender1) * parseInt(sender2);
    var quest = "<h4>" + sender1 + "X" + sender2 + "</h4>";
    var js_input = "<input id='js_input' type='number' placeholder='Submit Your Answer'>";
    var js_button = "<button class='btn btn-info' onclick='Check()'>Check Math</button>";
    var complete = quest + js_input + js_button;
    document.getElementById("empty_div").innerHTML = complete;
}
function Check(){
    console.log("Function Check")
    var checker = document.getElementById("js_input").value;
    if(checker == equation){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("score_1").innerHTML=player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("score_2").innerHTML=player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("player_question").innerHTML= "Question Turn -" + player2 + "= " + player2_score;
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1 + "= " + player1_score;
    }
    else{
        question_turn = "player1";
        answer_turn = "player2";
        document.getElementById("player_question").innerHTML= "Question Turn -" + player1 + "= " + player1_score;
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2 + "= " + player2_score;
    }
    document.getElementById("empty_div").innerHTML= "";
}