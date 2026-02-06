class SearchResult {
    constructor (page){
        this.page = page;
        this.resultTitles = page.locator('h3');
    }

    async titles(){
        return await this.resultTitles.allTextContents();
    }

}


module.exports = SearchResult;