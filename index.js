function MarksIntoGPA(marks){
    
        if( marks>=85){
            return 4;
        }
        else if( 80<=marks<=84){
            return 3.7;
        }
        else if (75<=marks<=85){
            return 3.4;
        }
        else if( 70<=marks<=74){
            return 3;
        }
        else if (67<=marks<=69){
            return 2.7;
        }
        else if (66<=marks<=64){
            return 2.4;
        }
        else if (60<=marks<=63){
            return 2;
        }
        else if (57<=marks<=59){
            return 1.7;
        }
        else if (54<=marks<=56){
            return 1.4;
        }
        else if (66<=marks<=64){
            return 1;
        } 
        else{
            return 0;
    }
}

function CalculateCourseGPA(creditHours,GPA) {
    return Number(creditHours*GPA);
}

function CalculateCGPA(x,totalCreditHours) {
    const sum =x.reduce((partialSum, a) => partialSum + a, 0);
    return  Number(sum/totalCreditHours);
}

function StoreValue() {
        GPA=[];
        courses=[];
        courseCreditHours=[] ;
        for(i=1;i<=5;i++){
        //for marks
        marksIds ="m"+i;
        let marksValue=document.getElementById(marksIds).value;
        GPA.push(MarksIntoGPA( marksValue));
        //for courses
        courseIds="c"+i;
        let courseValue=document.getElementById(courseIds).value;
        courses.push(courseValue);
        //for CreditHours
        CreditHoursIds="ch"+i;
        let CreditHoursValue=document.getElementById(CreditHoursIds).value;
        courseCreditHours.push(Number(CreditHoursValue));

    }

    CGPA=[];
    for(i=0;i<5;i++){
        CGPA.push(CalculateCourseGPA(courseCreditHours[i],GPA[i]));
    }
    const sum = courseCreditHours.reduce((partialSum, a) => partialSum + a, 0);    
    
    console.log(GPA);
    console.log(courseCreditHours);
    console.log(courses);
    console.log(CGPA);
    console.log(sum);


    t=CalculateCGPA(CGPA,sum);

    document.getElementById("demo").innerHTML="your CGPA is : "+t;
    console.log(t);
}