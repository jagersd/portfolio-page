const projects = {
    "data": [
      {
        "slug":"gameshowcase",
        "date":"Dec-2019",
        "desc":"Getting to know bootstrap and working with 3rd party packages",
        "name":"Airsim",
        "technologies":["html","css/bootstrap","php","flarum"],
        "todo":"Ook nog heel erg veel",
        "url":"https://stefandejager.nl/airsim"
      },
      {
        "slug":"webshop",
        "date":"Dec-2019",
        "desc":"What does it take to get a webshop in the air using a pre-build CMS (OpenCart)?",
        "name":"Luonto",
        "technologies":["OpenCart"],
        "todo":"Ook nog heel erg veel",
        "url":"https://stefandejager.nl/luonto"
      },
      {
        "slug":"quiz",
        "date":"Oct-2019",
        "desc":"First PHP creation mostly without tooling in order to get the to know the basics which helps to appreciate the tooling a framework can provide. The game for multiplayer quizzing using AJAX",
        "name":"Pubquiz",
        "technologies":["html","css","JavaScript","PHP","MySql"],
        "todo":"Ook nog heel erg veel",
        "url":"https://stefandejager.nl/quiz/start.html"
      },
      {
        "slug":"writers",
        "date":"Feb-2020",
        "desc":"First experience working with a CMS. I chose OctoberCMS because it was Laravel based and provide a simple structure for routing and adding your own building blocks",
        "name":"Writer's showcase",
        "technologies":["OctoberCRMS","Twig","PHP", "Vanilla JavaScript","css/bootstrap"],
        "todo":"Ook nog heel erg veel",
        "url":"https://stefandejager.nl/sanna"
      },
      {
        "slug":"solento",
        "date":"Sep-2020 <> Jan-2021",
        "desc":"Getting to know the Laravel framework and all that comes with it through the creation of browser based multiplayer strategy/tradingcard game",
        "name":"Solento",
        "summary":"This is a free time project with too large of a scale",
        "technologies":["Laravel + included tooling","MySql"],
        "todo":"Te veel om op te noemen",
        "url":"https://project-solento.stefandejager.nl"
      },
    ]
  }

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      activeElement: 'intro',
      activeProject: '',
      projects: projects.data
    },
  })