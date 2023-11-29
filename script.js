const menu = document.querySelector('.menu');
var isopen = false;

menu.addEventListener('click' , function () {
    isopen = !isopen;
});

// about cards
const about_card_data = [
    {
        image: 'assets/event.png',
        heading: 'Event Managment',
        description: "Effortlessly manage events with Jagbandhu's intuitive app. Plan, coordinate, and stay updated. Simplify event management and stay in control.",
        class: 'event',
    },
    {
        image: 'assets/tree icon.png',
        heading: 'Build Family Tree',
        description: "Discover and document your family tree with Jagbandhu. Trace ancestral lineage, connect generations, and preserve your heritage with ease.",
        class: 'tree',
    },
    {
        image: 'assets/group icon.png',
        heading: 'Circle Your Users',
        description: "Jagbandhu lets you create circles to categorize friends and family, enabling efficient communication and personalized interactions within each group.",
        class: 'circle'
    },
]
const aboutCard = document.querySelector('.abt-cards');

about_card_data.forEach(card => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card', 'col-12', 'col-md-3',card.class)

    eventCard.innerHTML = `
        <div class="card-image">
        <img src="${card.image}" alt="" class="col-7">
        </div>
        <h3 class="card-head">${card.heading}</h3>
        <p class="card-des">${card.description}</p>
    `;

    aboutCard.appendChild(eventCard);
})
