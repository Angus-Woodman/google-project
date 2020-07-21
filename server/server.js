const axios = require('axios');

async function getRequest() {

    const config = {
        method: 'GET',
        url: `https://www.googleapis.com/customsearch/v1?key=AIzaSyCXjUAD4K9aY1FkMPWZkLx2uXEQuoDFVn0&cx=007675054066069573056:uzm9atbkkps&q=hello&num=10`
    }

    let res = await axios(config)
    // console.log(res.status);
    console.log(res.data)
}

getRequest();