class Product {
    constructor(public name:string){}

    toString(){
        return `${this.name}`;
    }
}

(()=>{
    const bluePants = new Product('Blue Large Pants');
    console.log(bluePants.toString());
})();