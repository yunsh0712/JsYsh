const API_KEY = "30c4719142af4c8f2ce3839159c18862";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You Live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText= `지역 : ${data.name}`;
            weather.innerText = `날씨 : ${data.weather[0].main} 
             온도 : ${data.main.temp}` ;
        });
}

function onGeoError(){ 
    alert("Can't find you. No weather for you.");
}
 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// fetch json()메서드
// fetch API의 응답(response) 객체는json()를 제공하고 있어JSON.parse() 대신 사용할 수 있다.   

// response.json()메서드를 호출하면 JSON 데이터를 javascript 객체로 변환한다.

// fetch(데이터요청 할 서버 url)
// .then(response => response.json())
// .then(data => {
//   //데이터 처리 부분
// }
// JSON.parse()와 response.json()의 차이
// JSON.parse()에는 응답(response) 바디만을 넣어야한다.바디와 헤더가 들어가면 데이터를 읽어오지 못한다
// response.json()에는 응답 헤더가 들어가도 바디만 읽어서 불러온다 