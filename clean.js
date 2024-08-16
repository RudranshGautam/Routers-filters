
const express=require('express');
const bodyParser=require('body-parser');
const clean=express();
const adminRoutes=require('./route/admin');
const shopRoutes=require('./route/shop');
clean.use(bodyParser.urlencoded({extended:false}));
clean.use(adminRoutes);
clean.use(shopRoutes);
clean.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
});
clean.listen(3000);