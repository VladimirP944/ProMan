import { boardsManager, setContentEditable } from "./controller/boardsManager.js";
import { isUserLoggedIn } from "./data/checkForUser.js";


function init() {
  isUserLoggedIn().then( () => boardsManager.loadBoards().then( () => setContentEditable()));
}

init();





