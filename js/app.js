// * ibg class for img
function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage =
        'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

// =====================================================

let weight = document.querySelectorAll('.weight');
let price = document.querySelectorAll('.price');
let div = document.querySelector('.best-product');
let button = document.querySelector('.button');

function count() {
  let productPrice;
  let out = '';
  for (let i = 0; i < weight.length; i++) {
    productPrice = (1000 * +price[i].value) / +weight[i].value;

    if (!productPrice) {
      continue;
    } else {
      out += `${Math.floor(productPrice)}<br>`;
    }
    //  ! Необходимо вывести все в масив и с помощью
    // ! минимального значения с массива вывести его в out;
  }
  div.innerHTML = out;
  //   ?  Сделать проверку чтобы не было NAN (если не будет мешать)
}

button.onclick = count;
