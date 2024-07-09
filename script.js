const inpute1=document.querySelector(".inputc"),
checkchance=document.querySelector(".checkchance"),
comp1=document.querySelector(".comp"),
btn1=document.querySelector(".btn");



let randomNum=Math.floor(Math.random() * 100);
console.log(randomNum);
chances=10; 



btn1.addEventListener("click", () => {
    chances--;
    checkchance.style.color="red";
   
   let inputValue=inpute1.value;
   
  
    if(inputValue==randomNum){
     
        comp1.textContent="Congradulation! You won the game";
        checkchance.textContent=chances;
        comp1.classList.add("valid");
        comp1.classList.remove("hl");
        inpute1.disabled=true;
       
    }

    else if(inputValue==""){
        alert("enter number");
    }

    else if(inputValue>randomNum && inputValue<100){
        comp1.textContent="You number is high, Try Agian!" ;
       checkchance.textContent=chances;
       comp1.classList.add("hl");
       comp1.classList.remove("invalid");
       comp1.classList.remove("valid");
       
    
    }

    else if(inputValue<randomNum && inputValue>0){
        comp1.textContent="Your number is low, Try Again!";
         checkchance.textContent=chances;
         comp1.classList.add("hl");
         comp1.classList.remove("invalid");
         comp1.classList.remove("valid");
    }

    else{
        comp1.textContent="Your number is invalid";
        checkchance.textContent=chances;
        comp1.classList.add("invalid");
        comp1.classList.remove("hl");
        comp1.classList.remove("valid");
    }
   

    if(chances== 0){
        btn1.textContent="Start New Game";
        comp1.textContent="You Lose the game";
        comp1.classList.add("invalid");
        comp1.classList.remove("hl"); 
        comp1.classList.remove("valid");
    }

    if(chances<0){
        window.location.reload();
    }
   
})
