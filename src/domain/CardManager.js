import Card from './Card';

let CardManager = function (context) {

    this.cardList = [];
    this.remaining = 0;

    let _this = this;

    //
    // Functions
    //
    this.createCard = function (id, frontCard, backCard) {
        let card = new Card(id, frontCard, backCard);
        this.cardList.push(card);
        this.remaining++;

        card.handleEvent('removeCard', function (card) {
            _this.removeCard(card);
        });

        return card;
    };

    this.removeCard = function (card) {
        let i;
        for (let index in this.cardList) {
            if (this.cardList[index] === card) {
                i = index;
                break;
            }
        }
        this.cardList.splice(i, 1);
        card.detach();
        this.remaining--;
    };

    this.append = function (card) {
        card.attach(context);
    };

};

export default CardManager;