/*
Creating a business name generator by combining list of adjectives and shop name and another word
Adjectives:Crazy,Amazing,Fire
Shop Name:Engine,Food,Garments
Another Word:Bros,Limited,Hub
ex:CrazyFoodHub,FireFoodBros,AmazingFoodLimited

*/
function Bname(adX,shY,awZ)
{
    console.log(`${adX}${shY}${awZ}`);
    return  `${adX}${shY}${awZ}`;
}
let x = Math.random();
let y = Math.random();
let z = Math.random();

if(x<0.33)
{
    adX="Crazy";
}
else if(x<0.66 && x>=0.33)
{
    adX="Amazing";
}
else
{
    adX="Fire";
}
if(y<0.33)
{
    shY="Engine";
}
else if(y>=0.33 && y<0.66)
{
    shY="Foods";
}
else
{
    shY="Garments";
}

if(z<0.33)
{
    awZ="Bros";
}
else if(z>=0.33 && z<0.66)
{
    awZ="Limited";
}
else
{
    awZ="Hub";
}
// Bname("adX","shY","awZ");
Bname(adX,shY,awZ);
alert(Bname(adX,shY,awZ));
