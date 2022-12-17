const mongoose = require("mongoose");

/*
    js 객체
    const a = {
        'key' : 'value'
    }

    const b = new a();
*/

const postSchema = new mongoose.Schema({
    // 'key' : 'value'
    title: { type: String, required: true, trim: true },
    user: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    // createdAt : {type:Date,required:true, default: Date.now}
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);