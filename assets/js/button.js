// Dynamic button
function createDynamicButton(text, color, width, height, colorText, classes) {

    var button = document.createElement("button");
    button.textContent = text;
    button.style.backgroundColor = color;
    button.style.width = width + "%";
    button.style.height = height + "rem";
    button.className = "btnFixCart" + classes;
    button.style.color = colorText;
    return button;
}

var containers = document.getElementsByClassName("imgCartContainer");

// var black = createDynamicButton("Add To Cart", "black", 90, "2.875", "#FEFEFE");

// container.appendChild(black);

for (var i = 0; i < containers.length; i++) {
    var black = createDynamicButton(
        "Add To Cart",
        "black",
        90,
        "2.875",
        "#FEFEFE",
        ""
    );
    containers[i].appendChild(black);
}


var elements = document.getElementsByClassName("discountNew");

for (var i = 0; i < elements.length; i++) {
    var btnNEW = createDynamicButton(
        "NEW",
        "white",
        24,
        "2",
        "black",
        "marjan"
    );
    var discount = createDynamicButton(
        "-50%",
        "#38CB89",
        24,
        "2",
        "#FEFEFE",
        "marjan"
    );
    elements[i].appendChild(btnNEW);
    elements[i].appendChild(discount);
}