function iplookup(){
    const ip_address = document.getElementById("ip_input").value;

    $.get(`https://ipapi.co/${ip_address}/json/`,{},
    function(result,status){
console.log(result);
const output = document.getElementById("output_id");
output.innerHTML = `CITY : ${result.city}\nCountry Name : ${result.country_name}
Region : ${result.region}
continent code : ${continent_code}
Country : ${country}
Country Area : ${country_area}
Country Calling Code : ${country_calling_code}
Country Capital : ${country_capital}
Country Code : ${country_code}
Country code Iso3 : ${country_code_iso3}
Country Population : ${country_population}
Country Tld : ${country_tld}
Currency : ${currency}
Currency Name : ${currency_name}
EU : ${in_eu}
Languages : ${languages}
Latitude : ${latitude}
Longitude : ${longitude}
Network : ${network}
ORGANISATION : ${org}
POSTAL CODE : ${postal}
TIMEZONE : ${timezone}
UTC : ${utc_offset}
 `;
        
    }
    ,"JSON");
}
