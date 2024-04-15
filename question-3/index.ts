// //Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.

const student={//create an object
    name:"Huma Mohsin",
    course:"Generative Artificial Intelligence",
    duration:"1 year",
    prerequisite:"None",
    greet:function(){//this in traditional function inside an object
        console.log("Welcome To Governor's IT Intiative," + this.name)
    }
};
student.greet();

//again creating an object and inside an object now we are going to create an arrow function.

const faculty={
    name:"Asim",
    assigned_course:"Generative Artificial Intelligence",
    skillsNeeded : [
        "Deep Understanding of Artificial Intelligence",
        "Expertise in Generative Models",
        "Programming Skills",
        "Mathematical Foundations",
        "Experience with AI Applications",
        "Creativity and Innovation",
        "Effective Communication Skills",
        "Problem-Solving Skills",
        "Continuous Learning",
        "Ethical Considerations"
    ],
    announcement:()=>{
        console.log("Hello, " + this.assigned_course);
        console.log("you have following skills to teach Generative Artificial Intelligence  " +  this.skillsNeeded);
        
        
    }
}

faculty.announcement();
//Author-Huma Mohsin