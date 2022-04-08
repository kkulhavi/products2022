const list = document.querySelector('.card-container');
/*
fetch('http://localhost:3000/')//promise
.then(data=>data.json()) //json() pretvara promise u js objekt
.then(data=>data.forEach(item=>list.innerHTML+=`${item.name}<br>`))
*/
fetch('http://localhost:3000/api')//promise
.then(data=>data.json()) //json() pretvara promise u js objekt
.then(data=>data.forEach(item => {
    list.innerHTML+=`
    <div class="card">
            <img src="${item.url}">
            <h3>${item.name}</h3>
            <p >${item.description}</p>
             <p class="price">${item.price}</p>
             <a href="#">add to basket</a>
         </div>
    `
}))


