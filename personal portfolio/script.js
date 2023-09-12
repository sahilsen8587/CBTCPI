document.querySelector('.cross').style.display = 'none';
document.querySelector('.menu').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.menu').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline'
        }, 350);
        document.querySelector('.menu').style.display = 'none'
    }
})