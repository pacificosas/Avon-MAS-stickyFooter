import { HtmlContent } from "../models/htmlContent.model";
import { css } from "./css.module";

export function html(content:HtmlContent){
    return `
    ${css(content.assetsRoot)}
    <ul class="st-av">
    <li>
      <a href="/">
        <div class="icon btn-1"></div>
        <div class="name" data-text="Home">Home</div>
      </a>
    </li>
    <li>
      <a href="${content.regalosLink}">
        <div class="icon btn-2"></div>
        <div class="name" data-text="Mi carrito">Regalos</div>
      </a>
    </li>
    <li>
      <a href="/special-offers/">
        <div class="icon btn-3"></div>
        <div class="name" data-text="Ofertas">Ofertas</div>
      </a>
    </li>
    <li>
      <a href="${content.chatLink}" target="_blank">
        <div class="icon btn-5"></div>
        <div class="name" data-text="Chat virtual">Chat virtual</div>
      </a>
    </li>
    `
}