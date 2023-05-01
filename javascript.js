function iplookup(){
    const ip_address = document.getElementById("ip_input").value;

    $.get(`https://ipapi.co/${ip_address}/json/`,{},
    function(result,status){
console.log(result);
const output = document.getElementById("output_id");
output.innerHTML = `CITY : ${result.city}\nCountry Name : ${result.country_name}
Region : ${result.region}
continent code : ${result.continent_code}
Country : ${result.country}
Country Area : ${result.country_area}
Country Calling Code : ${result.country_calling_code}
Country Capital : ${result.country_capital}
Country Code : ${result.country_code}
Country code Iso3 : ${result.country_code_iso3}
Country Population : ${result.country_population}
Country Tld : ${result.country_tld}
Currency : ${result.currency}
Currency Name : ${result.currency_name}
EU : ${result.in_eu}
Languages : ${result.languages}
Latitude : ${result.latitude}
Longitude : ${result.longitude}
Network : ${result.network}
ORGANISATION : ${result.org}
POSTAL CODE : ${result.postal}
TIMEZONE : ${result.timezone}
UTC : ${result.utc_offset}
 `;
        
    }
    ,"JSON");
}
