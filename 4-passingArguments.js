const args = process.argv
console.log(args)

//console 
const x=1
const y=1

console.count(
   x + 
  ' x has been checked .. how many times?'
)
console.count(
 x + 
  ' x has been checked .. how many times?'
)
console.count(
 y + 
  ' y has been checked .. how many times?'
)
//cambiar color
console.log('\x1b[33m%s\x1b[0m', 'hi!')
//medir tiempo de ejecucion
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()
