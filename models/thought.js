const { Schema, model, Types } = require("mongoose");

thoughtText

createdAt

username

reactions

ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;