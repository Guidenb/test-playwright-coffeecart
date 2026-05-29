class Mainmenu {
    constructor(page) {
        this.page = page;
    }

    get menupage(){
        return this.page.getByRole('link', { name: 'Menu' });
    }
    
      selectmenu(menuName){
        return this.page.locator(`.cup-body[data-test="${menuName}"]`);
    }

    get promotionmenu(){
            return this.page.locator('button.yes');
    }
    
    get skippromotionmenu(){
            return this.page.getByText("Nah, I'll skip.");
        }

    //action
    async clickmenu(){
        await this.menupage.click();
    }

    async clickselectmenu(menuName){
       await this.selectmenu(menuName).click();
    }

    async clickpromo(){
        await this.promotionmenu.click();
    }

    async clickskippromo(){
        await this.skippromotionmenu.click();
    }
}
module.exports = Mainmenu;