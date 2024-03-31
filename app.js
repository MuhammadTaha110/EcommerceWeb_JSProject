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
            "imgs/Nike Giannis (1).png",
            "imgs/Nike Giannis (2).png",
            "imgs/Nike Giannis (3).png"
        ],
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!'
    },
    {
        name: " Nike AirMax 90",
        price: "PKR: 17500",
        description: 'Get amazing comfort and style with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!',
        images: [
            "imgs/airmax90 (1).png",
            "imgs/airmax90 (2).png",
            "imgs/airmax90 (3).png"
        ],
    },
    {
        name: " Nike AirForce",
        price: "PKR: 15000",
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!',
        images: [
            "imgs/airforce (3).png",
            "imgs/airforce (2).png",
            "imgs/airforce (1).png"
        ]
    },
    {
        name: " Nike AirMax 97",
        price: "PKR: 28000",
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!',
        images: [
            "imgs/chicago (1).png",
            "imgs/chicago (2).png",
            "imgs/chicago (3).png"
        ]
    },
    {
        name: " Nike Shadow",
        price: "PKR: 15000",
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!',
        images: [
            "imgs/shadow (1).png",
            "imgs/shadow (2).png",
            "imgs/shadow (3).png"
        ]
    },
    {
        name: " Nike AirMax 270",
        price: "PKR: 22000",
        description: 'Step into style and comfort with our latest collection of shoes. Crafted with precision and passion, our shoes seamlessly blend fashion-forward design with unparalleled comfort. Shop now Hurry up!'
    },
    // Add more shoes as needed
];


/*
function showChange() {
    //let showModel2 = shoes[1].images[1]; // Accessing the second shoe object's name
    //console.warn(showModel2);

    for(let count=0; count < shoes.length-1 ; count++){
        for(let countImages = 0 ; countImages < shoes[count].images.length; countImages++){
            //let showModel2 = shoes[count].images[countImages]; // Accessing the second shoe object's name
            //console.warn(showModel2);
            //document.querySelector('#background-img').src=showModel2;

            setTimeout(() => {
                let showModel2 = shoes[count].images[countImages];
              // console.warn(showModel2);
              document.querySelector('#background-img').src=showModel2;

            }, countImages * 2000); // Multiply countImages by 5000 to increase delay for each image

        }

    }

    //document.querySelector('#background-img').src=showModel2;
}
*/

function showChange() {
    for (let count = 0; count < shoes.length; count++) {
        for (let countImages = 0; countImages < shoes[count].images.length; countImages++) {
            // Calculate the delay based on both count and countImages
            let delay = (count * shoes[count].images.length + countImages) * 2000;
            
            // Wrap the console.warn inside setTimeout to create a delay
            setTimeout(() => {
                let showModel2 = shoes[count].images[countImages];
                document.querySelector('#background-img').src=showModel2;
                //console.warn(showModel2);
            }, delay);
        }
    }
    
}

setInterval (() => {
    showChange();
},
    5000
)
