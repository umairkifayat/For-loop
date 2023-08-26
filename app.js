// for (let i = 1; i <= 10 ; i++) {
//     console.log(i);
//     }












const div = document.querySelector('div'); 
const num = +prompt('Enter your number');
if (num) {
    for (let i = 1; i <= 10; i++) {
            div.innerHTML += `${num} * ${i} = ${num * i} <br/> `;
        }
         
} else {
    alert("invalid number please enter a number")
}
