let a = prompt('Mablag\'ni kiriting...', 9000)-0
let elTitle = document.querySelector('#title')
let b = a/10650.34  ;
let c = ((b-750)*10650.34)-(11650.03*120)
if(a>0){
    if(c>=0){
        elTitle.textContent ='Oq yo\'l Alisher'
    }
    else{
        elTitle.textContent ='Alisher, ozgina sabr qilish kerak bo’lar ekan.'
    }
}
else{
    elTitle.textContent ='hisonbingizda mablag\' yo\'q'
}