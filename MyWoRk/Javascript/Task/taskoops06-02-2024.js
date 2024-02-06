class Student {
  constructor(id, name, contact) {
    this.stdid = id;
    this.stdname = name;
    this.stdcontact = contact;
  }

  stddetails() {
    console.log(
      `Student ID: ${this.stdid} Student Name: ${this.stdname} Student Contact: ${this.stdcontact}`
    );
  }
}

class Result extends Student {
  constructor(id, name, contact, phy, chem, math) {
    super(id, name, contact);
    this.physics = phy;
    this.chemistry = chem;
    this.maths = math;
    this.total = this.physics + this.chemistry + this.maths;
  }
//   totalmarks() {
//     console.log(this.total = this.physics+this.chemistry+this.maths)
//   }
  stddetails() {
    console.log(
      `Student ID: ${this.stdid} Student Name: ${this.stdname} Student Contact: ${this.stdcontact} Physics: ${this.physics} Chemistry: ${this.chemistry} Maths: ${this.maths} Total Marks: ${this.total}`
    );
  }
}

let resobj = new Result(1,"Shubham",1234567890,99,99,99);
resobj.stddetails();

// let sobj = new Student(1,"Shubham",1234567890);
// sobj.stddetails();
