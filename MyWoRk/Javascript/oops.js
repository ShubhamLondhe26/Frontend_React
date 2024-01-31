class StudentDetails{

    //Class Data members

    stdid = 101;
    stdnname = "Shubham";
    stdcontact = 8888;
    single = true;

    //constructor

    constructor(id, name, contact, status){
        this.stdid = id;
        this.stdnname = name;
        this.stdcontact = contact;
        this.status = status;
    }

    //Member function

    stdDetails(){
        console.log(`Id: ${this.stdid} Name:${this.stdnname} Contact:${this.stdcontact} Single:${this.single}`);

    }
}

//how to create object of class

// let stdobj = new StudentDetails();
// console.log(stdobj.stdid, stdobj.stdid);
// stdobj.stdDetails();

let stdobj1 = new StudentDetails(102,"Shubham",8888,true);
stdobj1.stdDetails();


let stdobj2 = new StudentDetails(103,"Akansha",9999,true);
stdobj2.stdDetails();


let stdobj3 = new StudentDetails(104,"Mahesh",7777,true);
stdobj3.stdDetails();