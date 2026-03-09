const {expect} = require('@playwright/test');
const { test } = require('@playwright/test');
const { abrirSite, logarComSucesso, verficarLogin, logarEmailVazio, logarSenhaVazia, validarMensagemEmailInvalido } = require('./loginPage');

test('Login com Sucesso', async ({ page }) => {
    await abrirSite(page);
    await logarComSucesso(page);
    await verficarLogin(page);
});

test('Login com Email Vazio', async ({ page }) => {
    await abrirSite(page);
    await logarEmailVazio(page);
    await validarMensagemEmailInvalido(page);
});

