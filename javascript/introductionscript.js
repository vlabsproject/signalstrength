let myBtn = document.getElementsByClassName('restart');
let myDiv = document.getElementById("changeContent");

/* ===== SHOW NAVBAR ===== */ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show');
            // change icon
            toggle.classList.toggle('bx-x');
            // add padding to body
            bodypd.classList.toggle('body-pd');
            // add padding to header
            headerpd.classList.toggle('body-pd');
        });
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header');

/* ===== LINK ACTIVE ===== */ 
const linkColor = document.querySelectorAll('.nav__link');

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'));
        this.classList.add('active');
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink));

// Function to play audio
let audio;

function playAudio(audioSource) {
    audio = new Audio(audioSource);
    audio.play();
}

// Function to stop audio
function stopAudio() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

// Function to play next audio and stop previous audio
function playNextAudio(audioSource) {
    stopAudio();
    playAudio(audioSource);
}

// Change HTML on click of continue button
// Define flag variable globally
var flag = -1; // Initialize flag to -1 to start with the first audio

// Function to start playing audio after a delay
// function startAudioAfterDelay() {
//     setTimeout(function() {
//         playNextAudio('../assests/audios/audio1.mp3'); // Start playing audio1 after 5 seconds
//     }, 5000); // 5 seconds delay
// }

// Function to update HTML content and play next audio
function updateHTML() {
    console.log("clicked");
    flag++; // Increment flag to switch to the next audio

    if (flag == 0) {
        console.log(flag);
        var speechtext1 = "Have you ever wondered how your phone can connect to the internet wirelessly, or how radio waves travel across vast distances to bring you music and news? The answer lies in the fascinating realm of *antennas!* These seemingly simple structures play a crucial role in transmitting and receiving electromagnetic waves, the invisible messengers that carry information across the air.";
        myDiv.innerHTML = speechtext1;
        playNextAudio('../');
    } else if (flag == 1) {
        console.log(flag);
        var speechtext2 = "In this virtual lab, you'll embark on a journey to explore the fundamentals of antennas and their key parameters. We'll delve into the exciting world of *magnetic fields, electric fields, and their interactions* to understand how antennas convert electrical signals into electromagnetic waves and vice versa.";
        myDiv.innerHTML = speechtext2;
        playNextAudio('../assests/audios/audio2.mp3');
    } else if (flag == 2) {
        console.log(flag);
        var speechtext3 = "In this virtual lab, you'll embark on a journey to explore the fundamentals of antennas and their key parameters. We'll delve into the exciting world of *magnetic fields, electric fields, and their interactions* to understand how antennas convert electrical signals into electromagnetic waves and vice versa.";
        myDiv.innerHTML = speechtext3;
        window.location.href = "../html/Theory.html"; // Redirect to Theory.html after the third audio
    } else {
        flag = 0; // Reset flag to 0 if it exceeds the number of audios
    }
}

// Call the function to start audio after a delay when the page loads
window.onload = startAudioAfterDelay;

