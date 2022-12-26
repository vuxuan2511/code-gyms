const tabs = document.querySelectorAll.bind(document)('.section-tap-item');
const line = document.querySelector.bind(document)('.line');
const tabActive = document.querySelector.bind(document)('.section-tap-item.active');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index) => {
    tab.onclick = function () {
        document.querySelector.bind(document)('.section-tap-item.active').classList.remove('active');
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        this.classList.add('active');
    };
});
