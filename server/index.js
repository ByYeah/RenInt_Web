//Our dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require ('cors')

app.use(express.json())
app.use(cors())

//Runs
app.listen(3006, ()=>{
        console.log('Server is running on port 3006')
})

//Database mysql
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'rentdb',
})

//Routes database

app.post('/Register', (req, res)=>{
    //Variables from form
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    //Creates SQL statement, insert+entrys+db
    const SQL = 'INSERT INTO Users(email, username, password) VALUES (?,?,?)'
    const Values = [sentEmail, sentUserName, sentPassword]
    
    //Query to execute 
    db.query(SQL, Values, (err, results)=>{
        if(error.response){
            res.send(err)
        }
        else{
            console.log('Usuario registrado exitosamente')
            res.send({message: 'Usuario añadido'})
            //Try
        }
    })
})