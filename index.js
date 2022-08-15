import express from 'express'

const port = 3000;

const app = express()

app.get('/',(req,res,)=>{
    res.send("up and runnig with the graphql crash course")
})

app.listen(port,()=>{
    console.log("server is runnig at port ",port);
}) 

// schema resolver and configuration  