function addRemoveElements(arr) {
    let array=[];
    for (let i=0;i<arr.length;i++){
        switch (arr[i].split(' ')[0]){
            case "add":
                array.push(arr[i].split(' ')[1])
                break;
            case 'remove':
                array.splice(arr[i].split(' ')[1],1)
        }
    }
    for (let i=0;i<array.length;i++){
        console.log(array[i])
    }
}
addRemoveElements(['add 3','add 5','remove 1','add 2'] )