const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    // Ici il faut préciser ce 2ème argument pour éviter d'avoir une erreur CORS
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    console.log(respData, KtoC(respData.main.temp));

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
        <small>Il fait</small>
        <h2>${temp}°C</h2>
        <p>à ${search.value}</p>
    `;

    // On vide le main pour éviter d'afficher plusieurs résultats...
    main.innerHTML = '';
    main.appendChild(weather);
}

// Convertit les kelvin en celsius
function KtoC(K) {
    return (K - 273.15).toFixed(2); // 2 nombres après la virgule
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value;

    if(city) {
        getWeatherByLocation(city);
    }
})