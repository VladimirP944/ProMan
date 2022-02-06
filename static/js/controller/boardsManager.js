import { dataHandler } from "../data/dataHandler.js";
import { htmlFactory, htmlTemplates } from "../view/htmlFactory.js";
import { domManager } from "../view/domManager.js";
import { cardsManager } from "./cardsManager.js";
import { statusesManager } from "./statusesManager.js";


export let boardsManager = {
  loadBoards: async function () {
    const boards = await dataHandler.getBoards();
    for (let board of boards) {
      const boardBuilder = htmlFactory(htmlTemplates.board);
      const content = boardBuilder(board);
      domManager.addChild("#root", content);
      domManager.addEventListener(
        `.board-toggle[data-board-id="${board.id}"]`,
        "click"
      );
      statusesManager.loadStatuses(board.id)
          .then(value => cardsManager.loadCards(board.id)
              .then(() => cardsManager.initDragAndDrop()))
    }
  },
};


const newBoardButton = document.getElementById("new-board");
newBoardButton.addEventListener("click", async function() {
  let newBoard = await dataHandler.createNewBoard("new-board");
  if (!('status' in newBoard)) {
    const boardBuilder = htmlFactory(htmlTemplates.board);
        const content = boardBuilder(newBoard);
        domManager.addChild("#root", content);
        domManager.addEventListener(
          `.board-toggle[data-board-id="${newBoard.id}"]`,
          "click"
        );
        statusesManager.loadStatuses(newBoard.id)
  }
});

