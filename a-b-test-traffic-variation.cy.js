describe('Teste de CPF em Loop', () => {
    const url = 'https://sua-url-aqui.com';
  
    let contadorCPFObrigatorio = 0;
    let contadorCPFOpcional = 0;
    let contadorDefault = 0;
  
    it('Realiza verificações de CPF em loop', () => {
      Cypress._.times(100, () => {
        cy.visit(url);
  
        cy.get('seu-seletor-aqui')
          .then(($label) => {
            const texto = $label.text();
  
            if (texto === 'Digite seu CPF*') {
              contadorCPFObrigatorio += 1;
            } else if (texto === 'Digite seu CPF (opcional)') {
              contadorCPFOpcional += 1;
            } else {
              contadorDefault += 1;
            }
          });
  
      });
    });
  
    after(() => {
      cy.log(`Contador CPF Obrigatório: ${contadorCPFObrigatorio}`);
      cy.log(`Contador CPF Opcional: ${contadorCPFOpcional}`);
      cy.log(`Contador Default: ${contadorDefault}`);
    });
  });
  