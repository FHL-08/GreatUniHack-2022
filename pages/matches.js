function getData(){
    fetch("https://v3.football.api-sports.io/fixtures?live=all", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "9f995c74cbmsheafcc60b30f4a98p1fe363jsn26c914bdecce"
        }
    });
    
    .then(response => response.json().then(data => {
        var matchesList = data['response'];
        var fixture = matchesList[0]['fixture'];
        var goals = matchesList[0]['goals';]
        console.log(response);
    }))
}