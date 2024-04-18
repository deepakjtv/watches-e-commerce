// navigation menu
const nav = document.getElementById('nav');
const menu_bar = document.getElementById('menu_bar');
const closse = document.getElementById('close');


if (menu_bar) {
    menu_bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
}

if (closse) {
    closse.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
}

// search functionality

const srch = () => {
    const search = document.querySelector('#search').value.toUpperCase();
    const product_box = document.querySelector('#product-box');
    const product = document.querySelectorAll('.product');
    const proName = product_box.getElementsByTagName('h4');
    for (i = 0; i < proName.length; i++) {
        let match = product[i].getElementsByTagName('h4')[0];
        console.log(match);
        if (match) {
            let textValue = match.innerHTML || match.textContent
            if (textValue.toUpperCase().indexOf(search) > -1) {
                product[i].style.display = '';
            } else {
                product[i].style.display = 'none';
            }

        }
    }

};


//pro_detail page
let smallImg = document.querySelectorAll('.smallImg');

smallImg.forEach((sImg, ind) => {
    sImg.addEventListener('click', (e) => {
        mainImg.src = smallImg[ind].src;
        // console.log(mainImg.src);

    })

})



// product detail links


// from index.html
// let pro = document.querySelectorAll('.pro');
// sessionStorage.setItem('pro', pro)
// // console.log(pro);


// // from index.html
// let proDetLink = document.querySelectorAll('.pro_det_link');
// // from pro_details.html
// let pro_details = 'pro_details.html'
// let mainImg = document.getElementById('mainImg');
// let mainImg = localStorage.getItem('mainImg')
// console.log(mainImg);

// pro.forEach((product, ind) => {
// let mainImg = document.getElementById('mainImg');

// let clickedImage = localStorage.getItem('clickedImage')
// product.addEventListener('click', (e) => {

// let mainImg = document.getElementById('mainImg');
// localStorage.setItem('clickedImage', pro[ind]);

// console.log('prodcuct clicked');
// let proImg = localStorage.getItem('clickedImage')
// console.log(proImg);
// e.preventDefault();
// e.stopPropagation()
// console.log(pro[ind].src);
// console.log(mainImg);
// img.src = pro[ind].src;

// window.location.href = 'pro_details.html';


// })
// product.onclick(() => {
//     pro_det.src = pro[ind].src;
// })

// })
//
// proDetLink.forEach((product) => {
//     product.addEventListener('click', (e) => {
//         console.log('link clicked');
//         e.preventDefault();
//         // e.stopPropagation()

//     })
// })

// add to cart

// const addToCart = document.querySelectorAll('.cart');
// addToCart.forEach((product) => {
//     // console.log(price);
//     product.addEventListener('click', (e) => {
//         console.log(e.value);
//         const img = document.querySelector('.pro');
//         const proName = document.querySelector('.product-name');
//         const price = document.querySelector('.price').firstChild;
//         // const ttbody = document.querySelector('tbody');
//         // console.log(ttbody);
//         const tbody = JSON.parse(localStorage.getItem('tbody'));
//         console.log(tbody);

//         let cartt = document.createElement('tr').innerHTML =
//             `       <td>delele</td>
//                     <td>${img}</td>
//                     <td> ${proName}</td>
//                     <td>${price}</td>
//                     <td><input type="number" name="" value="1" id=""></td>
//                     <td>$13.5</td>
//                     `

//         // tbody.appendChild(cartt);
//         localStorage.setItem('cartt', cartt);


//     })


// })


// const allProducts = document.querySelectorAll('.product');
// allProducts.forEach((pro, ind) => {


//     pro.addEventListener('click', (e) => {
//         for (i = 0; i <= ind; i++) {
//             console.log('deepak');
//         }

//     })


//     // if(ind>=){

//     // }

// })

//product details display on prodcuct detail page

const product = document.querySelectorAll('.product');
product.forEach((pro, ind) => {
    let imgSrc = [];
    pro.addEventListener('click', () => {
        const img = pro.querySelector('img');
        imgSrc.push(img.src)
        localStorage.setItem('imgSrc', JSON.stringify(imgSrc));
    })

})


// let mainImg = document.getElementById('mainImg');
// let smallImgg = document.querySelectorAll('.smallImg');
// const imgSrc = JSON.parse(localStorage.getItem('imgSrc'));
// if (imgSrc) {
//     mainImg.src = imgSrc;
//     smallImgg[0].src = imgSrc
// }


//add to cart
console.log();
product.forEach((pro) => {
    const addToCart = pro.querySelector('h3').lastChild;
    // let addToCart = document.querySelector('.cart').innerHTML;
    // console.log(addToCart);


    addToCart.addEventListener('click', (e) => {

        // const img = pro.querySelector('img');
        // const productName = pro.querySelector('.product-name');
        // const price = pro.querySelector('h3');

        // const tbody = document.querySelector('tbody');
        let productDet = [];
        // const productDet = { img: img, productName: productName, price: price }
        const tr = document.createElement('tr');
        // console.log(tr);
        tr =
            `
                    <td>delete</td>
                    
                    <td><input type="number" name="" value="1" id=""></td>
                    <td>$13.5</td>
                    `;
        productDet += tr.outerHTML;
        // <td>${img}</td>
        // <td> ${productName}</td>
        // <td>${price}</td>

        // localStorage.setItem('productDet', productDet);
        // localStorage.clear()
        localStorage.setItem('productDet', productDet);
        console.log(productDet);
        // const productDett = JSON.parse(localStorage.getItem('productDet'))
        // console.log(productDett);

        // tbody.append(productDett[0])
        // console.log(JSON.stringify(productDet));




    })

})

