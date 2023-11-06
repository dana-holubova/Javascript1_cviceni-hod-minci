# Cvičení: Hod mincí

*Oživte virtuální minci.*

Vytvořte si repozitář ze šablony [cviceni-hod-minci](https://github.com/Czechitas-podklady-WEB/cviceni-hod-minci). Repozitář obsahuje stránku s nedokončenou simulací hodu mince. Vaším úkolem bude mincí „hodit“.

1. V souboru `index.js` si do proměnné `padlOrel` uložte hodnotu `true` nebo `false` na základě náhodné hodnoty z funkce `Math.random()`. Pravděpodobnost 50:50 zajistíte porovnáním výsledku funkce s hodnotou `0.5`.

```const padlOrel = Math.random() < 0.5;```

1. Pomocí `document.querySelector` vyberte ze stránky prvek `.vysledek` a nahraďte jeho obsah textem `Padl orel` nebo `Padla panna` na základě náhodné hodnoty z předchozího kroku.

```if (padlOrel) {
  // Nahraďte text pro orla
} else {
  // Nahraďte text pro pannu
}
```

1. Vyzkoušejte stránku několikrát načíst a koukněte, jestli se text mění.

1. Kromě změny textu ještě přidejte prvku `.mince` druhou třídu `mince--orel` nebo `mince--panna` opět podle hodnoty v proměnné `padlOrel`.

1. Znovu několikrát vyzkoušejte, že obrázek mince odpovídá textu pod ním.

### Panna

![panna](obrazky/panna.png)

### Orel

![orel](obrazky/orel.png)

