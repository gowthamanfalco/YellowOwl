
const express =require("express");
const cors =require("cors");
const mysql=require("mysql");

const app =express();
app.use(express.json());

app.use(cors());

// sql connector

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"M.gowthaman07",
    database:"crud"
})

app.get("/",(req,res)=>{
    const sql="select *from student";
    db.query(sql,(err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post("/create",(req,res)=>{
    const sql="insert into student (`name`,`email`,`phone`,`enrollnumber`,`dateofadmission`) values(?,?,?,?,?)";
    const values =[
            req.body.name,
            req.body.email,
            req.body.phone,
            req.body.enrollnumber,
            req.body.dateofadmission
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})


app.put("/update/:id",(req,res)=>{
    const sql="update student set `name`= ? ,`email` = ? ,`phone` = ? ,`enrollnumber` = ?, `dateofadmission` = ? where ID=?";
    const values =[
            req.body.name,
            req.body.email,
            req.body.phone,
            req.body.enrollnumber,
            req.body.dateofadmission
    ]
    const id=req.params.id;
    db.query(sql,[...values,id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})


app.delete("/student/:id",(req,res)=>{
    const sql="delete  from student where ID =?";
   
    const id=req.params.id;
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})




app.listen(8081,()=>{
    console.log("listening");
})