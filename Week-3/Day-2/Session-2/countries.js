var country = "Mexico";
switch (country){
    case "India":
    case "China":
    case "Nepal": 
    case "Singapore":
        country = "The continent is Asia";
        break;
    case "America":
    case "Mexico":
    case "Canada":
        country = "The continent is North America";
        break;
    case "Australia":
        country = "The continent is Australia";
    case  "France":
    case  "Argentina":
    case "Brazil":
        country = "The continent is South America";
        break;
    case "Germany":
    case "Sweden":
        country = "The continent is North Europe";
        break;
    case "Africa":
    case "Nigeria":
        country = "The continent is South Africa";
        break;
    default :
        country = "Enter Country Name";
        break;
}
console.log(country)