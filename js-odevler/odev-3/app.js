const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


let btnContainer_DOM = document.querySelector(".btn-container");
let categories = ["All",];
let button_DOM = document.querySelectorAll(".btn-item");
let sectionCenter_DOM = document.querySelector(".section-center");

//finding uniqiue category names
for (let i=0; i<menu.length; i++) {
  let categoryName = menu[i].category;
  if (!categories.includes(categoryName)) {
    categories.push(categoryName);
  }
}

//adding buttons to btn-container
for (let i=0; i<categories.length; i++) {
  let button = document.createElement("button");
  button.className = "btn btn-item btn-outline-dark";
  button.setAttribute("id", categories[i]);
  button.innerHTML = categories[i];
  btnContainer_DOM.appendChild(button);
}

// beginning with all menu
for (let i=0; i<menu.length; i++) {
  //creating menu-item element
  let menuItem = document.createElement("div");
  menuItem.className = `menu-items col-sm-6 ${menu[i].category}`;
  sectionCenter_DOM.appendChild(menuItem);
  //creating img element
  let img = document.createElement("img");
  img.className = "photo";
  img.alt = menu[i].title;
  img.src = menu[i].img;
  menuItem.appendChild(img);
  //creating menu-info
  let menuInfo = document.createElement("div");
  menuInfo.className = "menu-info";
  menuItem.appendChild(menuInfo);
  //creating menu-title
  let menuTitle = document.createElement("div");
  menuTitle.className = "menu-title";
  menuInfo.appendChild(menuTitle);
  //creating title
  let title = document.createElement("h4");
  title.innerHTML = menu[i].title;
  menuTitle.appendChild(title);
  //creating price
  let price = document.createElement("h4");
  price.innerHTML = menu[i].price;
  menuTitle.appendChild(price);
  //menu desc
  let desc = document.createElement("div");
  desc.className = "menu-text";
  desc.innerHTML = menu[i].desc;
  menuInfo.appendChild(desc);
}


let menuItems = document.querySelectorAll(".menu-items");

//All button - to show korean food
let allBtn = document.querySelector("#All");

allBtn.addEventListener("click", function() {
  
  for (let i=0; i<menu.length; i++) {
  menuItems[i].style.display = "flex";
  }
})

//Korea button - to show korean food
let koreaBtn = document.querySelector("#Korea");

koreaBtn.addEventListener("click", function() {
  
  for (let i=0; i<menu.length; i++) {
    if (menuItems[i].classList.contains("Korea")) {
      menuItems[i].style.display = "flex";
    }
    else {
      menuItems[i].style.display = "none";
    }
  }
})

//Japan button - to show korean food
let japanBtn = document.querySelector("#Japan");

japanBtn.addEventListener("click", function() {
  
  for (let i=0; i<menu.length; i++) {
    if (menuItems[i].classList.contains("Japan")) {
      menuItems[i].style.display = "flex";
    }
    else {
      menuItems[i].style.display = "none";
    }
  }
})

//China button - to show korean food
let chinaBtn = document.querySelector("#China");

chinaBtn.addEventListener("click", function() {
  
  for (let i=0; i<menu.length; i++) {
    if (menuItems[i].classList.contains("China")) {
      menuItems[i].style.display = "flex";
    }
    else {
      menuItems[i].style.display = "none";
    }
  }
})
