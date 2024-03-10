
//AUTOMATISCHER SLIDER

// function startSlider() {
//     setTimeout(function() {
//         document.getElementById('img-1').style = 'transform: translateX(-100%)';
//         document.getElementById('img-2').style = 'transform: translateX(0)';
//         document.getElementById('img-3').style = 'transform: translateX(100%)';
//     }, 1000); 

//     setTimeout(function() {
//         document.getElementById('img-1').style = 'transform: translateX(-200%)';
//         document.getElementById('img-2').style = 'transform: translateX(-100%)';
//         document.getElementById('img-3').style = 'transform: translateX(0)';
//     }, 2000); 

//     setTimeout(function() {
//         document.getElementById('img-1').style = 'transform: translateX(0)';
//         document.getElementById('img-2').style = 'transform: translateX(100%)';
//         document.getElementById('img-3').style = 'transform: translateX(200%)';
//         startSlider();
//     }, 3000); 

// }


// BUTTON-SLIDER

function showImg1() {
        document.getElementById('img-1').style = 'transform: translateX(0)';
        document.getElementById('img-2').style = 'transform: translateX(100%)';
        document.getElementById('img-3').style = 'transform: translateX(200%)';
}

function showImg2() {
    document.getElementById('img-1').style = 'transform: translateX(-100%)';
    document.getElementById('img-2').style = 'transform: translateX(0)';
    document.getElementById('img-3').style = 'transform: translateX(100%)';
}

function showImg3(){
        document.getElementById('img-1').style = 'transform: translateX(-200%)';
        document.getElementById('img-2').style = 'transform: translateX(-100%)';
        document.getElementById('img-3').style = 'transform: translateX(0)';
}