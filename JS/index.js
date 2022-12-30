cross = document.querySelector('.cross')
manu = document.querySelector('.manu')

manu.addEventListener('click', ()=>{
    let navList = document.querySelector('.navList');
    navList.style.right = "0";
})

cross.addEventListener('click', ()=>{
    navList = document.querySelector('.navList');
    navList.style.right = "-200px";
})