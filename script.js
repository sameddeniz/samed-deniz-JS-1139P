function increaseScoreHome(scoreHome) {
  let homeScore = document.getElementById("scoreHome").innerHTML;
  homeScore = ++homeScore;
  console.log(homeScore);
  document.getElementById("scoreHome").innerText = homeScore;
}

function increaseScoreAway(scoreAway) {
  let awayScore = document.getElementById("scoreAway").innerHTML;
  awayScore = ++awayScore;
  console.log(awayScore);
  document.getElementById("scoreAway").innerText = awayScore;
}

function decreaseScoreHome(scoreHome) {
  let homeScore = document.getElementById("scoreHome").innerHTML;
  if (homeScore > 0) {
    homeScore = --homeScore;
    document.getElementById("scoreHome").innerText = homeScore;
  }
  if ((homeScore = 0)) {
    alert("Score daha fazla düşemez..!");
    document.getElementById("scoreHome").innerText = homeScore;
  }
}

function decreaseScoreAway(scoreAway) {
  let awayScore = document.getElementById("scoreAway").innerHTML;
  if (awayScore > 0) {
    awayScore = --awayScore;
    document.getElementById("scoreAway").innerText = awayScore;
  }
  if ((awayScore = 0)) {
    alert("Score daha fazla düşemez..!");
    document.getElementById("scoreAway").innerText = awayScore;
  }
}

function resetingHome(scoreHome) {
  let homeScoreReset = document.getElementById("scoreHome").innerHTML;
  homeScoreReset = 0;
  console.log(homeScoreReset);
  document.getElementById("scoreHome").innerText = homeScoreReset;
}

function resetingAway(scoreAway) {
  let awayScoreReset = document.getElementById("scoreAway").innerHTML;
  awayScoreReset = 0;
  console.log(awayScoreReset);
  document.getElementById("scoreAway").innerText = awayScoreReset;
}

function changeHomeName(teamHome) {
  let newHomeName = document.getElementById("teamHome").innerHTML;
  newHomeName = prompt("Yeni Takım İsmi Girin");
  document.getElementById("teamHome").innerHTML = newHomeName;
}

function changeAwayName(teamAway) {
  let newAwayName = document.getElementById("teamAway").innerHTML;
  newAwayName = prompt("Yeni Takım İsmi Girin");
  document.getElementById("teamAway").innerHTML = newAwayName;
}

function changeHomeScore(scoreHome) {
  let newHomeScore = document.getElementById("scoreHome").innerHTML;
  newHomeScore = prompt("Yeni Skoru Girin");
  if ((newHomeScore = Number(newHomeScore))) {
    if (newHomeScore >= 0) {
      document.getElementById("scoreHome").innerHTML = newHomeScore;
    } else {
      alert("0'dan büyük bir değer girebilirsiniz");
    }
  } else {
    alert("Sadece numara girebilirsiniz");
  }
}

function changeAwayScore(scoreAway) {
  let newAwayScore = document.getElementById("scoreAway").innerHTML;
  newAwayScore = prompt("Yeni Skoru Girin");
  if ((newAwayScore = Number(newAwayScore))) {
    if (newAwayScore >= 0) {
      document.getElementById("scoreAway").innerHTML = newAwayScore;
    } else {
      alert("0'dan büyük bir değer girebilirsiniz");
    }
  } else {
    alert("Sadece numara girebilirsiniz");
  }
}
