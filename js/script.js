let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".food-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
   food.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
   previewContainer.style.display = 'none';
   previewBox.forEach(close =>{
      close.classList.remove('active');
   });
};

var swiper = new Swiper(".menu-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

var swiper = new Swiper(".blogs-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   autoHeight:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

// booking seat script
   
   function registration()
   {
      var name= document.getElementById("bfullname").value;
      var email= document.getElementById("bemail").value;
      var time= document.getElementById("btime").value;
      var tarea= document.getElementById("btextarea").value;         
      var number= document.getElementById("bnumber").value;
      var people= document.getElementById("bpeople").value;
      var date= document.getElementById("bdate").value;
      

      var letters = /^[A-Za-z]+$/;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if(name=='')
      {
         alert('Please enter your name');
      }
      else if(!letters.test(name))
      {
         alert('Name field required only alphabet characters');
      }
      else if(document.getElementById("bfullname").value.length < 4)
      {
         alert ('Name should not less than 12 charactor');
      }
      else if(document.getElementById("bfullname").value.length > 28)
      {
         alert ('Name should not more than 28 charactor');
      }
      else if(email=='')
      {
         alert('Please enter your user email id');
      }
      else if (!filter.test(email))
      {
         alert('Invalid email');
      }
      else if(time=='')
      {
         alert('enter the time');
      }
      else if(tarea=='')
      {
         alert('Please enter valid address');
      }
      else if (!filter.test(tarea))
      {
         alert('Invalid email');
      }
      else if(number=='')
      {
         alert('Enter valid number');
      }
      else if(document.getElementById("bnumber").value.length == 10)
      {
         alert ('number should be valid');
      }
      else if(people="")
      {
         alert ('enter the valid number');
      }
      else if(date=='')
      {
         alert('enter the date');
      }
      else
      {                                       
         alert(' welcome to XYZ Restaurant <br> Thank You for booking'); 
      }
   }


// signup script

function validateform()
        {  
          var username=document.myform.username.value;
          var email=document.myform.email.value;  
          var password=document.myform.password.value;  
          var password2=document.myform.password2.value;  
          if (username==null || username=="") 
          {  
            alert("UserName can't be blank");  
            return false;  
          }
          else if(email=="" || email==null)
          {
            alert("Email must be in @ formate.");
            return false;
          }
          else if(password.length<12 || password.length>28)
          {  
            alert("Password must be at least 12 characters long.");  
            return false;  
          }  
          else if(password2 != password)
          {  
            alert("Both password must be same.");  
            return false;  
          }
        }

 // login script

function validform()
        {  
          var username=document.myform.username.value;  
          var password=document.myform.password.value;  
          if (username==null || username=="") 
          {  
            alert("UserName can't be blank");  
            return false;  
          }
          else if(password.length<12 || password.length>28)
          {  
            alert("Password must be at least 12 characters long.");  
            return false;  
          }  
        }  


'use strict';

jQuery.noConflict();
jQuery(document).ready(function ($) 
{
   $('#myForm').formToJson('.result-json-output');
});        