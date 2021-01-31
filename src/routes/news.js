const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('/', async(req, res) => {
    try {
         const newsAPI = await axios.get(`http://newsapi.org/v2/everything?q=globalwarming&from=2020-12-31&sortBy=publishedAt&apiKey=0ee294f72e37445f9de78b8d7181baf2`)
        res.render('pages/news', { articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
            res.render('pages/news', { articles : null })
        } else if(err.requiest) {
            res.render('pages/news', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('pages/news', { articles : null })
            console.error('Error', err.message)
        }
    } 
})

newsRouter.get('/about', async(req, res) => {
    res.render('pages/about');
})

newsRouter.get('/resources', async(req, res) => {
    res.render('pages/resources');
})


module.exports = newsRouter 


