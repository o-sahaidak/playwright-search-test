class SearchResult {
    constructor (page){
        this.page = page;
    }

    async titles(){
        return await this.page.locator('h3').allTextContents();
    }

}


module.exports = SearchResult;