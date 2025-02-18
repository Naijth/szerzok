const array = [
    {
        name: "Szerző neve",
        group: "Csapat",
        creation1: "Művei"
    },
    {
        name: "Vörösmarty Mihály",
        group: "romantikus triász",
        creation1: "Zalán futása",
        creation2: "Szózat"
    },
    {
        name: "Móricz Zsigmond",
        group: "Nyugat I.",
        creation1: "Hét krajcár"
    },
    {
        name: "Illyés Gyula",
        group: "Nyugat II.",
        creation1: "Egy mondat a zsarnokságról",
        creation2: "Puszták népe"
    },
    {
        name: "Radnóti Miklós",
        group: "Nyugat III.",
        creation1: "Pogány köszöntő",
        creation2: "Járkálj csak, halálraítélt"
    }
]

const table = document.createElement('table');
document.body.appendChild(table);
const thead = document.createElement('thead');
table.appendChild(thead);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

renderTable(array, thead, tbody);