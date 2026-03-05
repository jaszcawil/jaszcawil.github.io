// Background Animation
class backgroundAnimationn extends HTMLElement {
    connectedCallback() {
        fetch('./components/background-animation.html')
        .then(response => response.text())
        .then(data => this.innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
    }
}

customElements.define('bg-include', backgroundAnimationn);

// Header
class HeaderComponent extends HTMLElement {
    connectedCallback() {
        fetch('./components/header.html')
        .then(response => response.text())
        .then(data => this.innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
    }
}

customElements.define('header-include', HeaderComponent);

// Footer
class FooterComponent extends HTMLElement {
    connectedCallback() {
        fetch('./components/footer.html')
        .then(response => response.text())
        .then(data => this.innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
    }
}

customElements.define('footer-include', FooterComponent);

// About
class AboutComponent extends HTMLElement {
    connectedCallback() {
        fetch('./components/about.html')
        .then(response => response.text())
        .then(data => this.innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
    }
}

customElements.define('about-include', AboutComponent);

// Skills
class SkillsComponent extends HTMLElement {
    connectedCallback() {
        fetch('./components/skills.html')
        .then(response => response.text())
        .then(data => this.innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
    }
}

customElements.define('skills-include', SkillsComponent);

// Experience
class ExpComponent extends HTMLElement {
    connectedCallback() {
        fetch('./components/experience.html')
        .then(response => response.text())
        .then(data => this.innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
    }
}

customElements.define('experience-include', ExpComponent);

// Contact
class ContactComponent extends HTMLElement {
    connectedCallback() {
        fetch('./components/contact.html')
        .then(response => response.text())
        .then(data => this.innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
    }
}

customElements.define('contact-include', ContactComponent);