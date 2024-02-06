class Poly{
    add(){
        let a = 5, b = 6;
        console.log(a + b);
    }
}

class Child extends Poly{
    add1(p,q){
        console.log(p+q);
    }
}

let obj = new Child();
obj.add();
obj.add1(10,20);