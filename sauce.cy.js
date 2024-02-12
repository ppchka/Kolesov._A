describe("YouTube", () => {

  it("Разделы", () => {

    cy.visit("https://www.youtube.com/")
    cy.contains('Shorts').click()
    cy.contains('Главная').click()

  });
  it("Проверка предлагаемых жанров видео", () => {

    cy.visit("https://www.youtube.com/")
    cy.contains('Музыка').click()

  });
  it("Результаты поиска", () => {

    cy.visit("https://www.youtube.com/")
    cy.get("input#search").should("be.visible").type("Индусы копают")
    cy.get("button#search-icon-legacy").click()

  });
  it("Проверка роботоспособности лого", () => {

    cy.visit("https://www.youtube.com/") 
    cy.get("#logo-icon").click()
  });

    it("Вкладка трендов", () => {

    cy.visit("https://www.youtube.com/")
    cy.contains('В тренде').click()

  });
  it("Включении видео", () => {

    cy.visit("https://www.youtube.com/")
    cy.get("div#contents").find('a#thumbnail').first().click()

  });

});