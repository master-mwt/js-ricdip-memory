import {clearImageInHTMLElement, setImageInHTMLElement, setStyle} from '../utils/helpers';

let Card = function (id, frontCard, backCard) {
    let div;
    let front, back;
    let _this = this;

    // init function
    let init = (function () {

        //
        // init variables and bind listeners
        //
        div = document.createElement('div');
        front = document.createElement('div');
        back = document.createElement('div');
        div.appendChild(front);
        div.appendChild(back);

        // set id, frontCard, backCard
        if (!!id && !!frontCard && !!backCard) {
            this.setId(id);
            this.setImages(frontCard, backCard);
        } else {
            throw "Missing required parameters";
        }

        // binding listeners and events
        div.addEventListener('mouseover', listenerFunctionOver, false);
        div.addEventListener('mouseout', listenerFunctionOut, false);
        div.addEventListener('chosen', listenerFunctionChosen, false);
        div.addEventListener('reject', listenerFunctionReject, false);

        // set card style
        setStyle(div, {
            // style here
            'height': '120px',
            'width': '90px',
            'display': 'inline-block',
            'border': '.8px solid grey',
            'margin': '5px',
            'position': 'relative',
            'transform-style': 'preserve-3d',

            'transition': 'transform .6s',
            '-webkit-transition': 'transform .6s',
            '-moz-transition': 'transform .6s',
            '-o-transition': 'transform .6s',
            '-ms-transition': 'transform .6s',
        });

        setStyle(back, {
            'height': '100%',
            'width': '100%',

            'backface-visibility': 'hidden',
            '-webkit-backface-visibility': 'hidden',
            '-moz-backface-visibility': 'hidden',
            '-o-backface-visibility': 'hidden',
            '-ms-backface-visibility': 'hidden',
        });

        setStyle(front, {
            'position': 'absolute',
            'height': '100%',
            'width': '100%',

            'backface-visibility': 'hidden',
            '-webkit-backface-visibility': 'hidden',
            '-moz-backface-visibility': 'hidden',
            '-o-backface-visibility': 'hidden',
            '-ms-backface-visibility': 'hidden',

            'transform': 'rotateY(180deg)',
            '-webkit-transform': 'rotateY(180deg)',
            '-moz-transform': 'rotateY(180deg)',
            '-o-transform': 'rotateY(180deg)',
            '-ms-transform': 'rotateY(180deg)',
        });

    }).bind(this);
    // end init function


    //
    // card functions creation
    //
    this.attach = function (parentElem) {
        parentElem.appendChild(div);
    };

    this.detach = function () {
        // clear card images
        clearImageInHTMLElement(front);
        clearImageInHTMLElement(back);

        setStyle(div, {
            'border': 'none',
        });

        removeHoverEffect();
        div.removeEventListener('chosen', listenerFunctionChosen);
        div.removeEventListener('reject', listenerFunctionReject);
        removeClickEffect();

        div.setAttribute('removed', 'removed');
    };

    this.setImages = function (frontCard, backCard) {
        div.setAttribute('cardimage', frontCard.name);

        setImageInHTMLElement(back, backCard);
        setImageInHTMLElement(front, frontCard);
    };

    this.setId = function (id) {
        this.id = id;
        div.setAttribute('id', this.id);
    };

    this.handleEvent = function (eventType, callBack) {
        // attach ONLY one event to a card
        if(this.attachedHandler){
            throw "An event is already handled";
        }
        this.attachedEvent = eventType;
        this.attachedHandler = callBack.bind(null, _this);

        div.addEventListener(this.attachedEvent, this.attachedHandler, false);
    };

    this.removeHandledEvent = function () {
        div.removeEventListener(this.attachedEvent, this.attachedHandler);

        this.attachedEvent = undefined;
        this.attachedHandler = undefined;
    };


    //
    // behavioural functions
    //
    let chosen = function () {
        hoverEffect();
        div.removeEventListener('mouseover', listenerFunctionOver);
        div.removeEventListener('mouseout', listenerFunctionOut);
        clickEffect();
    };

    let reject = function () {
        removeHoverEffect();
        div.addEventListener('mouseover', listenerFunctionOver, false);
        div.addEventListener('mouseout', listenerFunctionOut, false);
        removeClickEffect();
    };


    // listeners functions definition
    let listenerFunctionOver = () => {
        hoverEffect();
    };

    let listenerFunctionOut = () => {
        removeHoverEffect();
    };

    let listenerFunctionChosen = () => {
        chosen();
    };

    let listenerFunctionReject = () => {
        reject();
    };


    //
    // graphical effects functions
    //

    // click effect functions
    let clickEffect = () => {
        setStyle(div, {
            'transform': 'scale(.97)',
            '-webkit-transform': 'scale(.97)',
            '-moz-transform': 'scale(.97)',
            '-o-transform': 'scale(.97)',
            '-ms-transform': 'scale(.97)',
        });
        flip();
    };

    let removeClickEffect = () => {
        setStyle(div, {
            'transform': 'none',
            '-webkit-transform': 'none',
            '-moz-transform': 'none',
            '-o-transform': 'none',
            '-ms-transform': 'none',
        });
    };

    // flip effect
    let flip = () => {
        setStyle(div, {
            'transform': 'rotateY(180deg)',
            '-webkit-transform': 'rotateY(180deg)',
            '-moz-transform': 'rotateY(180deg)',
            '-o-transform': 'rotateY(180deg)',
            '-ms-transform': 'rotateY(180deg)',
        });
    };

    // hover effect functions
    let hoverEffect = () => {
        setStyle(div, {
            'transform': 'scale(1.1)',
            '-webkit-transform': 'scale(1.1)',
            '-moz-transform': 'scale(1.1)',
            '-o-transform': 'scale(1.1)',
            '-ms-transform': 'scale(1.1)',
        });
    };

    let removeHoverEffect = () => {
        setStyle(div, {
            'transform': 'scale(1)',
            '-webkit-transform': 'scale(1)',
            '-moz-transform': 'scale(1)',
            '-o-transform': 'scale(1)',
            '-ms-transform': 'scale(1)',
        });
    };

    // call to init
    init();
};

export default Card;
