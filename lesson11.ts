let displayColor = (...color: string[]) => {
    // color.forEach(element => {
    //     console.log(element);
        
    // });

    for (let i in color) {
        console.log(color[i]);
                
    }
}

displayColor('Red', 'Blue', 'Green'); 


var em = ['a', 'b', 'c'];
let [e1, ...e2] = em;
console.log(e1);


var em2 = {
    id: 1,
    name: 'fuck',
    age: 100
};


var {  id : i, age: ab  } = em2;

console.log(ab);

