
function createPlaceholder(amount = 1, keywords = ['art']) {
    for (let i = 0; i < amount; i++) {

        const paintingWrapper = document.createElement('li');
        paintingWrapper.classList.add('painting-wrapper');

        const imgWrapper = document.createElement('figure');
        imgWrapper.classList.add('img-wrapper');

        const paintingDetails = document.createElement('div');
        paintingDetails.classList.add('painting-details');

        const paintingImg = document.createElement('img');
        paintingImg.classList.add('painting-img');
        paintingImg.src = createImageLink(keywords);

        imgWrapper.appendChild(paintingImg);
        paintingWrapper.appendChild(imgWrapper);
        paintingWrapper.appendChild(paintingDetails);

        document.querySelector('.paintings-list').appendChild(paintingWrapper)
    }
}

function createImageLink(keywordsArray) {
    let keywords = '?';
    keywordsArray.forEach(keyword => {
        keywords += `${keyword},`;
    })
    let size = getRandomInt(200, 500)
    return `https://source.unsplash.com/random/${size}${keywords}`;
}

function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
