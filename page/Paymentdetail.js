class Paymentdetail {
    constructor(page) {
        this.page =page;
    }

    get buttontotal(){
        return this.page.locator('button.pay');
    }
    
    get fieldsname(){
        return this.page.locator('#name');
    }

    get fieldsemail(){
        return this.page.locator('#email');
    }

    get buttonsubmit(){
        return this.page.getByRole('button',{name:'Submit'});
    }

    get successmessage(){
        return this.page.locator('//div[@role="button"]');
    }

    //method

    async ClickTotal(){
        await this.buttontotal.click();
    }

    async Name(name){
        await this.fieldsname.fill(name);
    }

    async Email(email){
        await this.fieldsemail.fill(email);
    }

    async ClickSubmit(){
        await this.buttonsubmit.click();
    }
}
module.exports = Paymentdetail;