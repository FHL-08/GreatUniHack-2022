<!-- <script
    type="module"
    src="https://widgets.api-sports.io/football/1.1.8/widget.js">
</script> -->

<template>
<title>Match Webpage</title>

<div id="wg-api-football-fixtures"
                    data-host="v3.football.api-sports.io"
                    data-refresh="60"
                    data-date="2022-02-11"
                    data-key="9f995c74cbmsheafcc60b30f4a98p1fe363jsn26c914bdecce"
                    data-theme=""
                    data-show-errors="false"
                    class="api_football_loader">
</div>

</template>

<style scoped>
    :root {
        --font: "Raleway", sans-serif;

        --background-color: #00141e;
        --background-color-header: #0f2d37;
        --color-text: #fff;
        --color-text-header: #ffcd00;
        --color-green: #01d099;
        --color-red: #f64e60;
        --color-yellow: #ffa800;

        --primary-font-size: 12px;
        --secondary-font-size: 10px;
        --header-font-size: 13px;
        --svg-font-size: 8px; /* Only for icon-svg */

        --border-bottom: 0px solid var(--background-color-header);
        --primary-padding: 3px 3px;
        --primary-line-height: 15px;
        --secondary-padding: .4rem;

        --button-info-font-size: 9px ;/* Only for info button */
        --button-info-line-height: 16px ; /* Only for info button */

        /* LIVESCORE, FIXTURES & FIXTURE WIDGETS ONLY */
        --modale-background-overlay: rgba(0,0,0,0.4); /* Only for modale */
        --modale-close-size: 28px; /* Only for the close button in the modale */
        --modale-elapsed-time: 12px; /* Only for elapsed time in the modale or FIXTURE widget */
        --modale-teams-name: 16px; /* Only for Teams Name in the modale or FIXTURE widget */
        --modale-teams-name-small: 12px; /* Only for Teams Name in the modale or FIXTURE widget <480px */
        --modale-teams-name-line-height: 20px; /* Only for Teams Name in the modale or FIXTURE widget */
        --modale-score: 40px; /* Only for Score in the modale or FIXTURE widget >480px */
        --modale-score-small: 20px; /* Only for Score in the modale or FIXTURE widget <480px */
        --modale-players-grid-line-height: 20px; /* Only for players on the lineups grid in the modale or FIXTURE widget */
        --modale-players-grid-line-height-small: 15px; /* Only for players on the lineups grid in the modale or FIXTURE widget <480px */
        --modale-players-grid-line-height-large: 25px; /* Only for players on the lineups grid in the modale or FIXTURE widget >1024px */

        /* STANDINGS WIDGET ONLY */
        --standings-team-form-font-size: 9px; /* Only for team form and info button */
        --standings-team-form-line-height: 16px;

        /* LOGOS / FLAGS / PHOTOS */
        --flags-size: 28px;
        --teams-logo-size: 24px;
        --teams-logo-size-large: 100px; /* Only in the modale or FIXTURE widget */
        --teams-logo-size-medium: 50px; /* Only in the modale or FIXTURE widget <480px */
        --teams-logo-border: 0px solid var(--background-color-header); /* 0px for no border, Only in the modale or FIXTURE widget */
        --player-photo: 15px;  /* Only in the modale or FIXTURE widget */
        --player-photo-large: 30px;  /* Only in the modale or FIXTURE widget <480px */
    }
</style>