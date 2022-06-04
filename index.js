console.log("hellonju");
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburgur').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.hammer').style.display='inline';
        document.querySelector('.cross').style.display='none';
        
    }
    else{
        document.querySelector('.hammer').style.display='none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';
        },300);
    }
})