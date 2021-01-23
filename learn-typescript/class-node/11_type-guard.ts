interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {name: 'Tovy', skill: "Item NMakeyng", age:33 }
}


var tony = introduce();
console.log(tony.skill);

if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age)
}


//타입 가드 정의..
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined; 
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
    
} else {
    console.log(tony.age);
    
}