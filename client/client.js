const form = document.querySelector('#my-form');
const results = document.querySelector('#results')
form.addEventListener('submit', getRequest);

function getRequest(e) {
  
    e.preventDefault();
    let search = e.target.searchBar.value;

    let res = fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCXjUAD4K9aY1FkMPWZkLx2uXEQuoDFVn0&cx=007675054066069573056:uzm9atbkkps&q=${search}&num=10`)
        .then(r => r.json())
        .then(displayResults)
        .catch(console.warn)
}


// function displayResults(search) {
//     let links = search.items[0].link;
//     let titles = search.items[0].title;
//     let snippits = search.items[0].snippet;
//     let image = search.items[0].pagemap.cse_image[0].src;;
//     console.log(links);
//     console.log(titles);
//     console.log(snippits);
//     console.log(image);
//   };
  function displayResults(search) {
      let a = document.createElement('a')
      let link = document.createTextNode(search.items[1].link);
      a.appendChild(link);
      a.title = search.items[0].title;
      a.href = search.items[0].link
      let outcome = document.body.appendChild(a);
      outcome.textContent =  a.title;
      results.append(outcome.textContent)
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
