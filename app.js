var flag=0;

function newProduct(shoeSelect , shoeImg){

//let shoeImg = document.getElementById('img-1').src;

document.getElementById(shoeSelect).src = shoeImg ;
flag++;

}

function newProduct2(shoeImgSource){
    let ImgSource = document.getElementById(shoeImgSource).src;
    document.getElementById('product-1-img-details').src = ImgSource ;

}

function displayDetails(){

    var section =document.querySelector('.shoe-details');
    document.querySelector('.shoe-details').style.display= 'flex';

    // Calculate the scroll position
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    
    // Set the top position of the section relative to the scroll position
    section.style.top = (scrollPosition+30) + 'px';


    //document.querySelector('.shoe-cards-section').style.display='none';
    //document.querySelector('.footer').style.display='none';

}



function showChange(){
    //document.getElementById('background-img').src= 'imgs/airmax90 (2).png'

    //let changer = shoes[1].images[0];

    //console.warn(changer);
    alert();

   // document.getElementById('background-img').src= changer;
}

showChange();

function hideDetails(){

    var section =document.querySelector('.shoe-details');
    document.querySelector('.shoe-details').style.display= 'none';

    
}


function allShowDetails(shoeImg,object,image1Source,image2Source,image3Source){

displayDetails();

let shoeImage = 'product-1-img-details';

let shoeImg2  = document.getElementById(shoeImg).src ;


let showModel = shoes[object].name;
let showPrice = shoes[object].price;
let showDescription = shoes[object].description;



document.getElementById(shoeImage).src = shoeImg2 ;

document.getElementById('img-1').src=(image1Source);
document.getElementById('img-2').src=(image2Source);
document.getElementById('img-3').src=(image3Source);


document.querySelector('.shoe-model').textContent=(showModel);
document.querySelector('.shoe-price').textContent=(showPrice);
document.querySelector('.short-description').textContent=(showDescription);


}


const shoes = [
    {
        name: "Nike Air Max",
        price: "PKR: 5000",
        images: [
            "imgs/sh (1).png",
            "imgs/sh (2).png",
            "imgs/sh (3).png"
        ],
        description: `Let your attitude have the edge in the Air Max Plus Drift, a "tuned" Air experience that offers premium 
        stability and cushioning. Featuring airy mesh, gradient coloring and the original wavy design 
        lines, it celebrates your defiant style.`
    },
    {
        name: "Nike Striped",
        price: "PKR: 7250",
        images: [
            "imgs/am-1 (1).png",
            "imgs/am-1 (2).png",
            "imgs/am-1 (3).png"
        ],
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!'
    },
    {
        name: " Nike AirMax Plus",
        price: "PKR: 9000",
        images: [
            "imgs/AirMaxPlusDrift (1).png",
            "imgs/AirMaxPlusDrift (2).png",
            "imgs/AirMaxPlusDrift (3).png"
        ],
        description: 'Get amazing comfort and style with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!'
    },
    {
        name: " Nike Giannis",
        price: "PKR: 22000",
        images: [
            "imgs/AirMaxPlusDrift (1).png",
            "imgs/AirMaxPlusDrift (2).png",
            "imgs/AirMaxPlusDrift (3).png"
        ],
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!'
    },
    {
        name: " Nike AirMax 90",
        price: "PKR: 17500",
        description: 'Get amazing comfort and style with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!'
    },
    {
        name: " Nike AirForce",
        price: "PKR: 15000",
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!'
    },
    {
        name: " Nike AirMax 97",
        price: "PKR: 28000",
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!'
    },
    {
        name: " Nike Shadow",
        price: "PKR: 15000",
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!'
    },
    {
        name: " Nike AirMax 270",
        price: "PKR: 22000",
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!'
    },
    // Add more shoes as needed
];

