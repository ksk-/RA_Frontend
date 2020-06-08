class NavigationMenu {
    constructor() {
        this.navigation = document.getElementById('navigation');
        this.hamburger = document.getElementById('hamburger');

        this._init();
    }

    _init() {
        for (let navigation of document.querySelectorAll('.navigation')) {
            for (let link of navigation.querySelectorAll('a')) {
                link.addEventListener('click', () => {
                    if (this._isOpen()) {
                        this._close();
                    }

                    new LinkScroller(link).smoothScrollToSection(500);
                })
            }
        }

        this.hamburger.addEventListener('click', () => {
            this.navigation.classList.toggle('open');
        });
    }

    _isOpen() {
        return this.navigation.classList.contains('open');
    }

    _close() {
        this.navigation.classList.remove('open');
    }
}

class LinkScroller {
    constructor(link) {
        this.link = link;
        const anchor = this.link.getAttribute('href');
        const sectionToScroll = document.querySelector(anchor);
        this.offsetTop = sectionToScroll.offsetTop;
    }

    smoothScrollToSection(duration) {
        $('html, body').animate({ scrollTop: this.offsetTop }, duration);
    }
}

export default NavigationMenu;
