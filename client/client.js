const form = document.querySelector('#my-form');
const results = document.querySelector('#results')
form.addEventListener('submit', getRequest);

function getRequest(e) {
    
    e.preventDefault();
    let search = e.target.searchBar.value;

    let res = fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCXjUAD4K9aY1FkMPWZkLx2uXEQuoDFVn0&cx=007675054066069573056:uzm9atbkkps&q=${search}&num=10`)
        .then(r => r.json())
        // .then(console.log(res.data))
        .then(displayResults)
        .catch(console.warn)
        
    // console.log(res.data)
}


function displayResults(search) {  
    console.log(typeof search)
    results.append(JSON.stringify(search))
    }
};

    // Object.keys(search).forEach(function (key) {
    //     var val = search[key];

 // for(var key in search) {
    //     var value = search[key]
    // }
    // var x = search[Object.keys(search).filter(item => search[item].kind)];]