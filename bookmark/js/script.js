const featureContent = [
    {
        img: 'images/illustration-features-tab-1.svg',
        heading: 'Bookmark in one click',
        content:
            'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    },
    {
        img: 'images/illustration-features-tab-2.svg',
        heading: 'Intelligent search',
        content:
            'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    },
    {
        img: 'images/illustration-features-tab-3.svg',
        heading: 'Share your bookmarks',
        content:
            'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    },
];

const featureHeading = document.querySelectorAll('.feature-heading');

const activateContentFeatures = document.getElementById('activateContentFeatures');
// console.log("activateContentFeatures :",activateContentFeatures)

const orangeActiveLine = document.querySelectorAll('.orange-active-line')
// console.log(orangeActiveLine)

featureHeading.forEach((heading, index) => {
    // console.log(heading, index)
    heading.addEventListener('click', () => {
        const items = featureContent[index]
        // console.log(items)

        activateContentFeatures.innerHTML = `
            <div class="flex flex-col items-center md:items-start justify-between space-y-[130px] md:flex-row md:space-y-0 md:space-x-10">
                <div class="max-w-lg relative">
                    <img src=${items.img} alt="illustration-features-tab-1.svg" class="z[10]">
                    <div class="lg:blue-cylinder-left-rounded rounded-r-full absolute -left-[490px] top-[180px] -z-[10]"></div>
                </div>
                <div class="flex flex-col space-y-8 pr-10">
                    <h2 class="text-center md:text-left">${items.heading}</h2>
                    <p class="text-center md:text-left max-w-sm">${items.content}</p>
                    <button class="capitalize btn-blue px-6 py-2 border-2 border-softBlue rounded-md hover:bg-white hover:text-softBlue font-semibold">
                        More info
                    </button>
                </div>
            </div>
        `
        orangeActiveLine.forEach((item, i) => {
            // console.log(item, i)
            if (i === index) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })
    })
})

const accrodianContent = [
    {
        question: 'What is Bookmark?',
        answer: 'Bookmark is a lightweight browser extension that lets you organize, save, and manage your favorite websites in one place. It helps you quickly access and categorize bookmarks for faster browsing.',
        img: './images/icon-arrow.svg'
    },
    {
        question: 'How can I request a new browser?',
        answer: 'If your browser isn’t supported yet, you can send us a feature request through our contact form. We’re always open to adding support for more browsers based on user demand.',
        img: './images/icon-arrow.svg'
    },
    {
        question: 'Is there a mobile app?',
        answer: 'Currently, Bookmark is only available as a browser extension. However, we’re actively working on a mobile version that will let you sync your saved bookmarks across all your devices.',
        img: './images/icon-arrow.svg'
    },
    {
        question: 'What about other Chromium browsers?',
        answer: 'Bookmark works perfectly with most Chromium-based browsers like Microsoft Edge, Brave, and Opera. Just install it from your browser’s web store and you’re good to go.',
        img: './images/icon-arrow.svg'
    }
];

const accrodian = document.getElementById('accrodian');

accrodian.innerHTML = '';

accrodianContent.forEach((faq, i) => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('py-4', 'border-b', 'border-gray-300', 'flex', 'flex-col', 'space-y-4');

    faqItem.innerHTML = `
        <div class="flex flex-col">
            <div class="">
                <div class="faq-question flex justify-between items-center font-semibold cursor-pointer mr-1 hover:text-softRed text-sm">
                    <a>${faq.question}</a>
                    <img src=${faq.img} alt="" class="arrow transition-transform duration-300">
                </div>
            </div>
            <p class="faq-answer hidden text-gray-500">${faq.answer}</p>
        </div>
        <div class="white-line"></div>
    `;
    faqItem.querySelector('.faq-question').addEventListener('click', () => {
        const answer = faqItem.querySelector('.faq-answer');
        // console.log(answer)

        const arrow = document.querySelectorAll('.arrow')
        // console.log(arrow)

        arrow.forEach((arrowUP, index) => {
            console.log("index :", index)
            if (index === i) {
                arrowUP.classList.toggle('arrow-up')
            }
        })
        answer.classList.toggle('hidden');
    });
    accrodian.appendChild(faqItem);
});



const open = document.getElementById('open')
// console.log(open)

const whiteLogo = document.getElementById('white-logo')
// console.log(whiteLogo)

const hamburgerContentOpen = document.getElementById('hamburger-content-open')
// console.log(hamburgerContentOpen)

const hamburger = document.getElementById('hamburger')
// console.log(hamburger)

open.addEventListener('click', () => {
    const isOpen = open.classList.toggle('open')
    open.classList.toggle('fixed')
    // console.log(isOpen)

    hamburger.classList.toggle('px-20')
    // whiteLogo.classList.add('text-white')
    hamburgerContentOpen.classList.toggle('hidden')

    if (isOpen) {
        logoImgDynamic.innerHTML = `
            <img src="./images/logo-bookmark-footer.svg" alt="logo-bookmark.svg">
        `
    } else {
        logoImgDynamic.innerHTML = `
            <img src="./images/logo-bookmark.svg" alt="logo-bookmark.svg">
        `
    }
})


const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        console.log(targetId)

        const targetSection = document.querySelector(targetId);
        console.log(targetId)

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
