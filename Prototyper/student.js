
/*** A class containing a student ***/
/* Author: Oliver T. Vatne Johansen 
   Email: olivat0804@gmail.com */


class Student {
    constructor(name, date1, date2) {
      this.name = name;
      this.date1 = date1;
      this.date2 = date2;
    }

    display(){
        console.log(`Navn: ${this.name}\nForste dugnad: ${this.date1}\nAndre dugnad: ${this.date2}`);
    }
  }