let currentTimeout = 2100;

// About section entrance
const aboutEntrance = (aboutTitle, aboutDescription, aboutStatus, aboutSocials, aboutImage, aboutSection) => {
    aboutTitle.classList.remove('bounce-out-left');
    aboutDescription.classList.remove('bounce-out-left-d500ms');
    aboutStatus.classList.remove('bounce-out-left-d1000ms');
    aboutSocials.classList.remove('bounce-out-left-d1500ms');
    aboutImage.classList.remove('bounce-out-right-d1500ms');

    aboutTitle.classList.add('bounce-in-left');
    aboutDescription.classList.add('bounce-in-left-d500ms');
    aboutStatus.classList.add('bounce-in-left-d1000ms');
    aboutSocials.classList.add('bounce-in-left-d1500ms');
    aboutImage.classList.add('bounce-in-right');

    aboutSection.classList.add('active');
}

// About section exit
const aboutExit = (aboutTitle, aboutDescription, aboutStatus, aboutSocials, aboutImage, aboutSection) => {
    aboutTitle.classList.remove('bounce-in-left');
    aboutDescription.classList.remove('bounce-in-left-d500ms');
    aboutStatus.classList.remove('bounce-in-left-d1000ms');
    aboutSocials.classList.remove('bounce-in-left-d1500ms');
    aboutImage.classList.remove('bounce-in-right');

    aboutTitle.classList.add('bounce-out-left');
    aboutDescription.classList.add('bounce-out-left-d500ms');
    aboutStatus.classList.add('bounce-out-left-d1000ms');
    aboutSocials.classList.add('bounce-out-left-d1500ms');
    aboutImage.classList.add('bounce-out-right-d1500ms');

    
    setTimeout(() => aboutSection.classList.remove('active'), currentTimeout);
}

// Skill section entrance
const skillEntrance = (skillDescription, skillHTML, skillCSS, skillJS, skillJQuery, skillWP, skillFigma, skillGit, skillSEO, skillOpt, skillAcc, skillSection) => {
    skillDescription.classList.remove('tracking-out-contract');
    skillHTML.classList.remove('bounce-out-top');
    skillCSS.classList.remove('bounce-out-top-d500ms');
    skillJS.classList.remove('bounce-out-top-d1000ms');
    skillJQuery.classList.remove('bounce-out-top-d1500ms');
    skillWP.classList.remove('bounce-out-top-d2000ms');
    skillFigma.classList.remove('bounce-out-bottom-d2000ms');
    skillGit.classList.remove('bounce-out-bottom-d1500ms');
    skillSEO.classList.remove('bounce-out-bottom-d1000ms');
    skillOpt.classList.remove('bounce-out-bottom-d500ms');
    skillAcc.classList.remove('bounce-out-bottom');

    skillDescription.classList.add('tracking-in-expand');
    skillHTML.classList.add('bounce-in-top');
    skillCSS.classList.add('bounce-in-top-d500ms');
    skillJS.classList.add('bounce-in-top-d1000ms');
    skillJQuery.classList.add('bounce-in-top-d1500ms');
    skillWP.classList.add('bounce-in-top-d2000ms');
    skillFigma.classList.add('bounce-in-bottom-d2000ms');
    skillGit.classList.add('bounce-in-bottom-d1500ms');
    skillSEO.classList.add('bounce-in-bottom-d1000ms');
    skillOpt.classList.add('bounce-in-bottom-d500ms');
    skillAcc.classList.add('bounce-in-bottom');

    skillSection.classList.add('active');
}

// skill section exit
const skillExit = (skillDescription, skillHTML, skillCSS, skillJS, skillJQuery, skillWP, skillFigma, skillGit, skillSEO, skillOpt, skillAcc, skillSection) => {
    skillDescription.classList.remove('tracking-in-expand');
    skillHTML.classList.remove('bounce-in-top');
    skillCSS.classList.remove('bounce-in-top-d500ms');
    skillJS.classList.remove('bounce-in-top-d1000ms');
    skillJQuery.classList.remove('bounce-in-top-d1500ms');
    skillWP.classList.remove('bounce-in-top-d2000ms');
    skillFigma.classList.remove('bounce-in-bottom-d2000ms');
    skillGit.classList.remove('bounce-in-bottom-d1500ms');
    skillSEO.classList.remove('bounce-in-bottom-d1000ms');
    skillOpt.classList.remove('bounce-in-bottom-d500ms');
    skillAcc.classList.remove('bounce-in-bottom');

    skillDescription.classList.add('tracking-out-contract');
    skillHTML.classList.add('bounce-out-top');
    skillCSS.classList.add('bounce-out-top-d500ms');
    skillJS.classList.add('bounce-out-top-d1000ms');
    skillJQuery.classList.add('bounce-out-top-d1500ms');
    skillWP.classList.add('bounce-out-top-d2000ms');
    skillFigma.classList.add('bounce-out-bottom-d2000ms');
    skillGit.classList.add('bounce-out-bottom-d1500ms');
    skillSEO.classList.add('bounce-out-bottom-d1000ms');
    skillOpt.classList.add('bounce-out-bottom-d500ms');
    skillAcc.classList.add('bounce-out-bottom');
    
    setTimeout(() => skillSection.classList.remove('active'), currentTimeout);
}

// Experience section entrance
const experienceEntrance = (experienceDescription, experienceList, experienceSection) => {
    experienceDescription.classList.remove('tracking-out-contract');
    experienceList.classList.remove('bounce-out-bottom');

    experienceDescription.classList.add('tracking-in-expand');
    experienceList.classList.add('bounce-in-bottom');

    experienceSection.classList.add('active');
}

// Experience section exit
const experienceExit = (experienceDescription, experienceList, experienceSection) => {
    experienceDescription.classList.remove('tracking-in-expand');
    experienceList.classList.remove('bounce-in-bottom');

    experienceDescription.classList.add('tracking-out-contract');
    experienceList.classList.add('bounce-out-bottom');
    
    setTimeout(() => experienceSection.classList.remove('active'), currentTimeout);
}

// Contact section entrance
const contactEntrance = (contactDescription, contactEmail, contactTel, contactOtherDesc, contactLinkedIn, contactGit, contactSection) => {
    contactDescription.classList.remove('tracking-out-contract');
    contactEmail.classList.remove('bounce-out-bottom-d2000ms');
    contactTel.classList.remove('bounce-out-bottom-d1500ms');
    contactOtherDesc.classList.remove('bounce-out-bottom-d1000ms');
    contactLinkedIn.classList.remove('bounce-out-bottom-d500ms');
    contactGit.classList.remove('bounce-out-bottom');

    contactDescription.classList.add('tracking-in-expand');
    contactEmail.classList.add('bounce-in-bottom');
    contactTel.classList.add('bounce-in-bottom-d500ms');
    contactOtherDesc.classList.add('bounce-in-bottom-d1000ms');
    contactLinkedIn.classList.add('bounce-in-bottom-d1500ms');
    contactGit.classList.add('bounce-in-bottom-d2000ms');

    contactSection.classList.add('active');
}

// Contact section entrance
const contactExit = (contactDescription, contactEmail, contactTel, contactOtherDesc, contactLinkedIn, contactGit, contactSection) => {
    contactDescription.classList.remove('tracking-in-expand');
    contactEmail.classList.remove('bounce-in-bottom');
    contactTel.classList.remove('bounce-in-bottom-d500ms');
    contactOtherDesc.classList.remove('bounce-in-bottom-d1000ms');
    contactLinkedIn.classList.remove('bounce-in-bottom-d1500ms');
    contactGit.classList.remove('bounce-in-bottom-d2000ms');

    contactDescription.classList.add('tracking-out-contract');
    contactEmail.classList.add('bounce-out-bottom-d2000ms');
    contactTel.classList.add('bounce-out-bottom-d1500ms');
    contactOtherDesc.classList.add('bounce-out-bottom-d1000ms');
    contactLinkedIn.classList.add('bounce-out-bottom-d500ms');
    contactGit.classList.add('bounce-out-bottom');
    
    setTimeout(() => contactSection.classList.remove('active'), currentTimeout);
}

// Menu link
let currentName = 'About';

const menuClick = (thisButton, name = 'About') => {
    // Section variables
    const aboutSection = document.getElementById('about');
    const skillSection = document.getElementById('skills');
    const experienceSection = document.getElementById('experience');
    const contactSection = document.getElementById('contact');
    const mainContentSection = document.querySelectorAll('.eMainContentSection');

    // About section
    const aboutTitle = document.getElementById('eAboutTile');
    const aboutDescription = document.getElementById('eAboutDescription')
    const aboutStatus = document.getElementById('eAboutStatus');
    const aboutSocials = document.getElementById('eAboutSocials');
    const aboutImage = document.getElementById('eAboutImage');

    //Skill section
    const skillDescription = document.getElementById('eSkillsDescription');
    const skillHTML = document.getElementById('eHTMLSkill');
    const skillCSS = document.getElementById('eCSSSkill');
    const skillJS = document.getElementById('eJSSkill');
    const skillJQuery = document.getElementById('eJQuerySkill');
    const skillWP = document.getElementById('eWPSkill');
    const skillFigma = document.getElementById('eFigmaSkill');
    const skillGit = document.getElementById('eGitSkill');
    const skillSEO = document.getElementById('eSEOSkill');
    const skillOpt = document.getElementById('eOptSkill');
    const skillAcc = document.getElementById('eAccSkill');

    //Experience section
    const experienceDescription = document.getElementById('eExpDesc');
    const experienceList = document.getElementById('eExpList');

    // Contact section
    const contactDescription = document.getElementById('eContactDesc');
    const contactEmail = document.getElementById('eContactEmail');
    const contactTel = document.getElementById('eContactTel');
    const contactOtherDesc = document.getElementById('eContactOtherDesc');
    const contactLinkedIn = document.getElementById('eContactLinkedIn');
    const contactGit = document.getElementById('eContactGit');

    const allSections = () => {
        mainContentSection.forEach((elements) => {
            elements.classList.remove('active');
            elements.classList.add('inactive');
        });
    }
    
    const menuButtons = () => {
        const menuItem = document.querySelectorAll('.menu__item-button');
        const menuText = document.querySelectorAll('.menu__text-wrapper');

        menuItem.forEach((elements) => {
            elements.classList.remove('active');
        });

        menuText.forEach((elements) => {
            elements.classList.remove('swing-in-top-fwd');
        });

        thisButton.classList.add('active');
    }
    
    console.log(`Current name is ${currentName}`);
    console.log(`Name is ${name}`);

    if (currentName == name) {
        return false;
    } else if (currentName == 'About') {
        aboutExit(aboutTitle, aboutDescription, aboutStatus, aboutSocials, aboutImage, aboutSection);

        currentTimeout = 2100;
    } else if (currentName == 'Skills') {
        skillExit(skillDescription, skillHTML, skillCSS, skillJS, skillJQuery, skillWP, skillFigma, skillGit, skillSEO, skillOpt, skillAcc, skillSection);

        currentTimeout = 2100;

        menuButtons();
    } else if (currentName == 'Experience') {
        experienceExit(experienceDescription, experienceList, experienceSection);

        currentTimeout = 500;
    } else if (currentName == 'Contact') {
        contactExit(contactDescription, contactEmail, contactTel, contactOtherDesc, contactLinkedIn, contactGit, contactSection);

        currentTimeout = 2100;
    }

    if (currentName == name) {
        console.log(`${currentName} is same to ${name}`);

        return false;
    } else if (name == 'About') {
        setTimeout(() => {
            allSections();
            aboutSection.classList.remove('inactive');
            aboutSection.classList.add('active');

            aboutEntrance(aboutTitle, aboutDescription, aboutStatus, aboutSocials, aboutImage, aboutSection);

            menuButtons();
        }, currentTimeout);
    } else if (name == 'Skills') {
        setTimeout(() => {
            allSections();
            skillSection.classList.remove('inactive');
            skillSection.classList.add('active');

            skillEntrance(skillDescription, skillHTML, skillCSS, skillJS, skillJQuery, skillWP, skillFigma, skillGit, skillSEO, skillOpt, skillAcc, skillSection);

            menuButtons();
        }, currentTimeout);
    } else if (name == 'Experience') {
        setTimeout(() => {
            allSections();
            experienceSection.classList.remove('inactive');
            experienceSection.classList.add('active');

            experienceEntrance(experienceDescription, experienceList, experienceSection);

            menuButtons();
        }, currentTimeout);
    } else if (name == 'Contact') {
        setTimeout(() => {
            allSections();
            contactSection.classList.remove('inactive');
            contactSection.classList.add('active');
            
            contactEntrance(contactDescription, contactEmail, contactTel, contactOtherDesc, contactLinkedIn, contactGit, contactSection);

            menuButtons();
        }, currentTimeout);
    }
    
    currentName = name;
}

// Menu Link hover and active event
const menuMouseenter = (element) => {
    const menuText = element.querySelectorAll('.menu__text-wrapper');
    
    menuText.forEach((menu) => {
        menu.classList.remove('swing-out-top-bck');
        menu.classList.add('swing-in-top-fwd');
    });
}

const menuMouseout = (element) => {
    const menuText = element.querySelectorAll('.menu__text-wrapper');
    
    menuText.forEach((menu) => {
        menu.classList.remove('swing-in-top-fwd');
        menu.classList.add('swing-out-top-bck');
    });
}