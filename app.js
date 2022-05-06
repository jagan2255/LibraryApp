const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');
// Part #1 Point 3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = express();
//part #1 Point 1 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors());
//Part #2 Point 7
app.use(express.urlencoded({extended:true}));
//Part #1 Point 2
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 

app.get('/',function(req,res){

    res.render('index',{nav});
    // Part #2 Point 6
});





app.listen( PORT ,()=>{
    console.log(`Server Ready on ${PORT}`);
    // Part #1 Point 5
});