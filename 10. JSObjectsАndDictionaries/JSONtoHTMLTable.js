function JSONToHTMLTable(json) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += " <tr>";
    let keys=Object.keys(arr[0]);
    for (let key of keys)
        html += `<th>${key}</th>`;
    html += "</tr>\n";
    for (let obj of arr) {
        html+='     <tr>'
        for (let i = 0; i <keys.length ; i++) {
            html += `<td>${htmlEscape(obj[keys[i]]+ '')}</td>`;
        }
        html +='</tr>\n'
    }
         html += "</table>";
    console.log(html);

        function htmlEscape(text) {
            let map = { '"': '&quot;', '&': '&amp;',
                "'": '&#39;', '<': '&lt;', '>': '&gt;' };

            return text.replace(/[\"&'<>]/g, ch => map[ch]);
        }
    }

// JSONToHTMLTable(['[{"X":5,"Y":7},{"X":2,"Y":4}]']);
JSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);