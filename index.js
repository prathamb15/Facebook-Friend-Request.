var isstatus  = document.querySelector("h5");



var addFriend = document.querySelector('#add');
var removeFriend = document.querySelector("#remove");
var check = 0;

addFriend.addEventListener("click", function(){
    if(check ===0){
        isstatus.innerHTML = 'Friends'
    isstatus.style.color='green'
    console.log("hihiihih")
    check = 1;


    }else{
        
    }
   

    

})

removeFriend.addEventListener("click",function(){
     
        isstatus.innerHTML = 'Stranger'
        isstatus.style.color='Red'

     

   

    
})

