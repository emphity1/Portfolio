

const switchElement = document.querySelector('.switch');

switchElement.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
})


const sql = document.querySelector('#sql');

let intervalId;
const delay = 100;



function function1(){
   intervalId = setInterval(()=> (sql.style.bottom += '20px',delay)); 
}

function function2(){
    intervalId = setInterval(()=> (sql.style.bottom = '-20px',delay)); 
    clearInterval(intervalId);
}


sql.addEventListener('mouseover', function1);
sql.addEventListener('mouseleave', function2);