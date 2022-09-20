particlesJS.load('body', 'particles.js-master/particles.json', );
particlesJS.load('body2', 'particles.js-master/particles.json', );
particlesJS.load('body3', 'particles.js-master/particles.json', );

function myF(){
setTimeout(function a(){
    document.querySelector('#t1').scrollIntoView({
    behavior: 'smooth'
});
},5000)
setTimeout(function b(){
    document.querySelector('#t2').scrollIntoView({
    behavior: 'smooth'
});
},54000);

setTimeout(function c(){
    window.scroll({
        top:0,
        behavior:"smooth"
    });
    
},96000);





}






