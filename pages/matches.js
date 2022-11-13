var elapsedTime = document.querySelector("#elapsed");
var homeTeamLogo = document.querySelector("#homeLogo");
var homeTeamName = document.querySelector("#homeName");
var awayTeamLogo = document.querySelector("#awayLogo");
var awayTeamName = document.querySelector("#awayName");
var lastMatchGoals = document.querySelector("#goals");
var matchTable = document.querySelector("#matchTable");

var matchTable = document.querySelector("#matchTable");

function addMatchTitle(data){
    var addMatchTitle = document.createElement('div');
    matchTile.classList.add("match-tile");

    

}

function getData(){
    fetch("https://v3.football.api-sports.io/fixtures?live=all", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "9f995c74cbmsheafcc60b30f4a98p1fe363jsn26c914bdecce"
        }
    });
    
    .then(response => response.json().then(data => {
        var matchesList = data['response'];

        var fixture = matchesList[0]['fixture'];
        var goals = matchesList[0]['goals'];
        var teams = matchesList[0]['teams'];
        
        elapsedTime.innerHTML = fixture['status']['elapsed'] + "'";
        homeTeamLogo.src = teams['home']['logo'];
        homeTeamName.innerHTML = teams['home']['name'];
        awayTeamLogo.src = teams['away']['logo'];
        awayTeamName.innerHTML = teams['away']['name'];
        // lastMatchGoals.innerHTML = goals['home']  + ":"  + goals['away'];
        homeTeamGoals = goals['home'];
        homeTeamGoals = goals['away'];

        
    }))
    .catch(err => {
        console.log(err);
    });
}