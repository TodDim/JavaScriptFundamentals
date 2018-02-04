function roadRadar(arr) {
    let limit;
    let area=arr[1]
    switch (area){
        case 'motorway':limit=130; break;
        case 'interstate':limit=90; break;
        case 'city':limit=50; break;
        case 'residential':limit=20; break;
        default: break;
    }
    let over=arr[0]-limit;
    if (over>0&&over<=20){
        console.log('speeding');
    }
    else if (over>20&&over<=40){
        console.log('excessive speeding');
    }
    else if (over>40){
        console.log('reckless driving');
    }
}
roadRadar([40, 'city'])