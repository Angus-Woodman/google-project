const form = document.querySelector('#my-form');
const results = document.querySelector('#results');
form.addEventListener('submit', getRequest)

function getRequest(e) {
    e.preventDefault();
    let search = e.target.searchBar.value;

    let res = fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCXjUAD4K9aY1FkMPWZkLx2uXEQuoDFVn0&cx=007675054066069573056:uzm9atbkkps&q=${search}&num=10`)//, options)
      .then(r => r.json())
      .then(console.log())
      .then(getInfo)
      .catch(console.warn);

      console.log(res.data);
};

function getInfo(search) {
  console.log(search);
  results.append(JSON.stringify(search));
}
