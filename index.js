const xBtn = document.querySelector('.x-btn');
const Modal = document.querySelector('.modal');
const Btn1 = document.querySelector('.btn1');
const Btn6 = document.querySelector('.btn6');
const Btn7 = document.querySelector('.btn7');
const Btn8 = document.querySelector('.btn8');
const Btn9 = document.querySelector('.btn9');
const Btn10 = document.querySelector('.btn10');
const In1 = document.querySelector('.in1');
const In2 = document.querySelector('.in2');
const In3 = document.querySelector('.in3');
const In4 = document.querySelector('.in4');
const input_pledge = document.querySelector('.inputpledge');
const miniDiv7 = document.querySelector('.minidiv7');
const miniDiv8 = document.querySelector('.minidiv8');
const miniDiv9 = document.querySelector('.minidiv9');
const miniDiv6 = document.querySelector('.minidiv6');
const congratsDiv = document.querySelector('.congratsdiv');



const boxs = document.querySelectorAll('#pledge');

for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener('click' , () => {
          // input_pledge[i].classList.add('selected');
          
    });
}


let showModal = false;

Btn1.addEventListener('click', () => {
   if(!showModal){
       Modal.classList.add('active');
      

       showModal = true;

   }else{
       Modal.classList.remove('close');
      

       showModal = false;
   }
});




 let showSelectModal = false;

 In1.addEventListener('click',() => {
     if(!showSelectModal){
         miniDiv6.classList.add('selected');
    
         showSelectModal = true;
     }else{

        miniDiv6.classList.remove('notselected');

        showSelectModal = false;
     }
    
 });

 let showSelectModal1 = false;

 In2.addEventListener('click',() =>{
     if(!showSelectModal1){
         miniDiv7.classList.add('selected');

         showSelectModal1 = true;
     }else{
         miniDiv7.classList.add('notselected');

         showSelectModal1 = false;
     } 
     
 });

 let showSelectModal2 = false;

 In3.addEventListener('click',() =>{
     if(!showSelectModal2){
         miniDiv8.classList.add('selected');

         showSelectModal2 = true;
     }else{
         miniDiv8.classList.add('notselected');

         showSelectModa2 = false;
     } 
     
 });

 
 let showSelectModal3 = false;

 In4.addEventListener('click',() =>{
     if(!showSelectModal3){
         miniDiv9.classList.add('selected');

         showSelectModal3 = true;
     }else{
         miniDiv9.classList.add('notselected');

         showSelectModa3 = false;
     } 
     
 });




xBtn.addEventListener('click',() =>{
    Modal.classList.toggle('close');
});
/*
In1.addEventListener('click',() => {
    miniDiv6.classList.toggle('selected');
    
});*/



Btn6.addEventListener('click', () => {
    congratsDiv.classList.toggle('congrats');
    miniDiv6.classList.toggle('congratsdone');
    Modal.classList.toggle('close');


});

Btn7.addEventListener('click',() =>{
    congratsDiv.classList.toggle('congrats');
    miniDiv7.classList.toggle('congratsdone');
    Modal.classList.toggle('close');
}); 

Btn8.addEventListener('click',() =>{
    congratsDiv.classList.toggle('congrats');
    miniDiv8.classList.toggle('congratsdone');
    Modal.classList.toggle('close');
});
/*
Btn9.addEventListener('click',() =>{
    congratsDiv.classList.toggle('congrats');
    miniDiv9.classList.toggle('congratsdone');
    Modal.classList.toggle('close');
})*/



   
Btn10.addEventListener('click', () =>{
    congratsDiv.classList.toggle('congratsdone');
});


