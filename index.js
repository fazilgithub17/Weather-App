
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1df3f9a904msha4b015231d5ab7fp1d1d25jsne9e2dfc3f394',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
	const searchbox=document.querySelector("#searchbar input");
	const searchbtn=document.querySelector("#searchbar button");
	const imgicon=document.querySelector("#imgr");
	async function checkweather(city){
		const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
		const response = await fetch(url,options);
	const data = await response.json();
	console.log(data);

	document.getElementById("name").innerHTML=city;
	document.getElementById("cloud").innerHTML=data.cloud_pct;
	document.getElementById("deg").innerHTML=data.temp;
	document.getElementById("hum").innerHTML=data.humidity;
	document.getElementById("wd").innerHTML=Math.round(data.wind_speed);
	
	document.getElementById("tmp").innerHTML=data.temp+ "°c";
	document.getElementById("cds").innerHTML=data.cloud_pct+ "%";
	document.getElementById("fl").innerHTML=data.feels_like+ "°c";
	document.getElementById("humi").innerHTML=data.humidity+ "%";
	document.getElementById("mxtemp").innerHTML=data.max_temp+ "°c";
	document.getElementById("mntemp").innerHTML=data.min_temp+ "°c";
	
	document.getElementById("wid").innerHTML=data.wind_degrees+"°N";
	document.getElementById("ws").innerHTML=Math.round(data.wind_speed)+ "km/h";
	
		if(data.cloud_pct>=80)
		{
			imgicon.src="rain.png";
		}
		else if(data.cloud_pct>=60)
		{
			imgicon.src="drizzle.png";
		}else if(data.cloud_pct>=40)
		{
			imgicon.src="clouds.png";
		}else if(data.cloud_pct>=20)
		{
			imgicon.src="mist.png";
		}else
		{
			imgicon.src="clear.png";
		}


	}
	searchbtn.addEventListener("click",()=>{
		checkweather(searchbox.value);
		
	})
	
