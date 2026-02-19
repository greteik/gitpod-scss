const LoginBtn = document.querySelector('.header_button');

LoginBtn.addEventListener('click', ()=> {
    LoginBtn.style.backgroundColor = 'orange';
})

const modal = document.getElementById("modalLogin");
const openBtn = document.querySelector('.header_button');
const closeBtn = document.getElementById("closeModal");

// modal

openBtn.addEventListener('click', () => {
    modal.classList.add('active'); 
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});



const modalBtnReg = document.querySelector('.modal-btn');
const loginText = document.querySelector('.logintext');



// modal - try

const ModalTry = document.querySelector('.modal_try');
const ModalTryClose = document.querySelector('.close_btn-try');
const ModalTryOpen = document.querySelector('.code_box-btn');

function ModalTryFunc() {
    ModalTryOpen.addEventListener('click', ()=> {
        ModalTry.classList.add('active');
    })

    ModalTryClose.addEventListener('click', ()=> {
        ModalTry.classList.remove('active');
    })

    ModalTry.addEventListener('click', (f)=> {
        if (f.target === ModalTry) {
            ModalTry.classList.remove('active');
        }
    })
}

ModalTryFunc();

const slider = document.querySelector('.user_inner');
    
    slider.onmousedown = function(e) {
        let startX = e.pageX;
        let scrollLeft = slider.scrollLeft;

        slider.onmousemove = function(e) {
            let moveX = e.pageX - startX;
            slider.scrollLeft = scrollLeft - moveX;
        };
    };
    
    slider.onmouseup = function() {
        slider.onmousemove = null;
    };
    
    slider.onmouseleave = function() {
        slider.onmousemove = null;
    };