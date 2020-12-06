const url = "https://api.spacexdata.com/v4/history";

const informationContainer = document.querySelector(".historicEvents");

async function getInformation() {

    const response = await fetch(url);

    // console.log(response);

    const data = await response.json();

    // console.log(data);

    const history = data;

    informationContainer.innerHTML = "";

    for (let i = 0; i < history.length; i++) {
        console.log(history[i]);

        informationContainer.innerHTML += `<div class="historyResults">
                                            <p class="p_results">${history[i].event_date_utc}</p>
                                            <h3>${history[i].title}</h3>
                                            <p class="p_results">${history[i].details}</p>
                                            <a id="read_article" href="${history[i].links.article}" target="_blank">READ ARTICLE</a>
                                            </div>
                                            `
    }


}

getInformation();



function navigation() {
  const responsiveNav = document.getElementById("centered_nav");
  if (responsiveNav.className === "navigation") {
      responsiveNav.className += " responsive";
  } else {
      responsiveNav.className = "navigation";
  }
}


let prevNavPos = window.pageYOffset;
window.onscroll = function() {
  const currentNavPos = window.pageYOffset;
  if (prevNavPos > currentNavPos) {
    document.getElementById("centered_nav").style.top = "0";
  } else {
    document.getElementById("centered_nav").style.top = "-4vw";
  }
  prevNavPos = currentNavPos;
}

