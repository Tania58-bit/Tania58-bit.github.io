describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru') // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1') // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти 

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после аврот. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton').should('be.visible'); // Есть крестик и он виден для пользователя
    })

   it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#forgotEmailButton').click(); // Нажать "Забыли пароль"
        cy.get('#mailForgot').type('t.romashko@yandex.ru') // Ввели имейл
        cy.get('#restoreEmailButton').click(); // Нажали "Отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после ввода почты вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru') // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7') // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти 

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после аврот. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

   it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('germaan@dolnikov.ru') // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1') // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти 

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после аврот. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

   
   it('Ввести логин без @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('germandolnikov.ru') // Ввели почту без @
        cy.get('#pass').type('iLoveqastudio1') // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти 

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после аврот. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    }) 

  it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('gerMan@Dolnikov.ru') // Ввели логин с заглавной буквой
        cy.get('#pass').type('iLoveqastudio1') // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти 

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после аврот. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })    

})