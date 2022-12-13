let $= document;


let maktabElement = $.getElementById('maktabBtn');
let maktabFlag = true

function maktabClick(){
    if(maktab){
        let y = $.getElementsByClassName('maktab');

        for (i=0; i < y.length; i++){
            y[i].style.display='none'
        }
        maktabFlag = false
    }
    else{
        for (i=0; i < y.length; i++){
            y[i].style.display='inline-block'
        }
        maktabFlag = true
    }}