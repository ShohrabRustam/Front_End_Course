function randomColorGenerate(){
var colors = [];
while (colors.length < 100) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}
const randomIndex  = Math.floor((Math.random()*colors.length));
return colors[randomIndex];
}
console.log(randomColorGenerate());
