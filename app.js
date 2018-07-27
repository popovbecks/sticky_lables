
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
             labelFirst.classList.add('hide-first');
             labels[i].classList.add('hide');
         }

         if(list.scrollTop > (labels[i].offsetTop - list.offsetTop)){
             labelFirst.classList.remove('hide-first');
             labelFirst.innerHTML = labels[i].innerHTML;
             labels[i].classList.add('hide');
         } else{
             labels[i].classList.remove('hide')
         }
         if(list.scrollTop < (labels[0].offsetTop - list.offsetTop)-23) {
             labelFirst.innerHTML = temp;
         }

     }

}
