# IncluDO – Simulazione di Iscrizione a Corso Formativo per Migranti 🧩

> Progetto sviluppato in **TypeScript** per simulare il funzionamento di una scuola di formazione rivolta a migranti.  
Modella l’interazione tra **partecipanti**, **corsi di formazione** e **aziende partner**.

🌐 **Live demo su CodePen**  
🔗 [Vai alla demo](https://codepen.io/SimoneGiannecchini/pen/raNRRGe)

---

## 🧑‍🎓 Partecipante

Rappresenta un migrante che desidera partecipare a un corso.

**Caratteristiche:**
- Dati anagrafici: nome, cognome, paese di origine
- Livello di istruzione, competenze linguistiche, ambito formativo
- Funzione: `enrollInCourse(course)`

---

## 📚 Corso

Rappresenta un percorso formativo.

**Caratteristiche:**
- Titolo, descrizione, settore professionale, durata
- Elenco iscritti
- Funzione: `addParticipant(participant)`

---

## 🏢 Azienda

Un’azienda partner che collabora offrendo posizioni lavorative.

**Caratteristiche:**
- Nome, settore, descrizione
- Elenco posizioni disponibili
- Funzione: `offerPosition(participant, position)`

---

## 🔗 Come interagiscono

1. Un **partecipante** si iscrive a un **corso**
2. Il **corso** gestisce l’elenco degli iscritti
3. Un’**azienda** può proporre un lavoro a un partecipante

---

## 🎯 Obiettivo del progetto

✅ Simulare l’inclusione formativa  
✅ Mappare i legami tra partecipanti, corsi e aziende  
✅ Introdurre alla logica ad oggetti con TypeScript

---

## 🚀 Come esportare da CodePen

1. Apri il progetto su [CodePen](https://codepen.io/SimoneGiannecchini/pen/raNRRGe)
2. Clicca su **Export > Export .zip**
3. Estrai i file in una cartella sul tuo PC (es: `includo`)

---

## 📦 Setup Git & GitHub

```bash
git init
git add .
git commit -m "Primo commit – Progetto IncluDO"

Crea un repository su GitHub:
Vai su github.com

Clicca su New repository

Nomina il repo (es: includo) – non aggiungere README o .gitignore

Copia i comandi che GitHub ti mostra dopo la creazione, ad esempio:

git remote add origin https://github.com/TUO-USERNAME/includo.git
git branch -M main
git push -u origin main
📌 Tecnologie usate
TypeScript

Programmazione a oggetti

Logica di interazione tra entità

✍️ Autore
Simone Giannecchini – GitHub

## 📄 Licenza

Il progetto è rilasciato sotto licenza [MIT](https://opensource.org/licenses/MIT).
 Apri il progetto su [CodePen](https://codepen.io/SimoneGiannecchini/pen/raNRRGe)

