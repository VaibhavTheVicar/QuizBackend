import express from 'express'
import mongoose from 'mongoose'
import questionnaire from './dbQuestions.js'
import Cors from 'cors'
//App Configuration
const app = express();
const port = process.env.PORT || 4001;
const password = 'Vaibhav#1'
const remoteDatabaseName = 'questionDatabase'
const connection_uri = "mongodb+srv://quizApp:Vaibhav%231@cluster0.hkwux.mongodb.net/questionData?retryWrites=true&w=majority";
//Middlewares
app.use(express.json())
app.use(Cors())
//db configuration
mongoose.connect(connection_uri, {useNewUrlParser:true, 
    useUnifiedTopology: true },(err)=>{
        if(!err) console.log("success")
        else console.log(`faliure while connection to db`+err.message)
    })


//API Endpoints
app.get('/',(request,response)=>response.status(200).send("hey"))
app.get('/backend/question',(req,res)=>{
    questionnaire.find((err,data)=>{
        if(err){
            res.status(500).send(err.message);
        }
        else{
            res.status(200).send(data);
        }
    })
})
//Listener 
app.listen(port,()=>console.log(`listen on ${port}`))