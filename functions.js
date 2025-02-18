/**
 * creates the table
 * @param {Array}} array 
 * @param {HTMLElement} thead 
 * @param {HTMLElement} tbody 
 */
function renderTable(array, thead, tbody){
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            thead.innerHTML = "";
            const trH = document.createElement('tr');
            thead.appendChild(trH);
            const th1 = document.createElement('th');
            trH.appendChild(th1);
            th1.innerHTML = array[i].name;
            const th2 = document.createElement('th');
            trH.appendChild(th2);
            th2.innerHTML = array[i].group;
            const th3 = document.createElement('th');
            trH.appendChild(th3);
            th3.innerHTML = array[i].creation1;
        } else {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
            const td1 = document.createElement('td');
            tr.appendChild(td1);
            td1.innerHTML = array[i].name;
            const td2 = document.createElement('td');
            tr.appendChild(td2);
            td2.innerHTML = array[i].group;
            const td3 = document.createElement('td');
            tr.appendChild(td3);
            td3.innerHTML = array[i].creation1;
            if (array[i].creation2 != undefined){
                const td4 = document.createElement('td');
                tr.appendChild(td4);
                td4.innerHTML = array[i].creation2;
            } else {
                td3.colSpan = 2;
            }
        }
    }
}

/**
 * only renders the form
 */
function renderForm() {
    const form = document.createElement('form');
    form.id = 'form';
    form.action = '';
    document.body.appendChild(form);

    formField(form, "text", "Szerző neve:", "szerzo_nev")
    formField(form, "text", "Csapat:", "group")
    formField(form, "text", "Első mű:", "mu1")
    formField(form, "checkbox", "Szeretnél megadni második művet is?", "masodik")
    formField(form, "text", "Második mű:", "mu2")

    const button = document.createElement('button');
    button.innerHTML = "Hozzáadás";
    form.appendChild(button);
}

/**
 * the renderForm uses it to make the form
 * @param {HTMLElement} form 
 * @param {String} type 
 * @param {String} labelText 
 * @param {String} id 
 */
function formField(form, type, labelText, id){
    const mainDiv = document.createElement('div');
    form.appendChild(mainDiv);

    const label = document.createElement('label');
    label.for = id;
    label.innerHTML = labelText;
    mainDiv.appendChild(label);
    const br1 = document.createElement('br');
    mainDiv.appendChild(br1);

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    mainDiv.appendChild(input);
    const br2 = document.createElement('br');
    mainDiv.appendChild(br2);

    const errorDiv = document.createElement('div');
    errorDiv.setAttribute('class', 'error'); 
    mainDiv.appendChild(errorDiv);
    const br3 = document.createElement('br');
    mainDiv.appendChild(br3);
}

/**
 * validates the fields
 * @param {HTMLElement} inputElement 
 * @param {String} inputErrorMessage 
 * @returns false if input element is empty, true if it isn't
 */
function validateFormField(inputElement, inputErrorMessage){
    if (inputElement.value == ''){
        const parentElement = inputElement.parentElement;
        const error = parentElement.querySelector('.error');
        if (error != undefined) {
            error.innerHTML = inputErrorMessage;
        }
        return false;
    } else {
        return true;
    }
}

/**
 * validates the last field which requires a checkbox
 * @param {HTMLElement} checkboxElement 
 * @param {HTMLElement} creation2Element 
 * @returns returns false if box is checked and input is empty and vice versa. true if anything else
 */
function formComplexValidator(checkboxElement, creation2Element){
    if (checkboxElement.checked && creation2Element.value == ""){
        return validateFormField(creation2Element, "A mező megadása kötelező, ha a checkbox be van jelölve!");
    } else if (checkboxElement.checked == false && creation2Element.value != "") {
        const checkboxParent = checkboxElement.parentElement
        const checkboxError = checkboxParent.querySelector('.error');
        if (checkboxError != undefined) {
            checkboxError.innerHTML = "A checkboxot ki kell pipálni a második mű megadásához!";
        }
        return false;
    } else 
    return true;
}