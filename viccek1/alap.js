var tomb=
[
    "vicc1",
    "vicc2",
    "vicc3,",
    "vicc4",
    "vicc5"

]
var kepek=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
]
function vicc()
{
//alert("Hello")
var veletlen=Math.floor(Math.random() * tomb.length);
console.log(veletlen)
document.getElementById("vicchelye").innerHTML=tomb[veletlen]
document.getElementById("kep").src=veletlen+".jpg"


}
vicc()