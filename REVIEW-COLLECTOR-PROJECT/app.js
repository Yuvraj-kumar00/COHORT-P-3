const themMode = document.querySelector("#theme-mode");
const body = document.querySelector("body");

const userName = document.querySelector("#name-box");
const reviews = document.querySelector("#review-box");
const button = document.querySelector("#sub-btn");
const reviewsContainer = document.querySelector("#user-reviews");

const ratingStars = document.querySelectorAll(".ratings-box");

let count = 0;
let storeId;
let starParent;


themMode.addEventListener("click", (e) => {
    body.classList.toggle("dark-mode");
    count++

    if (count % 2 !== 0) {
        themMode.innerHTML = "Light Mode";
    } else {
        themMode.innerHTML = "Dark Mode"
    }
    
})



button.addEventListener("click", () => {
  if (userName.value === "" || reviews.value === "") {
    alert("Don't Submit Empty Value.")
  } 
  else {
    let div = document.createElement("div");
    div.classList.add("review")

    let img = document.createElement("img");
    img.src = "https://plus.unsplash.com/premium_photo-1718358631794-b876ee83f6bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img.classList.add("avtar")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("review-content")
    
    let h3 = document.createElement("h3");
    h3.classList.add("reviewer-name");
    h3.innerHTML = userName.value;
    div2.appendChild(h3);

    let starBox = document.createElement("div");
    starBox.classList.add("reviewer-rating-box")
    for (let i = 1; i <= storeId; i++) {
      let starImg = document.createElement("img");
      starImg.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      starImg.classList.add("reviewer-rating")
      starBox.appendChild(starImg);
    }
    div2.appendChild(starBox);
    

    let p = document.createElement("p");
    p.classList.add("reviewer-review");
    p.innerHTML = reviews.value;
    div2.appendChild(p)
    
    div.appendChild(div2)

    reviewsContainer.appendChild(div)

    userName.value = '';
    reviews.value = '';  

    starParent.forEach( (stars) => {
     stars.src = "https://tse1.mm.bing.net/th?id=OIP.7iI6JHeZze_IiA9R9yroIAHaHF&pid=Api&P=0&h=220"
    })
  }
    
})


ratingStars.forEach( (stars) => {
  stars.addEventListener("click", (e) => {
    let id = e.target.id;
    starParent = Array.from(stars.children);
    
    if (id == 1) {
      e.target.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      storeId = id;
      
    }
    else if (id == 2) {
      e.target.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      e.target.previousElementSibling.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      storeId = id;
      
    }
    else if (id == 3) {
      e.target.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      e.target.previousElementSibling.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      e.target.previousElementSibling.previousElementSibling.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      storeId = id;
      
    }
    else if (id == 4) {
      e.target.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      e.target.previousElementSibling.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      e.target.previousElementSibling.previousElementSibling.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      storeId = id;
      
    }
    else if (id == 5) {
      e.target.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      e.target.previousElementSibling.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      e.target.previousElementSibling.previousElementSibling.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src = "https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png";
      storeId = id;
    }

  })
})
