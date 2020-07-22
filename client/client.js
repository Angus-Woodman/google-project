const form = document.querySelector('#my-form');
const results = document.querySelector('#results')


form.addEventListener('submit', getRequest);

function getRequest(e) {

    e.preventDefault();
    let search = e.target.searchBar.value;
    let res = fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBARGZeFhbu-VGkHidrPQVe8UxPwHSXIY0&cx=007675054066069573056:uzm9atbkkps&q=${search}&num=10`)
        .then(r => r.json())
        .then(displayResults)
        .catch(console.warn)
}

function displayResults(search) {
    for (let i = 0; i <=9; i++) {
        let titles = search.items[i].title;
        let links = search.items[i].link;
        let snippits = search.items[i].snippet;
        // let image = search.items[i].pagemap.cse_image[0].src;
        results.innerHTML += `<section> <a id=\"link${i}\" href=\"#\"><h3 id=\"title${i}\"></h3></a><p id=\"snippit${i}\" ></p><img id=\"img${i}\"src=\"\" alt=\"\"> </section>`;
        const titl = document.querySelector(`#title${i}`)
        const lnk = document.querySelector(`#link${i}`)
        const snip = document.querySelector(`#snippit${i}`)
        // const img = document.querySelector(`#img${i}`)
        titl.append(titles);
        lnk.setAttribute("href", links);
        snip.append(snippits);
        // img.setAttribute("src", image);
    }
  };


  // function hideNavBar() {
  //     let hide = document.querySelectorAll("nav");
  //     Array.from(hide).forEach(hidden => {
  //         if (displayResults) {
  //             hidden.style.visibility = "hidden";
  //         } else {
  //             hidden.style.visibility = "visible"
  //         }
  //     })
  // }
