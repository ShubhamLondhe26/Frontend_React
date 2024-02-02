class Parent{
    constructor (p,q){
        this.a = p;
        this.b = q;
    }
    add(){
        var  a, b;
        console.log(this.a + this.b);
    }
}
export class Child extends Parent{
    constructor(p, q){
        super(p, q);
    }
    show(){
        this.add();
    
    }
}

var obj = new Child(4,6);
obj.show();


