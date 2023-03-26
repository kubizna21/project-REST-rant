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



router.get('/', (req, res) => {
    res.render('places/index', { places })
})

module.exports = router