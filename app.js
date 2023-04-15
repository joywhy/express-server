const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/:name", (req, res) => {
  //const p = req.params; 파람스로 받는 법   p.id
  const {name}= req.params;

  if(name ==="dog"){
    res.json({ name : "멍멍" });
  }else if(name ==="cat"){
    res.json({ name : "애옹"});
  }else if(name ==="pig"){
    res.json({name: "꿀꿀"});
  }else{
    res.json({name: "알수없음"});

  }
   
});






app.listen(port, () => {
  console.log(`listening on port  !!${port}`);
});
