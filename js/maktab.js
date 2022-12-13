

let maktabFlag = true
let faraFlag = true
let sabzFlag = true
let rockFlag = true
let courseraFlag = true
let youTubeFlag = true


function maktab(){

    let y = document.getElementsByClassName('maktab');
    let x = document.getElementById('maktabBtn')
    if(maktabFlag){
        for (i=0; i < y.length; i++){
            y[i].style.display='none'
        }
        maktabFlag = false
        x.style.backgroundColor='#c80000'
    }
    else{

        for (i=0; i < y.length; i++){
            y[i].style.display='inline-block'
        }
        maktabFlag = true
        x.style.backgroundColor='#60bb2f'
    }

}


function fara(){

    let y = document.getElementsByClassName('fara');
    let x = document.getElementById('faraBtn')
    if(faraFlag){
        for (i=0; i < y.length; i++){
            y[i].style.display='none'
        }
        faraFlag = false
        x.style.backgroundColor='#c80000'
    }
    else{

        for (i=0; i < y.length; i++){
            y[i].style.display='inline-block'
        }
        faraFlag = true
        x.style.backgroundColor='#60bb2f'
    }

}



function sabz(){

    let y = document.getElementsByClassName('sabz');
    let x = document.getElementById('sabzBtn')
    if(sabzFlag){
        for (i=0; i < y.length; i++){
            y[i].style.display='none'
        }
        sabzFlag = false
        x.style.backgroundColor='#c80000'
    }
    else{

        for (i=0; i < y.length; i++){
            y[i].style.display='inline-block'
        }
        sabzFlag = true
        x.style.backgroundColor='#60bb2f'
    }

}


function rock(){

    let y = document.getElementsByClassName('rock');
    let x = document.getElementById('rockBtn')
    if(rockFlag){
        for (i=0; i < y.length; i++){
            y[i].style.display='none'
        }
        rockFlag = false
        x.style.backgroundColor='#c80000'
    }
    else{

        for (i=0; i < y.length; i++){
            y[i].style.display='inline-block'
        }
        rockFlag = true
        x.style.backgroundColor='#60bb2f'
    }

}



function coursera(){

    let y = document.getElementsByClassName('coursera');
    let x = document.getElementById('courseraBtn')
    if(courseraFlag){
        for (i=0; i < y.length; i++){
            y[i].style.display='none'
        }
        courseraFlag = false
        x.style.backgroundColor='#c80000'
    }
    else{

        for (i=0; i < y.length; i++){
            y[i].style.display='inline-block'
        }
        courseraFlag = true
        x.style.backgroundColor='#60bb2f'
    }

}


function youTube(){

    let y = document.getElementsByClassName('youTube');
    let x = document.getElementById('youTubeBtn')
    if(youTubeFlag){
        for (i=0; i < y.length; i++){
            y[i].style.display='none'
        }
        youTubeFlag = false
        x.style.backgroundColor='#c80000'
    }
    else{

        for (i=0; i < y.length; i++){
            y[i].style.display='inline-block'
        }
        youTubeFlag = true
        x.style.backgroundColor='#60bb2f'
    }

}