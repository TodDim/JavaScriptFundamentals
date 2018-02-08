function mess(str) {
    let attributeRegex=/(\bfrom="[0-9a-zA-Z .]+"|\bto="[0-9a-zA-Z .]+")/gm
    let validMessageRegex=/^<message(( from="[0-9a-zA-Z .]+"| to="[0-9a-zA-Z .]+"|[ a-z]+="[0-9a-zA-Z .]+")){2,}>.*\n?.*<\/message>$/gm
    let m=str.match(validMessageRegex)
    let attr=str.match(attributeRegex)
    if(m===null){
      console.log('Invalid message format');
      return
    }
    if (attr.length<2){
        console.log('Missing attributes');
        return
    }
    let sender=attr.filter(a=>a.startsWith("from"))[0].substring(6)
    let recipient=attr.filter(a=>a.startsWith("to"))[0].substring(4)

    let startmessagereg=/^<message(( from="[0-9a-zA-Z .]+"| to="[0-9a-zA-Z .]+"|[ a-z]+="[0-9a-zA-Z .]+")){2,}>/gm
    let startindex=str.match(startmessagereg)[0].length

    let endRegex=/<\/message>$/gm
    let endindex=str.match(endRegex)[0].length

    let message=str.substring(startindex,str.length-endindex)

    let res=''
    res+='<article>\n'
    res+=`  <div>From: <span class="sender">${sender.substring(0,sender.length-1)}</span></div>\n`
    res+=`  <div>To: <span class="recipient">${recipient.substring(0,recipient.length-1)}</span></div>\n`
    res+='  <div>\n'
    message.split('\n').forEach(m=>res+=`    <p>${m}</p>\n`)

    res+='  </div>\n'
    res+='</article>'
console.log(res);
}
// mess('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>')
// mess('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>')
// mess('<message from="Alice" timestamp="1497254112">Same old, same old</message>')
// mess('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\n' +
//     'Let\'s go out for a beer</message>')
// mess('<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>')
// mess('<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>')
// mess('<message from="Alice" timestamp="1497254112">This is a test</message>')
// mess('<message to="Matilda" from="Charlie"><media type="image" src="slyfox.jpg"/></message><meta version="2.0"/>')
// mess('<message from="MasterBlaster" to="TheAnimal" color="#FF340B">FWD: Funny stuff</message>')
// mess('<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>')