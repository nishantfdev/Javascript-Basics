let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};


console.log(student.age)
console.log(student.address.country)


student.phone = "123-456-7890";
console.log(student)


delete student.grade


student.age = 21


let number = 10
if(number>0)
     console.log("Positive")
else if(number<0)
    console.log("negative")
else if(number==0)
    console.log("Zero")
else
console.log("Invalid Number")


function checkNumber(number){
    if(number>0)
        return "Positive"
    if(number<0)
        return "Negative"
    if(number==0)
        return "Zero"
    else
        return "Invalid Number"
}

console.log(checkNumber(-10))
console.log(checkNumber(10))
console.log(checkNumber(0))
console.log(checkNumber('e'))

score = 90
if(score>=90 && score<=100)
    console.log("A")
else if(score>=80 && score<=89)
    console.log("B")
else if(score>=70 && score<=79)
    console.log("C")
else if(score>=60 && score<=69)
    console.log("D")
else if(score>=0 && score<=59)
    console.log("F")
else
    console.log("Invalid Score")



function checkTruthy(string){
    if(string)
        return "Truthy"
    else
        return "Falsy"          
}

console.log(checkTruthy(""))
console.log(checkTruthy("Hello"))