let dayCategory;

function logIn(name) {
    sessionStorage.setItem("Gym-Page name", name);
    document.getElementById('content').innerHTML = contentMainview;
    document.getElementById('header').style.display = 'block';
    document.getElementById('nameValue').innerHTML = name;
    document.getElementById('date').innerHTML = dateString;
    switch (dayString) {
        case 0:
            dayCategory = "Rest";
            break;
        case 1:
            dayCategory = "Push";
            break;
        case 4:
            dayCategory = "Push";
            break;
        case 2:
            dayCategory = "Pull";
            break;
        case 5:
            dayCategory = "Pull";
            break;
        case 3:
            dayCategory = "Leg";
        case 6:
            dayCategory = "Leg";
            break;
    }

    document.getElementById('dayCategory').innerHTML = "Heute ist " + dayCategory + "-Day!";
}

function toLogIn() {
    sessionStorage.setItem("Gym-Page name", 'lade neu');
    document.getElementById('content').innerHTML = contentLogIn;
    document.getElementById('header').style.display = 'none';
}

function toPush() {

}

var date = new Date();
let dateString = "" + (date.getDay() + 1) + "." + (date.getMonth() + 1) + "." + date.getFullYear();
let dayString = date.getUTCDay();

var contentLogIn = `

<div id="logInBox">
            <p class="btnLogIn" onclick="logIn('Michi')"> Michi </p>
            <p class="btnLogIn" onclick="logIn('Raphi')"> Raphi </p>
        </div>

`;

var contentMainview = `

<div id="mainView">
            <p onclick="toPush()"> Push </p>
            <p onclick="toPull()"> Pull </p>
            <p onclick="toLeg_Core()"> Leg + Core </p>
        </div>

`;

/* ---------- Start Training ---------- */

var sport = `

<div id="mainView">
            <p>Mittlere Brust</p>
            <p>Untere Brust</p>
            <p>Obere Brust</p>
            <p>Seitliche Schulter</p>
            <p>Vordere Schulter</p>
        </div>

        <p id="btnStart" onclick="startPush()">Start</p>
        
        `;