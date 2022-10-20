var movingForward = true;


function clickMe() {
    let click = document.getElementById('click');
    let m1 = document.getElementById('m1');
    let bring = document.getElementById('bring');
    if (click != null && m1 != null && bring != null) {
        if (movingForward) {
            bring.classList.remove('animation-back')
            bring.classList.add('animation')
            // m1.classList.remove('animation-back')
            // m1.classList.add('animation')
            // click.classList.remove('animation-back')
            // click.classList.add('animation')
            // click.classList.add = 'animation'
            movingForward = false;
        }
        else {
            bring.classList.remove('animation')
            bring.classList.add('animation-back');
            // m1.classList.remove('animation')
            // m1.classList.add('animation-back');
            // click.classList.remove('animation')
            // click.classList.add('animation-back');
            movingForward = true;
        }
    }
}


// function backward() {
//     let clickB = document.getElementById('clickB');
//     if (clickB != null) {
//         clickB.addEventListener('click', () => {
//             clickB.classList.remove('animation');
//             clickB.classList.add('animation-back');
//         });
//         checkingFowardAndBackward = 'click'
//     }
// }
