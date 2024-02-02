class Product {

    pid;
    pname;
    pcompany;
    pquantity;

    constructor(id, name, company, quantity){
        this.pid = id;
        this.pname = name;
        this.pcompany = company;
        this.pquantity = quantity;
    }

    prdetails(){
        console.log(`ID:${this.pid} Name:${this.pname} Comapny:${this.pcompany} Quantity:${this.pquantity}`)
    }
}

let probj = new Product(1,"Laptop","Samsung",100);
probj.prdetails();
