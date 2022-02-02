export const htmlTemplates = {
    board: 1,
    card: 2
}

export function htmlFactory(template) {
    switch (template) {
        case htmlTemplates.board:
            return boardBuilder
        case htmlTemplates.card:
            return cardBuilder
        default:
            console.error("Undefined template: " + template)
            return () => { return "" }
    }
}

function boardBuilder(board) {
    return `<section class="board" data-board-id=${board.id}>
                <div class="board-header" data-board-id=${board.id}><span class="board-title"><p id="board-title" contenteditable="true" onkeypress="return (this.innerText.length <= 10)">${board.title}</p></span>
                    <button class="board-add">Add Card</button>
                    <button class="board-toggle hidden" data-board-id="${board.id}"><i class="fas fa-chevron-down"></i></button>
                </div>
            </section>`;
}

function cardBuilder(card) {
    return `<div class="card" data-card-id="${card.id}" data-board-id="${card.board_id}"><p id="card-title" contenteditable="true" onkeypress="return (this.innerText.length <= 10)">${card.title}</p></div>`;
}




 // `<div class="board-container">
 //                <div class="board" data-board-id=${board.id} ><p id="board-title" contenteditable="true" onkeypress="return (this.innerText.length <= 10)">${board.title}</p></div>
 //                <button class="toggle-board-button" data-board-id="${board.id}">Show Cards</button>
 //            </div>`;