function capitalize(str) {
    let out=''
    str.split(" ").forEach(w=>
    { let result=w[0].toUpperCase().concat(w.toLowerCase().substr(1))
        out+=result+" "
    })
    console.log(out);
}
// capitalize('Capitalize these words')
capitalize('Was that Easy? tRY thIs onE for SiZe!')