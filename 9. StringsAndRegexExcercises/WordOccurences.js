function occur(sent,word) {
    let regex=new RegExp("\\b"+word +"\\b",'gmi')
    let count=0;
    let m=sent.match(regex)
    if (m){
        for (let i = 0; i <m.length ; i++) {
          count++;
        }
    }
    console.log(count);
}
occur('The waterfall was so high, that the child couldn’t see its peak','the')
occur('There was one. Therefore I bought it. I wouldn’t buy it otherwise.','there')
occur('How do you plan on achieving that? How? How can you even think of that?','how')