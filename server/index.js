import Express from "express";

const app = Express();

app.get("/" , (req, res, next)=>{
    res.status(200).json({
        message : "Successfully running"
    })
})

app.listen(5000, ()=>{
    console.log("Listening on 5000");
})