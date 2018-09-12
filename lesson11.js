var displayColor = function () {
    // color.forEach(element => {
    //     console.log(element);
    var color = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        color[_i] = arguments[_i];
    }
    // });
    for (var i in color) {
        console.log(color[i]);
    }
};
displayColor('Red', 'Blue', 'Green');
var em = ['a', 'b', 'c'];
var e1 = em[0], e2 = em.slice(1);
console.log(e1);
