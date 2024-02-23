/// <reference types="cypress" />
describe('sprint 2', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('AuthPage-success', () => {
        cy.intercept('POST', 'AuthPage/AuthPage', { accessToken: 'SUPERUSER' }).as('auth');
        cy.viewport(1440, 900);
        cy.wait(1000);
        cy.screenshot('AuthPage-success-1');
        cy.url().should('include', '/AuthPage');
        cy.get('[data-test-id=AuthPage-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=AuthPage-password]').type('123');
        cy.get('[data-test-id=AuthPage-submit-button]').click();
        cy.get('[data-test-id=AuthPage-password]').clear().type('123qq');
        cy.get('[data-test-id=AuthPage-submit-button]').click();
        cy.get('[data-test-id=AuthPage-password]').clear().type('123qqQQ');
        cy.get('[data-test-id=AuthPage-submit-button]').click();
        cy.get('[data-test-id=AuthPage-password]').clear().type('1234qqQQ');
        cy.get('[data-test-id=AuthPage-submit-button]').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@AuthPage').should(({ request }) => {
            assert.deepEqual(request.body, {
                email: 'valadzkoaliaksei@tut.by',
                password: '1234qqQQ',
            });
        });
        cy.url().should('include', '/main');
    });

    it('AuthPage-error', () => {
        cy.intercept('POST', 'AuthPage/AuthPage', {
            statusCode: 404,
        }).as('auth');
        cy.viewport(834, 900);
        cy.screenshot('AuthPage-error-1');
        cy.get('[data-test-id=AuthPage-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=AuthPage-password]').type('1234qqQQ');
        cy.get('[data-test-id=AuthPage-submit-button]').click();
        cy.wait('@AuthPage');
        cy.url().should('include', '/result/error-AuthPage');
        cy.screenshot('AuthPage-error-2');
        cy.get('[data-test-id=AuthPage-retry-button]').click();
        cy.url().should('include', '/AuthPage');
        cy.get('[data-test-id=AuthPage-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=AuthPage-password]').type('1234qqQQ');
        cy.intercept('POST', 'AuthPage/AuthPage', { accessToken: 'SUPERUSER' }).as('auth');
        cy.get('[data-test-id=AuthPage-submit-button]').click();
        cy.wait('@AuthPage');
        cy.url().should('include', '/main');
    });

    it('AuthPage-remember', () => {
        cy.intercept('POST', 'AuthPage/AuthPage', { accessToken: 'SUPERUSER' }).as('auth');
        cy.viewport(360, 900);
        cy.screenshot('AuthPage-remember-1');
        cy.get('[data-test-id=AuthPage-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=AuthPage-password]').type('1234qqQQ');
        cy.get('[data-test-id=AuthPage-remember]').check();
        cy.get('[data-test-id=AuthPage-submit-button]').click();
        cy.wait('@AuthPage');
        cy.url().should('include', '/main');
        cy.visit('/');
        cy.url().should('include', '/main');
    });

    it('reg-success', () => {
        cy.intercept('POST', '/AuthPage/registration', { statusCode: 201 }).as('registration');
        cy.intercept('POST', 'AuthPage/AuthPage', { accessToken: 'SUPERUSER' }).as('auth');
        cy.viewport(1440, 900);
        cy.contains('Регистрация').click();
        cy.screenshot('reg-success-1');
        cy.url().should('include', '/AuthPage/registration');
        cy.get('[data-test-id=registration-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=registration-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-confirm-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-submit-button]').click();
        cy.wait('@registration');
        cy.url().should('include', '/result/success');
        cy.screenshot('reg-success-2');
        cy.get('[data-test-id=registration-enter-button]').click();
        cy.url().should('include', '/AuthPage');
        cy.get('[data-test-id=AuthPage-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=AuthPage-password]').type('1234qqQQ');
        cy.get('[data-test-id=AuthPage-submit-button]').click();
        cy.wait('@AuthPage');
        cy.url().should('include', '/main');
    });

    it('reg-error', () => {
        cy.intercept('POST', '/AuthPage/registration', {
            statusCode: 409,
            error: 'Conflict',
            message: 'Пользователь с таким email уже существует.',
        }).as('registration');
        cy.viewport(1440, 900);
        cy.contains('Регистрация').click();
        cy.url().should('include', '/AuthPage/registration');
        cy.get('[data-test-id=registration-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=registration-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-confirm-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-submit-button]').click();
        cy.wait('@registration');
        cy.url().should('include', 'result/error-user-exist');
        cy.screenshot('reg-error-1');
        cy.get('[data-test-id=registration-back-button]').click();
        cy.intercept('POST', '/AuthPage/registration', { statusCode: 404 }).as('registration');
        cy.get('[data-test-id=registration-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=registration-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-confirm-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-submit-button]').click();
        cy.wait('@registration');
        cy.url().should('include', '/result/error');
        cy.screenshot('reg-error-2');
        cy.get('[data-test-id=registration-retry-button]').click();
        cy.wait('@registration');
    });

    it('change-pass-success', () => {
        cy.intercept('POST', '/AuthPage/check-email', {
            email: 'valadzkoaliaksei@tut.by',
            message: 'Код отправлен на email',
        }).as('checkEmail');
        cy.intercept('POST', '/AuthPage/confirm-email', { statusCode: 201 }).as('confirmEmail');
        cy.intercept('POST', '/AuthPage/change-password', { statusCode: 201 }).as('changePass');
        cy.intercept('POST', 'AuthPage/AuthPage', { accessToken: 'SUPERUSER' }).as('auth');
        cy.viewport(1440, 900);
        cy.get('[data-test-id=AuthPage-forgot-button]').click();
        cy.get('[data-test-id=AuthPage-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=AuthPage-forgot-button]').click();
        cy.wait('@checkEmail');
        cy.url().should('include', '/AuthPage/confirm-email');
        cy.screenshot('change-pass-success-1');
        cy.get('[data-test-id=verification-input]').type('123456');
        cy.wait('@confirmEmail');
        cy.url().should('include', '/AuthPage/change-password');
        cy.screenshot('change-pass-success-2');
        cy.get('[data-test-id=change-password]').type('1234qqQQ');
        cy.get('[data-test-id=change-confirm-password]').type('1234qqQQ');
        cy.get('[data-test-id=change-submit-button]').click();
        cy.wait('@changePass');
        cy.url().should('include', '/result/success-change-password');
        cy.screenshot('change-pass-success-3');
        cy.get('[data-test-id=change-entry-button]').click();
        cy.url().should('include', '/AuthPage');
        cy.get('[data-test-id=AuthPage-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=AuthPage-password]').type('1234qqQQ');
        cy.get('[data-test-id=AuthPage-submit-button]').click();
        cy.wait('@AuthPage');
        cy.url().should('include', '/main');
    });

    it('change-pass-error', () => {
        cy.viewport(1440, 900);
        cy.intercept('POST', '/AuthPage/check-email', {
            statusCode: 404,
            body: { message: 'Email не найден' },
        }).as('checkEmail');
        cy.get('[data-test-id=AuthPage-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=AuthPage-forgot-button]').click();
        cy.wait('@checkEmail');
        cy.url().should('include', '/result/error-check-email-no-exist');
        cy.screenshot('change-pass-error-1');
        cy.get('[data-test-id=check-retry-button]').click();
        cy.url().should('include', '/AuthPage');
        cy.intercept('POST', '/AuthPage/check-email', {
            statusCode: 409,
        }).as('checkEmail');
        cy.get('[data-test-id=AuthPage-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=AuthPage-forgot-button]').click();
        cy.wait('@checkEmail');
        cy.url().should('include', '/result/error-check-email');
        cy.screenshot('change-pass-error-2');
        cy.intercept('POST', '/AuthPage/check-email', { statusCode: 200 }).as('checkEmail');
        cy.get('[data-test-id=check-back-button]').click();
        cy.wait('@checkEmail');
        cy.url().should('include', '/AuthPage/confirm-email');
        cy.screenshot('change-pass-error-3');
        cy.intercept('POST', '/AuthPage/confirm-email', { statusCode: 404 }).as('confirmEmail');
        cy.get('[data-test-id=verification-input]').type('123456');
        cy.wait('@confirmEmail');
        cy.url().should('include', '/AuthPage/confirm-email');
        cy.screenshot('change-pass-error-4');
        cy.intercept('POST', '/AuthPage/confirm-email', { statusCode: 201 }).as('confirmEmail');
        cy.intercept('POST', '/AuthPage/change-password', { statusCode: 404 }).as('changePass');
        cy.get('[data-test-id=verification-input]').type('123456');
        cy.wait('@confirmEmail');
        cy.screenshot('change-pass-error-5');
        cy.get('[data-test-id=change-password]').type('1234qqQQ');
        cy.get('[data-test-id=change-confirm-password]').type('1234qqQQ');
        cy.get('[data-test-id=change-submit-button]').click();
        cy.wait('@changePass');
        cy.url().should('include', '/result/error-change-password');
        cy.screenshot('change-pass-error-6');
        cy.intercept('POST', '/AuthPage/change-password', { statusCode: 201 }).as('changePass');
        cy.get('[data-test-id=change-retry-button]').click();
        cy.wait('@changePass');
        cy.url().should('include', '/result/success-change-password');
        cy.get('[data-test-id=change-entry-button]').click();
        cy.intercept('POST', 'AuthPage/AuthPage', { accessToken: 'SUPERUSER' }).as('auth');
        cy.url().should('include', '/AuthPage');
        cy.get('[data-test-id=AuthPage-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=AuthPage-password]').type('1234qqQQ');
        cy.get('[data-test-id=AuthPage-submit-button]').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@AuthPage');
        cy.url().should('include', '/main');
    });
});
