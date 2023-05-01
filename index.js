const express= require ("express");
const app=express();
const port= process.env.PORT || 5000;
const cors= require ('cors');
const chefs= require('./chefs.json')
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Assignment 10 RunninG')
});
app.get('/chefs',(req,res)=>{
    res.send(chefs)
})
app.get('/chefs/:id',(req,res)=>{
    const id= req.params.id;
    const detailChef= chefs.find(c=>c.id===id);
    res.send(detailChef);
})
app.listen(port,()=>{
    console.log(`assignment 10 running port ${port}`)
})

