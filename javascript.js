function iplookup(){
    const ip_address = document.getElementById("ip_input").value;

    $.get(`https://ipapi.co/${ip_address}/json/`,{},
    function(result,status){
        console.log(result);
        const output = document.getElementById("output_id");
        output.innerHTML = `CITY : ${result.city}\nCountry Name : ${result.country_name}\nRegion : ${result.region}`;

    }
    ,"JSON");
}