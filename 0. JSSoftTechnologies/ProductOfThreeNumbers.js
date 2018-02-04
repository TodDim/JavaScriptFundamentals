function productOfThreeNumbers(arr) {
    if (Number(arr[0])>0&&Number(arr[1])>0&&Number(arr[2])>0){
        console.log('Positive')
    }
    else if(Number(arr[0])<0&&Number(arr[1])<0&&Number(arr[2])>0){
        console.log('Positive')
    }
    else if(Number(arr[0])>0&&Number(arr[1])<0&&Number(arr[2])<0){
        console.log('Positive')
    }
    else if(Number(arr[0])<0&&Number(arr[1])>0&&Number(arr[2])<0){
        console.log('Positive')
    }

    else{
        console.log('Negative')
    }


}
productOfThreeNumbers(['2','3','-5']);