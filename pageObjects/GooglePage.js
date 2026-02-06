class GooglePage {
    constructor (page){
        this.page = page;
        this.searchInput = page.locator('.gLFyf');
        this.searchButton = page.locator('.gNO89b').first();
    }

    async goto(url){
        await this.page.goto(url);
    }

    async search(query) {
        await this.searchInput.fill(query);
        await this.searchButton.click();
    }

    async solveCaptcha(){
        console.log('Solve the CAPTCHA manually and then press Resume(F8)');
        await this.page.pause();
    }

}

module.exports = GooglePage;