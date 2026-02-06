class GooglePage {
    constructor (page){
        this.page = page;
        this.searchInput = page.locator('.gLFyf');
        this.searchButton = page.locator('.gNO89b').first();
    }

    async link(url){
        await this.page.goto(url);
    }

    async search(searchTerm) {
        await this.searchInput.fill(searchTerm);
        await this.searchButton.click();
    }

    async captcha(){
        console.log('Solve the CAPTCHA manually and then press Resume(F8)');
        await this.page.pause();
    }

}

module.exports = GooglePage;