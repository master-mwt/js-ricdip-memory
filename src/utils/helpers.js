//
// Useful utilities
//

let setStyle = function (item, style) {
    for (let property in style) {
        item.style[property] = style[property];
    }
};

let clearHTML = function (item) {
    while (item.hasChildNodes()) {
        item.firstChild.remove();
    }
};

let printTime = function (time) {
    if (time > 9) {
        return "" + time;
    } else {
        return "0" + time;
    }
};

let setImageInHTMLElement = function (HTMLElement, image) {
    HTMLElement.style.backgroundImage = `url('${image.url}')`;
    HTMLElement.style.backgroundSize = '100% 100%';
    HTMLElement.style.backgroundRepeat = 'no-repeat';
    HTMLElement.backgroundPosition = 'center';
};

let clearImageInHTMLElement = function (HTMLElement) {
    HTMLElement.style.backgroundImage = 'none';
};

/**
 * A timer that counts the played time
 *
 * @param HTMLTimeP HTMLElement in which the time is printed
 * @constructor
 */
let TimeCounter = function (HTMLTimeP) {
    let lastTime;
    let startTime;

    let updateTime = function () {
        let now = new Date();
        let difference = new Date(now - startTime);
        lastTime = difference;
        let playTimeMinutes = difference.getMinutes();
        let playTimeSeconds = difference.getSeconds();
        HTMLTimeP.innerText = 'Time: ' + printTime(playTimeMinutes) + ':' + printTime(playTimeSeconds);
    };

    // functions
    this.start = function () {
        startTime = new Date();

        updateTime();
        setInterval(updateTime, 1000);

        return startTime;
    };

    this.stop = function () {
        clearInterval(updateTime);

        return lastTime;
    };
};

/**
 * A possible implementation of Fisher-Yates shuffle algorithm
 *
 * Algorithm:
 * -- To shuffle an array a of n elements (indices 0..n-1):
 * for i from 0 to n−2 do
 *    j ← random integer such that i ≤ j < n
 * exchange a[i] and a[j]
 */
let shuffle = function (array) {
    let result = array;

    let length = result.length;
    let j, tmp;
    for (let i = 0; i < length - 1; i++) {
        j = Math.floor((Math.random() * (length - i)) + i);
        tmp = result[i];
        result[i] = result[j];
        result[j] = tmp;
    }
    return result;
};

export {
    setStyle,
    clearHTML,
    printTime,
    setImageInHTMLElement,
    clearImageInHTMLElement,
    TimeCounter,
    shuffle,
};