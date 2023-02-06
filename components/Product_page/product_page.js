function tabs() {
    const selectParentBlock = document.querySelector('.small'),
          smallImage = document.querySelectorAll('.simage'),
          bigImage = document.querySelectorAll('.descr-big');

    function hide() {
        bigImage.forEach(item => {
            item.setAttribute('hidden', '');
        });
        smallImage.forEach(item => {
            item.classList.remove('active');
        });
    }
    hide();

    function show(i = 0) {
        smallImage[i].classList.add('active');
        bigImage[i].removeAttribute('hidden');
    }
    show();

    selectParentBlock.addEventListener('click', (event) => {
        const target = event.target; 

        smallImage.forEach((item, i) => {
            if (target == item) {
                hide();
                show(i);
            }
        });
    });      
}
tabs();