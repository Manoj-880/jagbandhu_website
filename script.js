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
    eventCard.classList.add('event-card', 'col-sm-12', 'col-md-3',card.class)

    eventCard.innerHTML = `
        <div class="card-image">
        <img src="${card.image}" alt="" class="col-7">
        </div>
        <h3 class="card-head">${card.heading}</h3>
        <p class="card-des">${card.description}</p>
    `;

    aboutCard.appendChild(eventCard);
})


// features list

const featuresContainer = document.querySelector('.features');

const features = [
    {
        icon: 'assets/tree.png',
        heading: 'Family Tree',
        description: 'Trace lineage, document generations, preserve heritage, explore family connections.',
    },
    {
        icon: 'assets/event.png',
        heading: 'Event Managment',
        description: "Seamless event planning and coordination with Jagbandhu's intuitive features.",
    },
    {
        icon: 'assets/invitation.png',
        heading: 'Digital Invitations',
        description: 'Find invitations in marketplace, customize with event details on Jagbandhu.',
    },
    {
        icon: 'assets/circles.png',
        heading: 'Circles',
        description: "Categorize connections, enhance communication, and personalize interactions with Jagbandhu's circles.",
    },
    {
        icon: 'assets/gallery.png',
        heading: 'Event Gallery',
        description: "Share event media with invited circles through Jagbandhu's Event Gallery feature.",
    },
    {
        icon: 'assets/language.png',
        heading: 'Language Support',
        description: 'Multi-language support for seamless usage and enhanced accessibility in Jagbandhu.',
    },
    {
        icon: 'assets/lock.png',
        heading: 'App Security',
        description: 'Secure your app with AppLock for added privacy and protection.',
    },
    {
        icon: 'assets/help & support.png',
        heading: 'Help & Support',
        description: 'Accessible help and support for any assistance within Jagbandhu app.',
    },
]

features.forEach(feature => {
    const featureComponent = document.createElement('div');
    featureComponent.classList.add('feature-component', 'col-5');

    featureComponent.innerHTML = `
        <div class="feature_icon">
            <img src="${feature.icon}" alt="" class="col-5">
        </div>
        <div class="feature-list-content col-8">
            <div class="feature-heading col-sm-12">
                <p>
                    ${feature.heading}
                </p>
            </div>
            <div class="feature-description col-sm-12">
                <p>
                    ${feature.description}
                </p>
            </div>
        </div>
    `;

    featuresContainer.appendChild(featureComponent);
})