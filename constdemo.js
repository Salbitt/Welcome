const pi = 3.142;
var maxr = 52;
var steps = 12;

for(var radius = 1;radius<=maxr;radius+=steps)
{
    console.log('Radius: '+radius+" cm ; Area of circle: "+(pi*radius*radius)+" cm2 ; Perimeter: "+2*pi*radius+" cm");
}
