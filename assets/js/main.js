/* TRACCIA:
Scrivi un programma che esegua un ciclo da 1 a 100 e ad ogni iterazione appenda un elemento html
al container con uno stile differente a seconda del valore dell'indice per i multipli di 3,
per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. */

const ul = document.querySelector('ul.list');

for (let i = 1; i <= 100; i++) {
    //append()
    const li = document.createElement('li');
    li.append(i);
    ul.append(li);
}