import { environment } from "../environment";

export function saleLink(){
    switch(environment.currentCountry){
        case "co":
            return " https://www.avon.co/571/sale"
            break;
        case "ec":
            return "https://www.avon.com.ec/571/sale"
            break;
        case "pe":
            return " https://www.avon.com.pe/571/sale"
        default:
            return "/"
    }
}