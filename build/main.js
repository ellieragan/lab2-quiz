
//Finds the value that has been selected most frequently by the user
function mostFrequent(arr, n) {

    let max = 0;
    let max_ele;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j])
                count++;
        }

        if (count > max) {
            max = count;
            max_ele = arr[i];
        }
    }

    return max_ele;
}

//If results button is pressed:
$("button").on('click', function (e) {
    var choices = $("input[type='radio']:checked").map(function (i, radio) {
        return $(radio).val();
    }).toArray();

    icecreams = ['chocolate fudge brownie', 'cherry garcia', 'everything but the...', 'the tonight dough', 'strawberry cheesecake', 'Error'];
    descriptions = [
        "Ben & Jerry's Chocolate Fudge Brownie ice cream is a rich and decadent chocolate ice cream that is mixed with chunks of fudgy brownies. The ice cream is made with high-quality ingredients, including cream, sugar, and cocoa, and has a smooth and creamy texture. The brownie pieces are soft and chewy, adding a delicious texture and a chocolatey sweetness to the ice cream. This flavor has been a popular choice among ice cream lovers for many years and is one of Ben & Jerry's most iconic flavors.",
        "Ben & Jerry's Cherry Garcia ice cream is a flavorful blend of cherry ice cream and chunks of dark chocolate. The cherry ice cream is made with high-quality cream, sugar, and real cherries, giving it a sweet and tangy flavor. The dark chocolate chunks are generously mixed into the ice cream, adding a rich and decadent texture that complements the sweetness of the cherries. The combination of cherry and dark chocolate flavors creates a perfect balance of sweet and rich, making Cherry Garcia a beloved and iconic flavor of Ben & Jerry's.",
        "Ben & Jerry's Everything But The... is a unique and flavorful ice cream that combines a variety of different mix-ins. The ice cream base is a smooth and creamy vanilla ice cream, which is then loaded with chunks of chocolate chips, peanut butter cups, fudge-covered toffee pieces, and white chocolate chunks. The combination of these different flavors and textures creates a delicious and indulgent dessert experience. This flavor was inspired by the idea of including 'everything but the kitchen sink' in the ice cream, hence its name. It is a popular and well-loved flavor among ice cream fans who enjoy a variety of mix-ins in their dessert.",
        "Ben & Jerry's The Tonight Dough ice cream is a collaboration between the iconic ice cream brand and the popular late-night TV show host, Jimmy Fallon. The flavor is a delicious mix of caramel and chocolate ice creams, with chocolate cookie swirls and pieces of chocolate chip cookie dough and peanut butter cookie dough. The ice cream has a smooth and creamy texture, with a rich and indulgent flavor profile that combines the sweetness of the caramel and the richness of the chocolate with the chewiness of the cookie dough pieces. This flavor has become a fan favorite since its release in 2015 and is a testament to the fun and creative spirit of both Ben & Jerry's and Jimmy Fallon.",
        "Ben & Jerry's Strawberry Cheesecake ice cream is a flavorful blend of sweet and tangy strawberry ice cream mixed with swirls of creamy cheesecake batter and chunks of crunchy graham cracker crust. This combination creates a rich and indulgent dessert that is perfect for anyone who loves the classic taste of strawberries and cheesecake.",
        "Not all questions were answered!"
    ];

    images = [
        "<img src='https://www.benjerry.com/files/live/sites/systemsite/files/Home/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/cherry-garcia-2022-landing-open.png'/>",
        "<img src='https://www.benjerry.com/files/live/sites/systemsite/files/Home/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/cherry-garcia-2022-landing-open.png'/>",
        "<img src='https://www.benjerry.com/files/live/sites/systemsite/files/Home/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/cherry-garcia-2022-landing-open.png'/>",
        "<img src='https://www.benjerry.com/files/live/sites/systemsite/files/Home/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/cherry-garcia-2022-landing-open.png'/>",
        "<img src='https://www.benjerry.com/files/live/sites/systemsite/files/Home/Flavors/Product%20Assets/US/Cherry%20Garcia%20Ice%20Cream/cherry-garcia-2022-landing-open.png'/>",
    ];

    //If not every question has been answered, give error index
    if (choices.length < 6) {
        icecream = 5;
    }

    else {
        icecream = mostFrequent(choices, 6)
    }

    //Output ice cream type and description (or error)
    $(".modal-content h1").text(function (n) {
        return icecreams[icecream];
    });

    $(".modal-content p").text(function (n) {
        return descriptions[icecream];
    });
});

const showImageButton = document.getElementById("help");
const image0 = document.getElementById("ice-cream-image0");
const image1 = document.getElementById("ice-cream-image1");
const image2 = document.getElementById("ice-cream-image2");
const image3 = document.getElementById("ice-cream-image3");
const image4 = document.getElementById("ice-cream-image4");

//Also when results button is pressed, show one of 5 images
showImageButton.addEventListener("click", () => {

    let u = parseInt(icecream)
    switch (u) {
        case 0:
            image0.style.display = "block";
            break
        case 1:
            image1.style.display = "block";
            break
        case 2:
            image2.style.display = "block";
            break
        case 3:
            image3.style.display = "block";
            break
        case 4:
            image4.style.display = "block";
            break
        default:
            console.log(`No ice cream found`);
    }
});

//Outline selected answer in one color and every non-selected answer in another color
const myForms = document.querySelectorAll('.answers');

myForms.forEach(function (myForm) {
    myForm.onsubmit = e => e.preventDefault();
    myForm.oninput = () => { myForm.classList.toggle('Activ', myForm.value !== ''); }
});

//Modal
var modal = document.getElementById("the-modal");
var button = document.getElementById("help");
var span = document.getElementsByClassName("close")[0];

button.onclick = function () {
    modal.style.display = "block";

}

span.onclick = function () {
    modal.style.display = "none";
    location.reload();

}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
}
