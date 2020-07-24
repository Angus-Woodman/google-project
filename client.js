const form = document.querySelector('#my-form');
const results = document.querySelector('#results')

form.addEventListener('submit', (e) => {
  getRequest(e)
  hideNavBar()
  moveLogo()
});

// gets data from google API
function getRequest(e) {
    e.preventDefault();
    let search = e.target.searchBar.value;
    let res = fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBARGZeFhbu-VGkHidrPQVe8UxPwHSXIY0&cx=007675054066069573056:uzm9atbkkps&q=${search}&num=10`)
        .then(r => r.json())
        .then(displayResults)
        .catch(console.warn)
}

// displays results of search
function displayResults(search) {

  // removes content of previous search
    if (!!document.querySelector(".card")){
        removeContent = document.querySelectorAll(".card");
        Array.from(removeContent).forEach(content => {content.remove()})
    }

  // inserts html content to add specific information from the google API object
    for (let i = 0; i <=9; i++) {
        results.innerHTML += `<section class="card"> <div class="cardText"> <a id="link${i}" href="#"><h3 id="title${i}"></h3></a><p id="snippit${i}" ></p> </div> <div> <img class="cardImage" id="img${i}" src="" alt=""> </div></section>`;
        let titles = search.items[i].title;
        const titl = document.querySelector(`#title${i}`);
        titl.append(titles);

        let links = search.items[i].link;
        const lnk = document.querySelector(`#link${i}`);
        lnk.setAttribute("href", links);

        if (!!search.items[i].snippet) {
            let snippits = search.items[i].snippet;
            const snip = document.querySelector(`#snippit${i}`);
            snip.append(snippits);
        }

        if (!!search.items[i].pagemap && !!search.items[i].pagemap.cse_image){
            let image = search.items[i].pagemap.cse_image[0].src;
            const img = document.querySelector(`#img${i}`);
            img.setAttribute("src", image);
        }
    }
  };

// hides the home screen navbar
  function hideNavBar() {
      let hide = document.querySelectorAll("nav");
      Array.from(hide).forEach(hidden => {
          if (displayResults) {
              hidden.style.visibility = "hidden";
          } else {
              hidden.style.visibility = "visible"
          }
      })
  }

// Moves the logo and searchbar to top left of screen
  function moveLogo() {
      let logo = document.querySelector("#logo");
      let searchBar = document.querySelector("#my-form");

      logo.style.position = "absolute";
      logo.style.top = "10px";
      logo.style.left = "70px";

      searchBar.style.position = "absolute";
      searchBar.style.top = "45px";
      searchBar.style.left = "350px";
  }
