const mongoose = require('mongoose')

const bread_schema = new mongoose.Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG" },
    baker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'baker_schema',
    }
})

bread_schema.methods.getBakedBy = function() {
    return `${this.name} baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}


module.exports = mongoose.model('bread_schema', bread_schema)