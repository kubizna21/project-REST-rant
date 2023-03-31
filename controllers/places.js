const router = require('express').Router()

let places = [
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai_food.avif'
    },
    {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://pixabay.com/photos/coffee-cafe-cat-milk-drink-hot-1711012/'
    }
]



router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router