import { environment } from "../environment";

export function regalosLink(){
    switch(environment.currentCountry){
        case "co":
            return "https://www.avon.co/576/regalos"
            break;
        case "ec":
            return "https://www.avon.com.ec/576/regalos"
            break;
        case "pe":
            return "https://www.avon.com.pe/576/regalos"
        default:
            return "/"
    }
}