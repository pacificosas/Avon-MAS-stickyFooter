import { environment } from "./environment";
import { chatLink } from "./modules/chatLink.module";
import { html } from "./modules/html.module";
import { regalosLink } from "./modules/regalosLink.module";

if(navigator.userAgent.toLowerCase().match(/mobile/i)){

    var cont=document.createElement("div")

    cont.innerHTML=html({
        chatLink:chatLink(),
        regalosLink:regalosLink(),
        assetsRoot:environment.staticsUrl
    })
    

    document.body.append(cont)
}
