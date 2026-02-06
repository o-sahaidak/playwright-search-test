class GooglePage {
    constructor (page){
        this.page = page;
    }

    async link(url){
        await this.page.goto(url);
    }

    async search(searchTerm) {
        await this.page.locator('.gLFyf').fill(searchTerm);
        await this.page.locator('.gNO89b').first().click();
    }

    async captcha(){
        console.log('Solve the CAPTCHA manually and then press Resume(F8)');
        await this.page.pause();
    }

}

module.exports = GooglePage;