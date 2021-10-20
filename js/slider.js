const contenierItems = document.querySelector('.items');
const marcarImg = document.querySelectorAll('.mark-banner > span');
const next = document.getElementById('passar');
const voltar = document.getElementById('voltar');

let mochilaItems = document.querySelectorAll('.item');
let indexImg = 0;
let sliderShow;

const play = ()=> {

    contenierItems.appendChild(mochilaItems[0]);
    mochilaItems = document.querySelectorAll('.item')

    indexImg++
    mark()

}

const mark = ()=> {

    if(indexImg >= marcarImg.length ){

        indexImg = 0

    }else if( indexImg < 0){

        indexImg = 3

    }
    switch (indexImg){

        case 0 :
            for( let cont = 0; cont < marcarImg.length; cont++){

                marcarImg[cont].style.backgroundColor = "#969696e9";

            }
            marcarImg[0].style.backgroundColor = "var(--cor2)";
            break
        
        case 1 :
            for( let cont = 0; cont < marcarImg.length; cont++){

                marcarImg[cont].style.backgroundColor = "#969696e9";

            }
            marcarImg[1].style.background = "var(--cor2)";
            break

        case 2 :
            for( let cont = 0; cont < marcarImg.length; cont++){

                marcarImg[cont].style.backgroundColor = "#969696e9";

            }
            marcarImg[2].style.background = "var(--cor2)";
            break

    }

}

const pararSlider = ()=> {

    clearInterval(sliderShow)

}

const voltarSlider = ()=> {

    let index = mochilaItems.length - 1
    let ultimoItem = mochilaItems[index];

    
    contenierItems.insertBefore( ultimoItem, mochilaItems[0]);
    mochilaItems = document.querySelectorAll('.item')

    indexImg--
    mark()

    console.log(arrayItems)

}

next.addEventListener('mouseover', pararSlider);
next.addEventListener('mouseout', ()=> {
    sliderShow = setInterval(play, 2500)
})
next.addEventListener('click', play);

voltar.addEventListener('mouseover', pararSlider);
voltar.addEventListener('mouseout', ()=> {
    sliderShow = setInterval(play, 2500)
})
voltar.addEventListener('click', voltarSlider)

sliderShow = setInterval(play, 2500)