var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var res=JSON.parse(request.response);
    console.log(res);
//a,Get all the countries from Asia continent /region using Filter method

var asia_region=res.filter((ele)=>ele.region=="Asia");
console.log(asia_region);
var countries=asia_region.map((ele)=>ele.name.common);
console.log(countries);

//b,Get all the countries with a population of less than 2 lakhs using Filter method

var popu=res.filter((ele)=>ele.population<200000);
console.log(popu);

//c,Print the following details name, capital, flag, using forEach method

var details=res.forEach((ele)=>console.log(`Name:${ele.name.common} Capital:${ele.capital} Flag:${ele.flag}`));

//d,Print the total population of countries using reduce method

var total_population=res.reduce((acc,cv)=>acc+cv.population,0);
console.log(`Total population=${total_population}`)

//e,Print the country that uses US dollars as currency.

var res_dollar=res.filter((ele)=>ele.currencies!=undefined && ele.currencies.USD!=undefined)
console.log(res_dollar)
var res_country=res_dollar.map((ele)=>ele.name.common)
console.log(res_country)

}