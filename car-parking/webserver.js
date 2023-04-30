
const exp=require('express');
const app=exp();
app.use(exp.static('build'))
app.get('/api',(req,res)=>{
       res.sendFile("./build/index.html",(err)=>{
        if(err){
            console.log(err)
        }
    
       });


});
app.listen(3001, function() {
    console.log('Server is listening on port 3000');
  });
