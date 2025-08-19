describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('USER_LOGIN') // Ввели верный логин
        cy.get('#pass').type('USER_PASSWORD') // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти 

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после аврот. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton').should('be.visible'); // Есть крестик и он виден для пользователя
    })

   it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#forgotEmailButton').click(); // Нажать "Забыли пароль"
        cy.get('#mailForgot').type('USER_LOGIN') // Ввели имейл
        cy.get('#restoreEmailButton').click(); // Нажали "Отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после ввода почты вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('USER_LOGIN') // Ввели верный логин
        cy.get('#pass').type('USER_PASSWORD') // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти 

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после аврот. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

   it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('USER_LOGIN') // Ввели неверный логин
        cy.get('#pass').type('USER_PASSWORD') // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти 

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после аврот. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

   
   it('Ввести логин без @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('USER_LOGIN') // Ввели почту без @
        cy.get('#pass').type('USER_PASSWORD') // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти 

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после аврот. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    }) 

  it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type('USER_LOGIN') // Ввели логин с заглавной буквой
        cy.get('#pass').type('USER_PASSWORD') // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти 

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после аврот. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })    


})
