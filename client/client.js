const form = document.querySelector('#my-form');
const results = document.querySelector('#results')
const titl = document.querySelector('#firstTitlePage')
const lnk = document.querySelector('#firstLinkPage')
const snip = document.querySelector('#firstSnippitPage')
const img = document.querySelector('#firstImage')

form.addEventListener('submit', getRequest);

function getRequest(e) {

    e.preventDefault();
    let search = e.target.searchBar.value;

    let res = fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCXjUAD4K9aY1FkMPWZkLx2uXEQuoDFVn0&cx=007675054066069573056:uzm9atbkkps&q=${search}&num=10`)
        .then(r => r.json())
        .then(displayResults)
        .catch(console.warn)
}

function displayResults(search) {
    let titles = search.items[0].title;
    let links = search.items[0].link;
    let snippits = search.items[0].snippet;
    let image = search.items[0].pagemap.cse_image[0].src;;
    titl.append(titles);
    lnk.setAttribute("href", links);
    snip.append(snippits);
    img.setAttribute("src", image);
  };


  // function displayResults(search) {
  //     let a = document.createElement('a')
  //     let link = document.createTextNode(search.items[1].link);
  //     a.appendChild(link);
  //     a.title = search.items[0].title;
  //     a.href = search.items[0].link
  //     let outcome = document.body.appendChild(a);
  //     outcome.textContent =  a.title;
  //     results.append(outcome.textContent)
  // };
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
