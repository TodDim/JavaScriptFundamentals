function sortNested() {
    let obj={
        obj1:{value: 2},
        obj2:{value: 1},
        obj3:{value: 3},
        obj4:{value: 5},
        obj5:{value: 4},
    }
    let keys=Object.keys(obj).sort((a,b)=>obj[b].value-obj[a].value).
    forEach(key=>console.log(key+' -> '+JSON.stringify(obj[key])))
}
sortNested()