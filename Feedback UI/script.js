const ratingEls = document.querySelectorAll(".rating"); //now we have access to manipulate all the divs at one time//

const btnEl = document.getElementById("btn")


const containerEl = document.getElementById("container")


let selectedRating="";

ratingEls.forEach((ratingEls)=>{
    ratingEls.addEventListener("click",(event)=>{
        removeActive();
        selectedRating =
        event.target.innerText || 
        event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");


    });
    });
    btnEl.addEventListener("click", ()=>{
        if(selectedRating !==""){
            containerEl.innerHTML = `
            <strong>Thank you</strong>
            <br>
            <br>
            <strong> Feedbaack : ${selectedRating}</strong>
            <p>I'll use your feedback to improve my coding</p>
            `;
        }
    });
    function removeActive(){
        ratingEls.forEach((ratingEl) => {
            ratingEl.classList.remove("active");
        });
    }

