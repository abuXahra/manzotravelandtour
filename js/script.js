

const departing = document.getElementById("departing");
const returning = document.getElementById("returning");
const passegersAndClass = document.getElementById("passegersAndClass");
const passenger = document.getElementById("passenger");
const passClass = document.getElementById("pass-class");


passegersAndClass.addEventListener("click", function() {        
    passegersAndClass.classList.toggle("bordered");
    
    passenger.classList.toggle('visible');
    passenger.classList.toggle('hidden');
    passClass.classList.toggle('pass-class');

    departing.style.border ="none";
    returning.style.border = "none";
    // passenger.style.display = "flex";
    
});


const continueFunc = (e) =>{
    e.preventDefault();
    passenger.classList.toggle('hidden');
}


