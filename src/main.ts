class App {
    constructor() {
        this.initialize();
    }

    initialize() {
        window.addEventListener('load', () => {
            this.displayWelcomeMessage();
        });
    }

    displayWelcomeMessage() {
        const messageElement = document.createElement('h1');
        messageElement.textContent = 'Bienvenue sur NerdITools !';
        document.body.appendChild(messageElement);
    }
}

const app = new App();

