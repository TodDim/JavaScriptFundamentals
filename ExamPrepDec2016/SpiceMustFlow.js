function spice(n) {
    n=Number(n)
    let mined=0
    let days=0;
    while (n>=100){
       let extract=n-26
        mined+=extract
        n-=10
        days++

    }
    if(n<100&&days===0){
        mined=0
    }
    else{
        mined-=26
    }
    console.log(days);
    console.log(mined);
}

spice(99)
spice(111)
spice(450)
spice(200)