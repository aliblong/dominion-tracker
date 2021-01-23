import { DominionPlayersHtmlElement } from "./player-container";
import { DominionPlayerHtmlElement } from "./dominion-player";
import { DominionDeckHtmlElement } from "./dominion-deck";
import { CustomButtonHtmlElement } from "./custom-button";
import { ResetButtonHtmlElement } from "./reset-button";
import { DownloadButtonHtmlElement } from "./download-button";
import { DominionGameNumberHtmlElement } from "./dominion-game-number";
import { UploadContainerHtmlElement } from "./upload-container";

window.customElements.define("dominion-deck", DominionDeckHtmlElement);
window.customElements.define("dominion-player", DominionPlayerHtmlElement);
window.customElements.define("player-container", DominionPlayersHtmlElement);
window.customElements.define("custom-button", CustomButtonHtmlElement);
window.customElements.define("reset-button", ResetButtonHtmlElement);
window.customElements.define("download-button", DownloadButtonHtmlElement);
window.customElements.define("game-number", DominionGameNumberHtmlElement);
window.customElements.define("upload-container", UploadContainerHtmlElement);