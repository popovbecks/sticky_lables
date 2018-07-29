let labels = document.querySelectorAll('.label');
let list = document.querySelector('.itemsList');
let labelFirst = document.querySelector('.labelFirst');
let temp = labelFirst.innerHTML;
let count = 0;
list.onscroll = function() {
    getCoords();
}

function getCoords() {
    for (let i = 0; i < labels.length; i++) {
        if (list.scrollTop > (labels[i].offsetTop - list.offsetTop) - 23) {
            if (labels[i].classList.contains('hide')) continue;
            labelFirst.style.top = (count = count - 3) + 'px';

            //labelFirst.classList.add('hide');
        }

        if (list.scrollTop > (labels[i].offsetTop - list.offsetTop) - 3) {
            count = 0;
            labels[i].classList.add('hide');
            labelFirst.style.top = count + 'px';
            labelFirst.textContent = labels[i].textContent;
        } else {
            if (!labels[i].classList.contains('hide')) continue;
            labels[i].classList.remove('hide');
            labels[i - 1] ? labelFirst.textContent = labels[i - 1].textContent : labels[i].textContent;
            //labelFirst.style.top < 0 ? labelFirst.style.top = (count = count + 3) + 'px' : '';


        }


        if (list.scrollTop < (labels[0].offsetTop - list.offsetTop) - 23) {
            labelFirst.textContent = temp;
            labelFirst.classList.remove('hide');
        }

    }

}