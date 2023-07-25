const toggleBtn = document.querySelector('.bars')
const toggleBtnIcon = document.querySelector('.bars i')
const dropDownMenu = document.querySelector('.dropdown')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-regular fa-x'
    : 'fa-solid fa-bars'
}

