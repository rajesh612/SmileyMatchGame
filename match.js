	// Global Variables
    var numberOfFaces = 5, gameLevel = 1;
    var theLeftSide = document.getElementById("leftSide");
    var theRightSide = document.getElementById("rightSide");
    var theBody = document.getElementsByTagName("body")[0];
	// Function to generate smileys
    function generateFaces() {
        document.getElementsByTagName("h3")[0].innerHTML = "You are in Level " + gameLevel;
        for (var i = 0; i < numberOfFaces; i++) {
            var imgSmily = document.createElement("img");
            imgSmily.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
            imgSmily.style.top = Math.floor(Math.random() * 401) + "px";
            imgSmily.style.left = Math.floor(Math.random() * 501) + "px";
            theLeftSide.appendChild(imgSmily);
        }
        // To clone left side smileys
        var leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        // To append the cloned left side smileys to right side
        theRightSide.appendChild(leftSideImages);
        // On Click of correct smily
        theLeftSide.lastChild.onclick = function nextLevel(event) {
            event.stopPropagation();

            while (theLeftSide.lastChild) {
                theLeftSide.removeChild(theLeftSide.lastChild);
            }

            theRightSide.removeChild(theRightSide.lastChild);
            numberOfFaces += 5;
            gameLevel += 1;
            generateFaces();
        }
        // On Click of any wrong smily
        theBody.onclick = function gameFinish() {
            alert("Game Over!!"); 

            theLeftSide.lastChild.onclick = null;
            theBody.onclick = null;
        }
    }