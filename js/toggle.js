function toggle(id){
    const element = document.getElementById(id).lastElementChild;
    const isHidden = element.classList.contains('hidden');

    if(isHidden){
        element.classList.remove('hidden');
    } else{
        element.classList.add('hidden');
    }
}