import { createCard } from './Card.js';

export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    header.appendChild(title);
    section.appendChild(header);

    
    const carousel = document.createElement('div');
    carousel.className = 'carousel';

   
    const btnLeft = document.createElement('button');
    btnLeft.className = 'btn left';
    btnLeft.innerText = '◀';

    
    const btnRight = document.createElement('button');
    btnRight.className = 'btn right';
    btnRight.innerText = '▶';

    
    const row = document.createElement('div');
    row.className = 'movie-row';

    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    
let position = 0;

btnRight.onclick = () => {
    const cardWidth = row.firstChild.offsetWidth + 12;
    const maxScroll = -(row.scrollWidth - carousel.offsetWidth);

    position -= cardWidth;

    
    if (position < maxScroll) {
        position = 0;
    }

    row.style.transform = `translateX(${position}px)`;
};

btnLeft.onclick = () => {
    const cardWidth = row.firstChild.offsetWidth + 12;
    const maxScroll = -(row.scrollWidth - carousel.offsetWidth);

    position += cardWidth;

    
    if (position > 0) {
        position = maxScroll;
    }

    row.style.transform = `translateX(${position}px)`;
};

    
    carousel.appendChild(btnLeft);
    carousel.appendChild(row);
    carousel.appendChild(btnRight);

    section.appendChild(carousel);

    return section;
}

