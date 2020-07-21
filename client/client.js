const form = document.querySelector('#my-form');
form.addEventListener('submit', getRequest)

async function getRequest(e) {
    
    e.preventDefault();
    let search = e.target.searchBar.value;

    const config = {
        method: 'GET',
        url: `https://www.googleapis.com/customsearch/v1?key=AIzaSyCXjUAD4K9aY1FkMPWZkLx2uXEQuoDFVn0&cx=007675054066069573056:uzm9atbkkps&q=${search}&num=10`
    }

    console.log(res.data)
}

getRequest();