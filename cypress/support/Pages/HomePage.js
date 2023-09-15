class HomePage{

    hacerScroll=()=>{
        cy.wait(1500)
        cy.scrollTo('bottom', { duration: 4000 })
        cy.wait(1500)
        cy.scrollTo('bottom', { duration: 12000 })
    }
    getBotonCelulares() {
        return cy.get('[data-slidercategory="4"]').first();
    }
    getBotonCalcularTusCuotas(){
        return cy.get('#open-installments-modal');
    }
    getBotonCalcularCuotas(){
        return cy.get('#calculate_btn');
    }
    getListaCelulares() {
        return cy.get('.name');
       
    }
    getListaCelularesAlt() {
        return cy.get('.products > ol > li')
       
    }
    
    getListaBancos() {
        return cy.get('.ui-menu-item');
    }
    getListaTarjetas() {
        return cy.get('#selectCardByBank > ul > li');
    }
    getListaCuotas() {
        return cy.get('#bodyTable > tr');
    }
    getTituloCelular() {
        return cy.get('.base');
    }
    getListaFiltroPrecio() {
        return cy.get('.price > .filter-content > ol > li');
    }
    getListaFiltroMemoria() {
        return cy.get('.memory > .filter-content > ol > li');
    }
    getTituloCantidadFiltrada() {
        return cy.get('.total-products p');
    }
    getInputTextoBanco() {
        return cy.get('#inputbank');
    }
    getInputTextoTarjeta() {
        return cy.get('#cardSelector');
    }
    getBotonOrdenar(){
        return cy.get('.toolbar-sorter');
    }
    getBotonComprar(){
        return cy.get('.btn-primary');
    }
    getSelecionarColor(){
        return cy.get('swatch-attribute-options.clearfix >.swatch-option.color');
    }
    getTextoColor(){
        return cy.get('#phoenix-color-name');
    }
    getSelecionarFormaPago(){
        return cy.get('.switch');
    }


    validarCantidadFiltrada() {

        return cy.then(() => {
          return this.getTituloCantidadFiltrada().invoke('text').then((text) => {
            const match = text.match(/\d+/g);
            return match[1]; // Devuelve el 2do valor del titulo "n1 de n2 mostrado"
          });
        });
      }

    buscarCelularPorPosicion(indice){
       return  this.getListaCelularesAlt().eq(indice-1);
    }


    error_uncaught=()=>{
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error si ', e)
            console.log('runnable', runnable)
            return false

        })
    }


}
export default  HomePage