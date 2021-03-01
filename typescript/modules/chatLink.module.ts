import { environment } from "../environment";

export function chatLink(){
    switch(environment.currentCountry){
        case "co":
            return "https://www.avon.com.co/REPSuite/static/chat.html"
            break;
        case "ec":
            return "https://200.105.236.2:8560/webchatavon/"
            break;
        case "pe":
            return "https://200.105.236.2:8560/webchatavonperu/"
        default:
            return "/"
    }
}