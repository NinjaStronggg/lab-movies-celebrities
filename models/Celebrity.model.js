
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const celebritySchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required:true,
            minLength: 2,
            maxLegnth: 30
        },
        occupation: {
            type: String,
            default: 'unknown'
        },
        catchPhrase: {
            type: String,
            default: '¡Son Robots!'
        }
    },
    {
    timestamps: true
    }
)

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports= Celebrity