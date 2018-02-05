function user(arr) {
    let users=new Set()
    for (let i = 0; i <arr.length ; i++) {
      users.add(arr[i])
    }
    Array.from(users).sort((a,b)=>{
        let res=a.length-b.length
        if (res===0){
            res=a.localeCompare(b)
        }
        return res
    }).forEach(user=>console.log(user))
}
user(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'])