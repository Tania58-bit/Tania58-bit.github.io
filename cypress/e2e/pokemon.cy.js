describe('Покупка нового аватара', function () {                

    it('Тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/login'); // переходим на сайт https://pokemonbattle.ru/

         cy.get('#k_email').type('t.romashko@yandex.ru');  // Вводим логин
         cy.get('#k_password').type('Tania2027%');  // Вводим пароль
         cy.get('.MuiButton-root').click();  // Нажимаем войти
         cy.get('.header_card_trainer').click();  // Клик в шапке на аву тренера
         cy.get('[data-qa="shop"] > #dropdown > img').click();  // Нажимаем кнопку Смена аватара
         cy.get(':nth-child(2) > .shop__button').click();  // Кликаем Купить у первого доступного аватара
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996');  // вводим номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('1226');  // вводим срок действия карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');    // вводим CVV карты
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('NAME');  // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажимаем кнопку Оплатить
         cy.get('.style_1_base_input').type('56456');  // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажимаем кнопку Оплатить
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); 
         cy.get('.payment_status_top_title').should('be.visible');
     })
 })