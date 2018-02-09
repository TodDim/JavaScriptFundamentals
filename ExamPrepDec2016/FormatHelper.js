function format(str) {

    let regex = {
        spaceAfter: /\.[0-9a-zA-Z"`'_\-\/#$@%]+|![0-9a-zA-Z"`'_\-\/#$@%]+|\?[0-9a-zA-Z"`'_\-\/#$@%]+|,[0-9a-zA-Z"`'_\-\/#$@%]+|\:[0-9a-zA-Z"`'_\-\/#$@%]+|\;[0-9a-zA-Z"`'_\-\/#$@%]+/gm,
        spacesafter:/\.\s{2,}|!\s{2,}|\?\s{2,}|,\s{2,}|\:\s{2,}|\;\s{2,}/gm,
        spaceBefore: /\s+\.|\s+!|\s+\?|\s+,|\s+\:|\s+\;/gm,
        third: /[\.\s+]+!/gm,
        date: /\.\s+[0-9]+/gm,
        quotes: /"([^"]+)"/gm
    }


    let m = str[0].match(regex.spaceAfter)
    if (m) {
        for (let i = 0; i < m.length; i++) {
            let r = m[i][0].concat(" ").concat(m[i].substring(1,m[i].length))
            str[0] = str[0].replace(m[i], r)
        }
    }

    let m0 = str[0].match(regex.spacesafter)
    if (m0) {
        for (let i = 0; i < m0.length; i++) {
            let r = m0[i][0].concat(" ")
            str[0] = str[0].replace(m0[i], r)
        }
    }

    let m1 = str[0].match(regex.spaceBefore)
    if (m1) {
        for (let i = 0; i < m1.length; i++) {
            str[0] = str[0].replace(m1[i], m1[i].trim())
        }
    }

    let m2 = str[0].match(regex.third)
    if (m2) {
        for (let i = 0; i < m2.length; i++) {
            let r = m2[i].split(" ").filter(e => e.length > 0).join("")
            str[0] = str[0].replace(m2[i], r)
        }
    }

    let m3 = str[0].match(regex.date)
    if (m3) {
        for (let i = 0; i < m3.length; i++) {
            let r = m3[i].split(" ").filter(e => e.length > 0).join("")
            str[0] = str[0].replace(m3[i], r)
        }
    }

    let m4 = ''
    while (m4 = regex.quotes.exec(str[0])) {
        let r = "\"" + m4[1].trim() + "\""
        str[0] = str[0].replace(m4[0], r)
    }

    console.log(str[0]);
}

// format(['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .'])
// format(['Make,sure to give:proper spacing where is needed... !'])
// format(['Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 .'])
// format(['Okey             , now useless        ; spacing everywhere! It would be really      ,   bad if this test: fails!   |:/'])
// format(['Now, let\'s test some! $#@!1! strange symbols followed, be some more: (@!#$#@$DF%$);NewLines cannot be used, tear! ):'])
format(['Test everything, including:dates    : 4.     3         .10, digits:1,2,3,4,numbers :  14.4,15.6,3. Quotation should be should be trimmed after additional spaces are given:"Quote should remain the same, even with explanation mark in the end!"; this quote should be trimmed in the beginning: "   Trim start"!'])