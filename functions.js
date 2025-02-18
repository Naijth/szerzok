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