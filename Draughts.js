let ;
const docStartButton;

window.onload = function() 
{
    docStartButton = document.getElementById("startButton");
    docStartButton.onclick(startGame);
}

function startGame() 
{
    docStartButton.style.disabled = true; // Disable the button after it's clicked
    docStartButton.style.backgroundColor = "gray"; // Change button color to gray


}