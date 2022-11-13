<template>
  <div id="background">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-5">
          <div class="breaker">
            <div class="title-box">
                <div class="hometeam">
                  <h2> Home Team </h2>
                  <img id="homeLogo" />
                  <h3 id="homeName">Team Name </h3>
                  <p id="homeGoals">GoalsPlaceHolder </p>
                </div>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="breaker">
            <div class="title-box">
             <h1> VS </h1>
            </div>
          </div>
        </div>  
        <div class="col-sm-5">
          <div class="breaker">
            <div class="title-box">
              <div class="awayteam">
                <h2> Away Team </h2>
                <img id="awayLogo" />
                <h3 id="awayName">Team Name</h3>
                <p id="awayGoals">GoalsPlaceHolder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="position: relative;">
        <div class="breaker">
            <h3> Match Stats </h3>
            <div class="col">
              <div class="hometeam">
              </div>
            </div>
            <div class="col">
              <p> Possession </p>
              <p> Shots </p>
              <p> Shots on Goal </p>
              <p> Corners Taken </p>
              <p> Fouls </p>
              <p> Pass </p>
              <p> Pass Accuracy </p>
              <p> Offsides </p>
              <p> Yellow Cards </p>
              <p> Red Cards </p>

            </div>
            <div class="col">
              <div id="matchTable" class="matches-table">
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

  <script src="main.js"></script>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Merriweather&family=Sacramento&display=swap);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Merriweather", serif;
  text-align: center;
}

#background {
  height: 100vh;
  background-image: url(@/assets/images/intro.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.breaker {
  padding: 16px;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
  width: 50%;
  background-color: white;
  border-radius: 8px;
  text-transform: uppercase;
}


.title-box {
  margin: 25px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
}

.title-box .class {
  font-size: 2.5rem;
}

.team {
  width: 200px;
}

img {
  height: 54px;
  width: 54px;
}

/*java script*/
.matches-table {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}

.matches-title {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.matches-title p {
  font-size: 1.5rem;
}
/*java script*/
</style>
