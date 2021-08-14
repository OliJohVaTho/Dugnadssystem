"use strict"
include("student.js")

/*** A scanner to read meta data ***/
/* Author: Oliver T. Vatne Johansen 
   Email: olivat0804@gmail.com */



//The array which all the student-objects are located.
let students = [];



fetch("metadata.csv").then(response => response.text()).then(text => createStudents(text, students))






/* Args:
   text: Input text with student meta data
   students: array where the students will be placed */
const createStudents = function(text, students){
   const line = text.split("\n"); 
   
   for(let i = 0; i < line.length; i++){
      const meta = line[i].split(",");
      students.push(new Student(meta[0], meta[1], meta[2]));
   }   

}


function include(file) {
  
   var script  = document.createElement('script');
   script.src  = file;
   script.type = 'text/javascript';
   script.defer = true;
   
   document.getElementsByTagName('head').item(0).appendChild(script);
}
