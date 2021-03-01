import { environment } from "./environment";
import { chatLink } from "./modules/chatLink.module";
import { html } from "./modules/html.module";

if(navigator.userAgent.toLowerCase().match(/mobile/i)){
    document.body.innerHTML+=html({
        chatLink:chatLink(),
        assetsRoot:environment.staticsUrl
    })
}
