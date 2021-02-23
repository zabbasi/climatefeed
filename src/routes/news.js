const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

function formatDate() {
    var d = new Date();
        d.setDate(d.getDate() - 5);
        month = '' + (d.getMonth() + 1);
        day = '' + d.getDate();
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

newsRouter.get('/', async(req, res) => {
    try {
         const newsAPI = await axios.get(`http://newsapi.org/v2/everything?q=climatechange&from=' + formatDate() + 'sortBy=publishedAt&apiKey=5bb259a4611147339ceb86a9f63589f4`)
         //const newsAPI = await axios.get('https://newsapi.org/v2/everything?q=climatechange&from=' + formateDate() + '&apiKey=5bb259a4611147339ceb86a9f63589f4')
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


