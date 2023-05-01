// let x = 2548
// let arr = x.toString().split('')
// let z = 0
// for(let i of arr){
//    let y = i**2
//    z = z + y
// }
// console.log(z)

// let arr =[1,2,3,4,5,6,7,8,9,10]
// for(let i of arr){
//     if(i%2==1){
//         console.log(i-1)
//     }
// }

// let i = 0
// let l = []
// while(i<=100){
//     l.push(i++)
// }
// for(let x of l){
//     if(x%2==1){
//         console.log(x-1)
//     }
// }

// let z = 0
// function funk(arr){
//     for(let x of arr){
//         z=z+x
//     }
// }funk([1,55,6,81,16,19,20,56,40])
// console.log(z)

// let arr = ["string",45,2,56,"string2",8,17]
// arr.reverse()
// console.log(arr)

// let arr = ["aa","bb","cc","dd","ee"]
// arr.pop()
// arr.shift()
// arr.push("kk")
// arr.unshift("ll")
// arr.splice(2,5)
// console.log(arr)

// let arrNumber = [1,2,3,4,5,6,7,8,9,10]
// let arrString = ["aa","bb","cc","dd","ee","ff","jj","ii","qq","pp"]
// let arr = []
// for(let x of arrNumber){
//     if(arrNumber.indexOf(x)%2==1){
//         arr.push(x)
//     }
// }
// for(let y of arrString){
//     if(arrString.indexOf(y)%2==1){
//         arr.push(y)
//     }
// }
// console.log(arr)

// let arr = [1,55,6,81,16,19,20,56,40]
// let arr2 = arr.map(arr => arr**2)
// console.log(arr2)

// let arr = [[2,5,4],[10,6,8],[3,7,9]]
// let arr2 = []
// for(let x of arr[0]){
//     if(arr[0].indexOf(x)%2==1){
//         arr2.push(x)
//     }
// }
// for(let y of arr[1]){
//     if(arr[1].indexOf(y)%2==1){
//         arr2.push(y)
//     }
// }
// for(let z of arr[2]){
//     if(arr[2].indexOf(z)%2==1){
//         arr2.push(z)
//     }
// }
// let u = 1
// for(let r of arr2){
//     u = u * r
// }
// console.log(u)

// 1111111111111
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let y = 0
// for(let x of arr){
//     if(arr.indexOf(x)%2==0){
//         y = y + x 
//     }
// }
// console.log(y)

// 22222222222222
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let y = 0
// for(let x of arr){
//     if(arr.indexOf(x)%2==0){
//         y = y * x 
//     }
// }
// console.log(y)

// let arr = [-10,25,4,3,11,-55,5,63,-1]
// let arraymap = arr.filter(num => num > 10);
// console.log(arraymap)

// let i = 0
// let l = []
// while(i<=100){
//     l.push(i++)
// }
// for(let x of l){
//     if(l.indexOf(x)%2==1){
//         console.log(l.indexOf(x)*x)
//     }
// }

// let i = 0
// let l = []
// while(i<=100){
//     l.push(i++)
// }
// for(let x of l){
//     if(l.indexOf(x)%2==1){
//         console.log(l.indexOf(x)+x)
//     }
// }

// let x = "revers";
// let arr = x.split("")
// let y = arr.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue))
// console.log(y)

// xndir 11 
// 111111

// var y = 0 
// var z = 0
// var arr = []
// for ( i = 0; i < 10; i++ ){
//     arr.push( Math.round( Math.random() * -50 ));
//     arr.push(Math.round(Math.random() * 50 ))
// }
// for(let x of arr){
//     if(x<0){
//         y = y + x
//     }else if(x>0){
//         z+=1
//     }
// }
// for(let f of arr){
//     var array = f.toString().split('')
//     let r = 1;
//     for(var p = 0;p<array.length;p++){
//         if(array[p]=="-"){
//             r = r 
//         }else{
//             r = r * array[p]
//         }
//     }
//     console.log(r)
// }
// console.log(z)
// console.log(arr)
// console.log(y)

// xndir 10
// 1111111111111111
// let x = 45846515347
// let arr = x.toString().split("")
// let y = 0 
// for(let i of arr){
//     i = Number(i)
//     y = y + i
// }
// console.log(y)

// 222222222222222222
// let x = 45846515347
// let arr = x.toString().split("")
// let y = 1 
// for(let i of arr){
//     i = Number(i)
//     y = y * i
// }
// console.log(y)

// 333333333333333333333
// let x = 45846515347
// let arr = x.toString().split("")
// let y = 1 
// let z = 0
// let o
// for(let i of arr){
//     i = Number(i)
//     y = y + i
//     z++
//     o = y/z
// }
// console.log(o)

// let arr = [undefined,12,"Edmon",3,"IT",true,88]
// let arr2 = []
// for(let i of arr){
//     if(typeof i == "number"){
//         arr2.push(i)
//     }
// }console.log(arr2);

// xndir12
// let x = new Date()
// console.log(x.getFullYear(),x.getDay(),x.getHours(),x.getMinutes())

// xndir13
// function funk(x,y,z,j,i){
//     return (x+y+z+j+i)**2
// }
// let numbers = [1,2,3,4,5]
// console.log(funk(...numbers))

// xndir14
// let arr = [
//     {
//         name:"Edmon",
//         lastname:"Mkhitaryan",
//         age:19
//     },
//     {
//         name:"Mnac",
//         lastname:"Zaqaryan",
//         age:17
//     },
//     {
//         name:"Vahe",
//         lastname:"Ghazaryan",
//         age:13
//     },
//     {
//         name:"Vahan",
//         lastname:"Ghazaryan",
//         age:14
//     }
// ]
// for(let i of arr){
//     if(i.age >= 18){
//         console.log(i)
//     }
// }

// let arr = [-10,45,69,-85,25,-37,]
// for(let x of arr){
//     let arr2 = x.toString().split("")
//     if(arr2[0] == "-"){
//         arr2.shift()
//         arr2.reverse()
//         arr2.unshift("-")
//         arr3 = Number(arr2.join(""))
        
//     }else{
//         arr2.reverse()
//         arr3 = Number(arr2.join(""))
//     }
//     console.log(arr3)
// }

// function funccc(e){
//     calculator.ekran.value += e.value;
// }
// function funcc(e){
//     calculator.ekran.value += calculator.ekran.value;
// }
// function func(e){
//     calculator.ekran.value += e.value;
// }
// function maqrel(){
//     calculator.ekran.value = null;
// }
// function hashvel(){
//     calculator.ekran.value = eval(calculator.ekran.value);
//

// let a = +prompt("GREQ TIV!")
// let c = a.toString();
// let sum = 0;
// console.log(a)
// for(let b = 0;b<c.length;b++){
//    let g = Number(c[b])
//    sum+=g;
// }
// while(Math.floor(a)!=a)a*=10;
// var i=!a,v=0;
// while(a){
//   h=1<<a%10,i&h&&(v|=h)||(i|=h);
//   a=Math.floor(a/10);
// }

// for(l=0;l<10;l++)if(i&1<<l&v)
//   console.log(l);


// console.log(sum)

// function func() {
//   var x = inp.value
//   x = x.replace("<", "");
//   x = x.replace(">", "");
//   var text = document.getElementById('divs').innerHTML
//   var result = text.replace(new RegExp(x,'g'), "<div style='color:green; display:inline;'>" + x + "</div>");
//   document.getElementById('divs').innerHTML = result;
// }


// pop
// function func(...a){
//   a.length = a.length - 1
//   console.log(a)
// }func(1,2,3,4,5,6,7,8,9)

// unshift 
// let x = 10
// function func(...a){
//   a = 0 + "," + a
//   console.log(a)
// }func(1,2,3,4,5,6,7,8,9)

// shift
// let array = [1,2,3,4,5,6,7,8,9];
// for (let i = 1; i < array.length; i++) array[i - 1] = array[i];
// array.length--;
// console.log(array);

// push 
// let x = 10
// function func(...a){
//   a = a + "," + 10
//   console.log(a)
// }func(1,2,3,4,5,6,7,8,9)

// sort
// function sort(arr) {
//   var temp = [];
//   if (Array.isArray(arr)) {
//       for (let i = 0; i < arr.length; i++) {
//           for (let j = 0; j < arr.length; j++) {
//               if (arr[i] < arr[j]) {
//                   temp = arr[j];
//                   arr[j] = arr[i];
//                   arr[i] = temp;
//               }
//           }
//       }
//       return arr;
//   }
// }console.log(sort([2, 6, 0, 4, 3, 4, 3, 5, 9, 6, 12, 43, 6, 4]));

// join
// var name = ['Kar', 'Sur', 'Vah'];
// console.log(String(name).replace(/,/g,'-'))

// verelak
var hark = Math.round(Math.random() * 15);

