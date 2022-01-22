let newspapers_names = ["Hindustan Times", "The Indian Express", "The Times of India", "DNA India", "NDTV News", "India Today", "CNBCTV18", "News18", "Business Standard", "Moneycontrol", "ANI News", "The Quint", "The Lancet", "CNBC", "VOA News", "Free Press Journal", "The Guardian", "CNN", "The Wall Street Journal", "New York Times", "BBC News", "Fox News"]
const key = 'API KEY'

function contains(list, element) {
    for (const item of list) {
        if (item == element) {
            return true
        }
    }
    return false
}

// To Show Business News
const businessNews = document.getElementById('business-news')
businessNews.addEventListener('click', () => {

    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }
            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})
const businessNews_hamburger = document.getElementById('business-news-hamburger')
businessNews_hamburger.addEventListener('click', () => {

    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }
            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})


// To Show Health News
const health = document.getElementById('health-news')
health.addEventListener('click', () => {

    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }

            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})
const health_hamburger = document.getElementById('health-news-hamburger')
health_hamburger.addEventListener('click', () => {

    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }

            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})


// To Show Technology News
const tech = document.getElementById('tech-news')
tech.addEventListener('click', () => {
    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }
            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})
const tech_hamburger = document.getElementById('tech-news-hamburger')
tech_hamburger.addEventListener('click', () => {
    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }
            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})


// To Show Science News
const science = document.getElementById('science-news')
science.addEventListener('click', () => {
    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }

            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})
const science_hamburger = document.getElementById('science-news-hamburger')
science_hamburger.addEventListener('click', () => {
    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }

            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})


// To Show Sports News
const sports = document.getElementById('sports-news')
sports.addEventListener('click', () => {

    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }

            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})
const sports_hamburger = document.getElementById('sports-news-hamburger')
sports_hamburger.addEventListener('click', () => {

    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }

            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})


// To Show Entertainment News
const entertainment = document.getElementById('entertainment-news')
entertainment.addEventListener('click', () => {

    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${key}`, true)


    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }

            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})
const entertainment_hamburger = document.getElementById('entertainment-news-hamburger')
entertainment_hamburger.addEventListener('click', () => {

    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${key}`, true)


    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }

            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})


// To Show Headlines
const headlines = document.getElementById('headline-news')
headlines.addEventListener('click', () => {
    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }

            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})
const headlines_hamburger = document.getElementById('headline-news-hamburger')
headlines_hamburger.addEventListener('click', () => {
    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }

            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})


// To Show International News
const international = document.getElementById('international-news')
international.addEventListener('click', () => {
    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }
            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})
const international_hamburger = document.getElementById('international-news-hamburger')
international_hamburger.addEventListener('click', () => {
    let cardContainer = document.getElementById('cardContainer')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`, true)

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles

            let newsHTML = ""

            articles.forEach(function (element) {
                if (contains(newspapers_names, element["source"]["name"])) {
                    let news =
                        `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                    newsHTML += news
                    cardContainer.innerHTML = newsHTML
                }
            })
        }
        else {
            console.log("Some Error Occured");
        }
    }
    xhr.send()
})



let cardContainer = document.getElementById('cardContainer')

const xhr = new XMLHttpRequest()

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`, true)

xhr.getResponseHeader('Content-type', 'application/json')

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles

        let newsHTML = ""

        articles.forEach(function (element) {
            if (contains(newspapers_names, element["source"]["name"])) {
                let news =
                    `
            <div class="card">
             <img src="${element["urlToImage"]}" alt="" class="news-image">
            <div class="innercard">
                <div class="title">${element["title"]}</div>
                <div class="description">${element["description"]}</div>
                <a href="${element["url"]}" target="_blank" class="read">Read Full Article</a>
                <p class="source">${element["source"]["name"]}</p>
            </div>
        </div>
        <br>`
                newsHTML += news
                cardContainer.innerHTML = newsHTML
            }
        })
    }
    else {
        console.log("Some Error Occured");
    }
}
xhr.send()



// Hamburger Menue

let click_counter = 0
let hamburger = document.getElementById('hamburgermenue')
hamburger.addEventListener('click', () => {
    const hamburger_nav = document.getElementById('navbar-hamburger')
    hamburger_nav.style.display = 'none'
    if (click_counter % 2 == 0) {
        hamburger_nav.style.display = 'flex'
        click_counter++
    }
    else {
        hamburger_nav.style.display = 'none'
        click_counter++
    }
})