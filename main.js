function login(){
    var player1 = document.getElementById("input1").value;
    var player2 = document.getElementById("input2").value;
    localStorage.setItem("Player1", player1);
    localStorage.setItem("Player2", player2);
    window.location= "MathGame.html";
}