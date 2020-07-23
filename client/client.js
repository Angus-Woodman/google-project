const form = document.querySelector('#my-form');
const results = document.querySelector('#results')


form.addEventListener('submit', getRequest);

function getRequest(e) {

    e.preventDefault();
    let search = e.target.searchBar.value;
    let res = fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBARGZeFhbu-VGkHidrPQVe8UxPwHSXIY0&cx=007675054066069573056:uzm9atbkkps&q=${search}&num=10`)
        .then(r => r.json())
        .then(displayResults)
        .then(hideNavBar)
        .then(moveLogo)
        .catch(console.warn)
}

function displayResults(search) {
    for (let i = 0; i <=9; i++) {
        results.innerHTML += `<section> <a id=\"link${i}\" href=\"#\"><h3 id=\"title${i}\"></h3></a><p id=\"snippit${i}\" ></p><img id=\"img${i}\"src=\"\" alt=\"\"> </section>`;
        let titles = search.items[i].title;
        let links = search.items[i].link;
        let snippits = search.items[i].snippet;
        if (!!search.items[i].pagemap.cse_image){
          let image = search.items[i].pagemap.cse_image[0].src;
          const img = document.querySelector(`#img${i}`)
          img.setAttribute("src", image);
        } else {
          console.log(`no photo for index ${i}`)
        }

        const titl = document.querySelector(`#title${i}`)
        const lnk = document.querySelector(`#link${i}`)
        const snip = document.querySelector(`#snippit${i}`)

        titl.append(titles);
        lnk.setAttribute("href", links);
        snip.append(snippits);
    }
  };


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

  function moveLogo() {
    let logo = document.querySelector("#logo");
    let searchBar = document.querySelector("#my-form");

    logo.style.position = "absolute";
    logo.style.top = "10px";
    logo.style.left = "70px";

    searchBar.style.position = "absolute";
    searchBar.style.top = "50px";
    searchBar.style.left = "350px";
  }
