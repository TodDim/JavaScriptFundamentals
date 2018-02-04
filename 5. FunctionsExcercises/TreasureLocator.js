function treasureLocator(arr){
    let islands=[{name:'Tokelau',x1:8,y1:0,x2:9,y2:1}
        ,{name:'Tuvalu',x1:1,y1:1,x2:3,y2:3}
        ,{name:'Samoa',x1:5,y1:3,x2:7,y2:6}
        ,{name:'Tonga',x1:0,y1:6,x2:2,y2:8}
        ,{name:'Cook',x1:4,y1:7,x2:9,y2:8}
    ]
    //let tokelau={x1:8,y1:0,x2:9,y2:1};
    //let tuvalu={x1:1,y1:1,x2:3,y2:3};
    //let samoa={x1:5,y1:3,x2:7,y2:6};
    //let tonga={x1:0,y1:6,x2:2,y2:8};
    //let cook={x1:4,y1:7,x2:8,y2:8};
    let count=0;
    for(let i=0; i<arr.length-1;i+=2){
        count=0;
        for (let isl of islands){
            if(arr[i]>=isl.x1&&arr[i]<=isl.x2&&arr[i+1]>=isl.y1&&arr[i+1]<=isl.y2){
                count++;
                console.log(isl.name)
            }

        }
        if (count===0){
            console.log('On the bottom of the ocean');
        }
    }

}