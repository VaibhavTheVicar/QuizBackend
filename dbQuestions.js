import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
    questionText:String,
    negation:Boolean,
    answerOptions: [
      { answerText: String, verdict: Boolean }]
})

export default mongoose.model('question',questionSchema);