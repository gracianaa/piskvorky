# Úkol: Piškvorky 2/5

Tento úkol navazuje na [Piškvorky 1](https://github.com/Czechitas-podklady-WEB/ukol-piskvorky-1). Čeká tě kódování stránky s herní mřížkou.

## Zadání

1. Pokračuj v repozitáři `piskvorky` z prvního úkolu.

1. Přidej druhý html soubor `hra.html` a odkaž na něj z tlačítka `Začít hrát` z předchozí stránky.

1. Podle potřeby si stáhni všechny obrázkové podklady. Ber na vědomí, že tyto ikonky jsou vybarvené bílou barvou, takže na svělém pozadí je neuvidíš.

   - Domů: [home.svg](https://github.com/Czechitas-podklady-WEB/Ukol-Piskvorky-2/raw/main/podklady/home.svg)
   - Znovu: [restart.svg](https://github.com/Czechitas-podklady-WEB/Ukol-Piskvorky-2/raw/main/podklady/restart.svg)
   - Křížek: [cross.svg](https://github.com/Czechitas-podklady-WEB/Ukol-Piskvorky-2/raw/main/podklady/cross.svg)
   - Kolečko: [circle.svg](https://github.com/Czechitas-podklady-WEB/Ukol-Piskvorky-2/raw/main/podklady/circle.svg)

1. Uprav html a css podle obrázků níže.

   <details>
      <summary>Úzká obrazovka</summary>
      <img alt="úzká obrazovka" src="zadani/uzka-obrazovka.png">
   </details>

   <details>
      <summary>Širší obrazovka</summary>
      <img alt="širší obrazovka" src="zadani/sirsi-obrazovka.png">
   </details>

1. V tomto úkolu nebudeš potřebovat `@media query`. Hlavnímu obsahu nastav maximální šířku pomocí `max-width: 80vmin`. Stránka se tak bude lépe přizpůsobovat širokoúhlým obrazovkám i telefonům na výšku.

1. Pro tlačítka v pravém horním rohu použij html prvek `<a>`. První tlačítko nasměru na úvodní stránku a druhé na `hra.html`, aby znovu načetlo právě zobrazenou stránku. Nezapomeň na stejné zatmavení po najetí myši jako u předchozí stránky.

   ![odkazy](zadani/odkazy.gif)

1. Pro jednotlivá políčka, celkem jich je 100, použij html prvek `<button>`. Po najetí myši by se měl lehce rozsvítit.

   ![hover](zadani/hover.gif)

### Poznámky:

- V pozdějších úkolech budeš měnit ikonku právě hrajícího hráče pomocí javascriptu. Zatím zobraz staticky, jen s použitím html a css, kroužek.

  ![právě hraje](zadani/prave-hraje.png)

- Efekty po najetí myši se většinou týkají i stavu `:focus`, aby se stránka dala ovládat například i z klávesnice.
