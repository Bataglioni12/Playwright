const {expect} = require('@playwright/test');

const abrirSite = async (page) => {
    await page.goto('https://www.automationpratice.com.br/login');
}

const logarComSucesso = async (page) => {
    await page.locator('#user').click();
    await page.locator('#user').fill('gustavo@teste.com.br');
    await page.locator('#password').click();
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
}

const verficarLogin = async (page) => {
    await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
}

const logarEmailVazio = async (page) => {
    await page.locator('#password').click();
    await page.locator('#password').fill('123456');
}

const logarSenhaVazia = async (page) => {
    await page.locator('#user').click();
    await page.locator('#user').fill('gustavo@teste.com.br');
}

const validarMensagemEmailInvalido = async (page) => {
    await expect(page.getByText('E-mail inválido.')).toBeVisible();
}

module.exports = {
    abrirSite,
    logarComSucesso,
    verficarLogin,
    logarEmailVazio,
    logarSenhaVazia,
    validarMensagemEmailInvalido
}