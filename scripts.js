const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const startButton = document.getElementById("start")

const botPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
var currentlyPlaying = false
var numClosedDoors = 3
var d1 ,d3, d2;
const isBot = (door) => {
    return door.src === botPath
}

const isClicked = (doorImage) => {
    return doorImage.src !== closedDoorPath
}
const playDoor = (door) => {
    numClosedDoors --;
    if(numClosedDoors === 0){
        gameOver("win")
    } else if (isBot(door)) {
        gameOver()
        currentlyPlaying = false
    }
}

doorImage1.onclick = () => {
    if(isClicked(doorImage1) || !currentlyPlaying){
        return
    }
    doorImage1.src = d1
    playDoor(doorImage1);
}
doorImage2.onclick = () => {
    if(isClicked(doorImage2) || !currentlyPlaying){
        return
    }
    doorImage2.src = d2
    playDoor(doorImage2)
}
doorImage3.onclick = () => {
    if(isClicked(doorImage3) || !currentlyPlaying){
        return
    }
    doorImage3.src = d3
    playDoor(doorImage3)
}

const gameOver = (status) => {
    if(status === 'win'){
        startButton.innerHTML = "You win! Play again?"
    } else {
        startButton.innerHTML = "Game over! Play again?"
    }
}

const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if(choreDoor === 0) {
        d1 = botPath
        d2 = beachDoorPath
        d3 = spaceDoorPath
    } else if (choreDoor === 1) {
        d2 = botPath
        d1 = beachDoorPath
        d3 = spaceDoorPath
    } else if (choreDoor === 3) {
        d3 = botPath
        d1 = beachDoorPath
        d2 = spaceDoorPath
    }
}

const startRound = () => {
    randomChoreDoorGenerator()
    doorImage1.src = closedDoorPath
    doorImage2.src = closedDoorPath
    doorImage3.src = closedDoorPath
    startButton.innerHTML = "Good Luck!"
    currentlyPlaying = true
}