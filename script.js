var form = document.getElementById("item-form");
console.log(form)




form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e[0].value)
})




// Adding a flower ------------------------------------------------------------------------------

var newDiv = document.createElement('div');
console.log(newDiv)

newDiv.setAttribute('id', 'newDivId');

var newImg = document.createElement('img');
newImg.setAttribute('src', 'https://thumbs.dreamstime.com/b/red-flower-icon-vector-blossom-clipart-illustration-148531769.jpg')
// newImg.style.width('20px');

newDiv.appendChild(newImg);
newImg.style.height= '20rem';
newImg.style.marginLeft= '30%';
newImg.style.marginTop= '5%';

var card = document.querySelector('.item-box');
card.parentElement.appendChild(newDiv);