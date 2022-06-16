const textarea = document.querySelector('textarea');
let arr = [];
let i;
let edit = false;

textarea.addEventListener('keydown', correct);

const addZero = num => num <= 9 ? '0' + num : num;

function correct(e){
    if(e.key === 'Enter'){
        if(edit){
            arr[i].text = textarea.value;
        }else{
            let now = addZero(new Date().getHours()) + ':' 
                    + addZero(new Date().getMinutes()) + ':' 
                    + addZero(new Date().getSeconds()) + ' ' 
                    + new Date().getDate()+ '.'
                    + addZero((new Date().getMonth()+1))+ '.' 
                    + addZero(new Date().getFullYear());

            obj = {
                time : now,
                text : this.value
            }
            obj.text !== '' ? arr.push(obj) : arr;
            render();
        } 
    }
};

textarea.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        this.value = '';
    }
});

function showText (index){
    i = index;
    textarea.value = arr[index].text;
    edit = true;
};

function getClose (index){
    arr = arr.slice(arr[index], arr.length - 1);
    render();
};
  
function render(){
    let out = '';
    arr.forEach((item, index) => out += 
            `<div class = 'elem'>
                <li onclick = showText(${index})>${item.time}</li>
                <span onclick = getClose(${index})>X</span>
            </div>`);
    document.querySelector('ol').innerHTML = out;
    textarea.value = '';
};
    






