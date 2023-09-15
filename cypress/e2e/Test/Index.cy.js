import HomePage from "../../support/Pages/HomePage.js";
describe('Testing Casos de Prueba de la Tienda Movistar',function(){
    const homePage=new HomePage();
    before(() => {

        cy.log('Inicio de Tests')
        homePage.error_uncaught();
    })

    beforeEach(() => {
        cy.viewport(1024, 768)
        cy.visit('/').url().should('eq', 'https://tiendaonline.movistar.com.ar/');
        

    })

    
    it('CP001 - Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A52 ', function(){
           
        homePage.getBotonCelulares().click();
        homePage.hacerScroll();
        homePage.getListaCelulares().contains('A52').click();
        homePage.getTituloCelular().should('have.text','A52');
        homePage.getListaCuotas().invoke('text').should('contains', 'hasta 12 cuotas');


    });

    it('CP002 - Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB', function(){
        homePage.getListaFiltroPrecio().contains('$ 200.000 y superior').click();
        cy.scrollTo('top');
        homePage.getListaFiltroMemoria().contains('256').click();
        cy.wait(1500);
        homePage.validarCantidadFiltrada().should('eq','20');

    });
    it('CP003 - Validar cuotas en compra de equipo-Cuotas.60-Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa ', function(){
        
        homePage.buscarCelularPorPosicion(3).click();
        cy.wait(1500);
        homePage.getBotonCalcularTusCuotas().click();
        cy.wait(1500);
        homePage.getInputTextoBanco().clear().click();
        cy.wait(1500);
        homePage.getListaBancos().contains('Credicoop').click();
        cy.wait(1500);
        homePage.getInputTextoTarjeta().clear().click();
        cy.wait(1500);
        homePage.getListaTarjetas().contains('Visa').click();
        homePage.getBotonCalcularCuotas().click();
        homePage.getListaCuotas().should('not.contain', '60 cuotas');


    });
    it('CP004 - Filtrar Precio - Buscar A04 64BG -Pagar en tu Factura', function(){
        cy.wait(1500);
        homePage.getListaFiltroPrecio().contains('$ 0 - $ 1.000.000').click();
        cy.wait(1500);
        homePage.getListaFiltroPrecio().contains('$ 100.000 - $ 200.000').click();
        cy.wait(1500);
        cy.scrollTo('center')
        homePage.getListaCelulares().contains('A04 64GB').click();
        homePage.getSelecionarFormaPago().eq(1).click()
        cy.wait(1500)
        homePage.getBotonComprar().should('be.visible').and('be.enabled');


});
});