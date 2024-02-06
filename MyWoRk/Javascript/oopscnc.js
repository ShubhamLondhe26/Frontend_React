class Product{

    constructor(id,name){
        this.pid = id;
        this.name = name;
    }

    productdetail(){
        console.log(`Product ID: ${this.pid} Produt Name: ${this.name}`)
    }
}

class Company extends  Product{
    constructor (id,name,Cname,Addrs){
        super(id,name);
        this.Cnames = Cname;
        this.addresss = Addrs
    }
    productdetail1(){
        console.log(`Product ID: ${this.pid} Produt Name: ${this.name} Company: ${this.Cnames} Address: ${this.addresss}`)
    }
}

let cobj = new Company(1,"LAptop","Asus","Pune");
cobj.productdetail1();
// let pobj = new Product(1,"Asus");
// pobj.productdetail()

