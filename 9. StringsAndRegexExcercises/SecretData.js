function secret(arr){

    let patterns= {
         namereg: /\*[A-Z][A-Za-z]*(?= |\t|$)/g,
         phonereg: /\+[0-9-]{10}(?= |\t|$)/g,
         idreg: /![a-zA-Z0-9]+(?= |\t|$)/g,
         secbasereg: /_[a-zA-Z0-9]+(?= |\t|$)/g
    }

    let res=''
    for (let str of arr) {
        for (let pat of Object.values(patterns)) {
            str=str.replace(pat,function (m) {
                return '|'.repeat(m.length)
            })
        }
        res+=str+"\n";
    }
console.log(res);
}

secret(['Agent *Ivankov was in the room when it all happened',
'The person in the room was heavily armed. Agent *Ivankov had to act quick in order. He picked up his phone and called some unknown number.',
    'I think it was +555-49-796 I can&#39;t really remember... He said something about &quot;finishing work&quot; with subject !2491a23BVB34Q and returning to Base _Aurora21 Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.','A moment, shorter than a second, later, I saw the person flying off the top floor. I really don&#39;t know what happened there.',
    'This is all I saw, that night. I cannot explain it myself...'])