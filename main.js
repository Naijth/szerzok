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

renderForm();

const table = document.createElement('table');
document.body.appendChild(table);
const thead = document.createElement('thead');
table.appendChild(thead);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

renderTable(array, thead, tbody);

form.addEventListener('submit', function(e){
    e.preventDefault();

    let valid = true;

    const nameElement = document.getElementById('szerzo_nev');
    const groupElement = document.getElementById('group');
    const creation1Element = document.getElementById('mu1');
    const creation2Element = document.getElementById('mu2');
    const checkboxElement = document.getElementById('masodik');

    const name = nameElement.value;
    const group = groupElement.value;
    const creation1 = creation1Element.value;
    const creation2 = creation2Element.value == "" ? undefined : creation2Element.value;

    const valid1 = validateFormField(nameElement, "Ezt a mezőt kötelező kitölteni!");
    const valid2 = validateFormField(groupElement, "Ezt a mezőt kötelező kitölteni!");
    const valid3 = validateFormField(creation1Element, "Ezt a mezőt kötelező kitölteni!");
    const valid4 = formComplexValidator(checkboxElement, creation2Element);

    if (!valid1 || !valid2 || !valid3 || !valid4)
        valid = false;

    let twoCreations = formComplexValidator(checkboxElement, creation2Element);

    if (valid)
        {
        if (twoCreations) {
            const newElement = {
                name: name,
                group: group,
                creation1: creation1,
                creation2: creation2
            }
            array.push(newElement);
        } else {
            const newElement = {
                name: name,
                group: group,
                creation1: creation1
            }
            array.push(newElement);
        }
        tbody.innerHTML = '';
        renderTable(array, thead, tbody);
        form.reset();
    }
});