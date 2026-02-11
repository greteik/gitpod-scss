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
const formModal = document.querySelectorAll('.formModal');

modalBtnReg.addEventListener('click', ()=> {
    loginText.textContent = 'успешный вход!';
})

