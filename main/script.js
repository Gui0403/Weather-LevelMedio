const api_key = "1d3cb30c2c7fd9fb3ee7b4bc9aa7fc62"

function mudarTela(dados) {
    console.log(dados)
    document.querySelector(".region").innerHTML = "Tempo em " + dados.name
    document.querySelector(".time").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text_prevision").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img_cloud").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function search_city(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${api_key}&lang=pt_br&units=metric`).then(response => response.json())
    mudarTela(dados)
}

function search() {
    const cidade = document.querySelector(".search").value
    search_city(cidade)
    
};
