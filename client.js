const form = document.querySelector('#seachBar');
console.log(form)
form.addEventListener('submit', handleFormSubmit)


function handleFormSubmit(e){
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const name = form.name.value;

    accountNameHolder.textContent = name;
}
// let APIKEY = 'AIzaSyCSjSDwHCsDN8LQ51cttfIqYKTnu55j56E';
// let SearchEngineID = '011558286738700071071:3ywszgih2nu';
//
//
// let parameters = APIKEY +'cx='+ SearchEngineID + '&q=lectures';
// url = `https://www.googleapis.com/customsearch/v1?key=${[parameters]}`
// GET https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures'
