function jsonTable(arr) {
    let res = '<table>\n'
    for (let i = 0; i < arr.length; i++) {
        let person = JSON.parse(arr[i])
          res+='     <tr>\n'
          res+=`         <td>${person.name}</td>\n`
          res+=`        <td>${person.position}</td>\n`
          res+=`        <td>${person.salary}</td>\n`
          res+='     <tr>\n'
    }
    res+='</table>'
    console.log(res);
    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };

        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])