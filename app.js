
let labels = document.querySelectorAll('.label');
let list = document.querySelector('.itemsList');
let labelFirst = document.querySelector('.labelFirst');
let temp = labelFirst.innerHTML;
list.onscroll = function() {
    getCoords();
}

function getCoords() {
     for(let i = 0; i < labels.length; i++) {
         if (list.scrollTop > (labels[i].offsetTop - list.offsetTop) - 23) {

             labelFirst.classList.add('hide');
             //labels[i].classList.add('hide');
         }

         if(list.scrollTop > (labels[i].offsetTop - list.offsetTop)){

             labels[i].classList.add('hide');
             labelFirst.innerHTML = labels[i].innerHTML;
             labelFirst.classList.remove('hide');

         } else{
             labels[i].classList.remove('hide');
         }
         if(list.scrollTop < (labels[0].offsetTop - list.offsetTop)-22) {
             labelFirst.innerHTML = temp;
             labelFirst.classList.remove('hide');
         }

     }

}
