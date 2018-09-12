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
