

const switchElement = document.querySelector('.switch');

switchElement.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
})




const sql = document.querySelector('#sql');
const c = document.querySelector('#c');
const godot = document.querySelector('#godot');
const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');


/*
function slideUp(){
    sql.style.bottom = 20 + 'px';
    
   
}
function slideDown(){
    sql.style.bottom = -20 + 'px';
    
}
*/


//SQL
sql.addEventListener('mouseover', function(){
    sql.style.bottom = 20 + 'px';
});
sql.addEventListener('mouseleave', function(){
    sql.style.bottom = -20 + 'px';
});

//C
c.addEventListener('mouseover', function(){
    c.style.bottom = 300 + 'px';
});
c.addEventListener('mouseleave', function(){
    c.style.bottom = 280 + 'px';
});

//Godot
godot.addEventListener('mouseover', function(){
    godot.style.bottom = 160 + 'px'
});
godot.addEventListener('mouseleave', function(){
    godot.style.bottom = 140 + 'px'
});


//html
html.addEventListener('mouseover', function(){
    html.style.bottom = 40 + 'px'
});
html.addEventListener('mouseleave', function(){
    html.style.bottom = 20 + 'px'
});

//css
css.addEventListener('mouseover', function(){
    css.style.bottom = 150 + 'px'
});
css.addEventListener('mouseleave', function(){
    css.style.bottom = 130 + 'px'

});

//js
js.addEventListener('mouseover', function(){
    js.style.bottom = 260 + 'px'

});
js.addEventListener('mouseleave', function(){
    js.style.bottom = 249 + 'px'

});