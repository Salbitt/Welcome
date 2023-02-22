const b1 = Symbol('Triangle')
const b2 = Symbol('Circle')
const b3 = Symbol('Square')
const b4 = Symbol('Rectangle')
const box = Symbol('Triangle')

function getBoxColor(shape)
{
    switch(shape)
    {
        case b1:
            return 'Red'
        case b2:
            return 'Green'
        case b3:
            return "Yellow"
        case b4:
            return "Blue"
        default:
          return "I'm sorry, I don't know that shape!"
    }
  
}
//here box has a new symbol value, hence the color isn't returned
console.log(`Shape: Triangle`)
console.log(`Color: ${getBoxColor(box)}`)

//here b2.description gives shape name
console.log(`Shape: ${b2.description}`)
console.log(`Color: ${getBoxColor(b2)}`)