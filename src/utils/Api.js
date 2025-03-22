const NewsApi = (apikey)=>{
    return fetch(`https://newsapi.org/v2/everything?q=tesla&from=2025-01-27&sortBy=publishedAt&${apikey}`)
}
const apikey= "apikey=9311ed1a839b439e8feb735c8169a497"
