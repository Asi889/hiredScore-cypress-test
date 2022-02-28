

describe('example to-do app', () => {
    beforeEach(() => {

        cy.visit('https://www.hiredscore.com')
    })
    it('go to Careers page', () => {
        
        cy.get('#w-dropdown-toggle-3').trigger('mouseover')
        cy.contains('Careers').click()
        // cy.url().should('eq', ' https://www.hiredscore.com/careers#career-listing') 
        cy.get('.careers-container').scrollIntoView() 
        cy.get('.link-block').each((element)=>{
                        
            const title = element.find('.job-grid-title').text()
           

            cy.visit('https://www.hiredscore.com' + element.attr('href'))
            cy.get('h1').should('have.text', title)
            
        })
        
            
    })


    it('go to Resources tab', () => {
        cy.get('#w-dropdown-toggle-2').trigger('mouseover')
        cy.contains('Press & Awards').click()
        cy.url().should('eq', 'https://www.hiredscore.com/press') 

    })


})
