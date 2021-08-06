Feature: Testing pagina de credito automotriz bbva

  Scenario: test
    Given Entre a la primer pagina
    Then Entro al frame
    When Estoy en el frame
    Then Doy click a seminuevos
    Then Despliego lista de años y selecciono 2018
    Then Borro el campo de costo y le escribo 300,000
    Then Borro campo de enganche y escribo 100,000
    Then Despliego lista de marcas y selecciono volkswagen
    Then Despliego modelos de auto y selecciono GTI
    Then Doy click a cotizar
    When Estoy en pagina de resultados
    Then Tomo captura a primeros resultados
    Then Deslizo a los siguientes resultados
    Then Tomo captura de segundos resultados
