const wrapper = document.querySelector('.wrapper');
let listItems = [];

const addDataToHtml = () => {
    wrapper.innerHTML = ``;

    if(listItems.length > 0) {
        listItems.forEach(item => {
            const containerDiv = document.createElement('div');

            containerDiv.innerHTML = `
                <div class="reaction">
                <div class="img-reaction">
                <img src="${item.icon}" alt="">
                <p>${item.category}</p>
                </div>
                <p>${item.score} <span class="total">/100</span></p>
            </div>
            `;
            wrapper.appendChild(containerDiv);
        })
    }
}
const initApp = () => {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        listItems = data;
        
        addDataToHtml();
    })
}

initApp();