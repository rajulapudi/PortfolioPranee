var modal = document.getElementById('simpleModal');
/*Get open modal button*/
var modalBtn = document.getElementById('modalBtn');
/*Get close Btn*/
var closeBtn = document.getElementById('closeBtn');

/*Listen for click*/

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function clickOutside(e){
    if(e.target == modal)
    modal.style.display = 'none';
}


