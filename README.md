# Programació d'Aplicacions a Internet (PAI) · UAB 2026

<p align="center">
  <img src="./assets/img/PAI-logo.png" alt="Logotip PAI" width="180">
</p>

Repositori de pràctiques, exemples de teoria i exercicis de l'assignatura **Programació d'Aplicacions a Internet (PAI)** del grau a la **Universitat Autònoma de Barcelona (UAB)**.

---

## 📚 Contingut i Temari

El repositori està organitzat en mòduls temàtics progressius:

### [01. Introducció a documents HTML](./01_Introduccio_HTML/)
Fonaments de l'estructura web amb HTML5 semàntic.
* **Exemples i Teoria:** Capçaleres (`<h1>`-`<h6>`), paràgrafs, format de text, enllaços (`<a>`), llistes ordenades i desordenades (`<ol>`, `<ul>`), imatges (`<img>`) i estructura del cos (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`).
* **Exercicis i Proves:** Proves d'aprenentatge inicials i exercicis de maquetació bàsica.

### [02. Introducció a estils CSS](./02_Introduccio_CSS/)
Presentació, estils i disseny visual amb CSS3.
* **Exemples i Teoria:** Colors i fons, selectors per etiqueta, classe (`.`) i identificador (`#`), model de caixa (*box model*: margin, border, padding, content) i càrrega de fulls d'estil externs.
* **Exercicis:** Projectes i pràctiques com *Ciutats Intel·ligents*, maquetació temàtica de *Pixar* i exercicis d'estils combinats.

### [03. JavaScript Fonamental](./03_JavaScript/)
Introducció a la programació interactiva al costat del client (ES6+).
* **Exemples i Teoria:** Vinculació entre HTML i fitxers `.js`, sortida per consola (`console.log`), finestres emergents interactives (`alert`, `prompt`), tractament i conversió de tipus de dades (`Number()`, `parseInt()`, etc.).
* **Stack Frontend:** Exemple integrat complet combinant HTML, CSS i JS en un mateix component interactiu.
* **Exercicis:** Exercicis pràctics d'entrada/sortida i operacions bàsiques.

### [04. Estructures de control a JavaScript](./04_Estructures_Control_JS/)
Lògica de programació, control de flux i iteracions.
* **Condicionals:** Bifurcacions amb `if`, `if-else` i selecció múltiple amb `switch`.
* **Bucles:** Estructures repetitives amb `while`, `do-while` i bucle `for` comptador.
* **Solucions:** Resolució estructurada de la bateria d'exercicis pràctics (parell/imparell, comprovació de signes, càlculs acumuladors, etc.).

---

## 📁 Estructura del Repositori

El projecte segueix el principi de **co-location** (agrupació de cada fitxer HTML amb el seu respectiu CSS i JS al mateix directori):

```text
pai-uab-2026/
├── index.html                           # Pàgina de benvinguda i inici del projecte
├── README.md                            # Guia i documentació del repositori
│
├── assets/
│   └── img/                             # Imatges i recursos multimèdia globals
│
├── 01_Introduccio_HTML/
│   ├── exemples/                        # Exemples de teoria d'HTML5
│   ├── exercicis/                       # Exercicis d'estructura HTML
│   └── proves/                          # Proves ràpides i esborranys
│
├── 02_Introduccio_CSS/
│   ├── exemples/                        # Selectors, colors i model de caixa
│   └── exercicis/                       # Pràctiques i projectes CSS (Pixar, Ciutats...)
│
├── 03_JavaScript/
│   ├── exemples/                        # Entrada/sortida, conversions i stack bàsic
│   └── exercicis/                       # Exercicis de JavaScript inicial
│
└── 04_Estructures_Control_JS/
    ├── exemples/                        # Teoria de condicionals (if, switch) i bucles (while, do-while, for)
    ├── exercicis/                       # Enunciats de pràctiques
    └── solucions/                       # Solucions als exercicis de lògica i control de flux
```

---

## 🚀 Com executar els exemples

1. **Clonar el repositori:**
   ```bash
   git clone https://github.com/MarcEsteve/pai-uab-2026.git
   cd pai-uab-2026
   ```

2. **Obrir els fitxers:**
   * **Opció recomanada (Live Server):** Obre la carpeta amb [VS Code](https://code.visualstudio.com/) i fes clic a **Go Live** amb l'extensió *Live Server* per tenir recàrrega automàtica al navegador.
   * **Navegador directe:** Obre qualsevol fitxer `.html` directament amb el teu navegador habitual (Chrome, Firefox, Safari, Edge).
   * **Pàgina inicial:** Pots començar obrint [`index.html`](./index.html) des de l'arrel.

---

## 🛠️ Bones Pràctiques Aplicades

* **Co-location:** Fitxers `.html`, `.css` i `.js` associats es troben a la mateixa carpeta per facilitar la modularitat i l'accés directe.
* **Semàntica HTML5:** Ús d'etiquetes descriptives (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
* **Separació de responsabilitats:** Estructura (HTML), presentació (CSS) i comportament/interactivitat (JS).
* **Rutes relatives netes:** Rutes coherents per importar recursos i estils locals sense dependències absolutes del sistema de fitxers.