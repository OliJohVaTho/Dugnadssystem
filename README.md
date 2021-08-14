# Dugnadssystem - 2.0
*Skrevet av: Oliver T. Vatne Johansen*  
14.08.2021

### Hvorfor lager vi et nytt dugnadssystem?
Hensikten med å lage et nytt dugnadssystem er at det skal være lettere å legge til funksjonalitet. Den nåværende løsningen består av en stor fil skrevet i PHP på rundt 7 000 linjer.  

Målet er å skrive systemet på nytt. Henrik Steen anbefalte her å skrive både front-end og back-end i Javascript. Han sa også at systemet ikke trenger å hente inn data fra et annet system, som vil si at vi står litt friere til å designe data-løsningen selv.  

Det første vi ønsker å gjøre er å definere hva som faktisk skal være med i det nye systemet. Dette ligger under "Kravspesifikasjon", men kommer nok til å bli endret når vi har snakket med dugnadslederne og administrasjonen. Det er mest sannsynlig lurt å starte med noe som fungerer, som løser mye av det samme som det nåværende systemet. Deretter kan tilleggsfunksjoner legges til.  

Det er nok lurt å finne ut av hva slags tilleggsfunksjoner som skal/kan legges til. På den måten vil det være lettere å finne ut av hvordan systemet skal designes.   

### Kravspesifikasjon
1. Systemet skal ha en liste over alle studentene på BS.  
2. Systemet skal kunne vise til hvilke dugnader som har blitt fullført, og når disse ble gjort.  
3. Systemet skal kunne sette nye dugnadsdatoer.  
4. Systemet skal kunne godkjenne dugnader.  
5. Systemet skal kunne underkjenne dugnader (ved å f. eks. sende beskjed til dugnadsledere og administrasjon om potensiell bot).  
6. Systemet skal kunne ha mulighet for å tillate andre typer dugnader, f. eks. ryddevakt, billavakt, dugnadsfri, osv.  

