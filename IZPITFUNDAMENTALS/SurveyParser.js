function surv(str) {
    let fulreg = /.*<svg><cat><text>.*\[(.*)\]<\/text><\/cat> *<cat>.*(<g><val>([1-9]*[0-9]+)<\/val>([0-9]+)<\/g>)+.*<\/cat><\/svg>.*/gm
    let votesreg = /<g><val>([1-9]*[0-9]+)<\/val>([0-9]+)<\/g>/gm
    let d = str.match(/.*<svg>.*<\/svg>.*/gm)
    if (!d) {
        console.log('No survey found');
        return
    }
    let label;
    let sum = 0;
    let count = 0;
    let m = fulreg.exec(str)
    if (!m) {
        console.log('Invalid format');
        return
    }
    else {
         label=m[1]
        while ((m = votesreg.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === votesreg.lastIndex) {
                votesreg.lastIndex++;
            }
            sum += Number(m[2])*Number(m[1])
            count +=Number(m[2])
        }
    }
    console.log(`${label}: ${Math.round((sum/count)*100)/100}`);

}

// surv('<p>Our guests may enjoy a special menu of freshly caught seafood.</p>' +
//     '<br>' +
//     '<svg>' +
//     '<cat><text>How do you rate the special menu? [Food - Special]</text></cat> ' +
//     '<cat>' +
//     '<g><val>1</val>5</g>' +
//     '<g><val>5</val>13</g>' +
//     '<g><val>10</val>22</g>' +
//     '</cat>' +
//     '</svg>')
surv('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')