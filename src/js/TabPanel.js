class TabPanel {
    constructor(tabPanel) {
        this.tabPanel = tabPanel;
        this.tabs = [];
        this.activeTab = null;

        this.init();
        this.activateTab(0);
    }

    init() {
        const headerItems = this.tabPanel.querySelectorAll('.tab-bar .tab-bar__tab');
        const contentItems = this.tabPanel.querySelectorAll('.tab-panel__content-item');

        for (let i = 0; i < headerItems.length; ++i) {
            const tab = new TabItem(headerItems[i], contentItems[i]);
            this.tabs.push(tab);

            tab.onChange((index) => this.activateTab(index));
        }
    }

    activateTab(index) {
        if (this.activeTab) {
            this.activeTab.deactivate();
        }

        let tab = this.tabs[index];
        tab.activate();
        this.activeTab = tab;
    }
}

class TabItem {
    constructor(tab, content) {
        this.tab = tab;
        this.content = content;
    }

    onChange(callback) {
        let radioButton = this.tab.querySelector('.tab-bar__radio-button');

        radioButton.addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    activate() {
        this._toggle(true);
    }

    deactivate() {
        this._toggle(false);
    }

    _toggle(value) {
        this.tab.classList.toggle('checked', value);
        this.content.classList.toggle('active', value);
    }
}

export default TabPanel;
