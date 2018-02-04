function tripLength(arr){

    let dist12=Math.sqrt(Math.pow((arr[0]-arr[2]),2)+Math.pow((arr[1]-arr[3]),2));
    let dist23=Math.sqrt(Math.pow((arr[2]-arr[4]),2)+Math.pow((arr[3]-arr[5]),2))
    let dist13=Math.sqrt(Math.pow((arr[0]-arr[4]),2)+Math.pow((arr[1]-arr[5]),2))

    if ((dist12<=dist13&&dist13>=dist23)){
        console.log('1->2->3: '+(dist12+dist23));
    }
    else if((dist12<=dist23&&dist13<=dist23)){
        console.log('2->1->3: '+(dist12+dist13));
    }
    else {
        console.log('1->3->2: '+(dist23+dist13));
    }
}

tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);