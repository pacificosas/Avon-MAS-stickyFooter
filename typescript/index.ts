import { environment } from "./environment";
import { chatLink } from "./modules/chatLink.module";
import { html } from "./modules/html.module";


document.body.innerHTML+=html({
    chatLink:chatLink(),
    assetsRoot:environment.staticsUrl
})