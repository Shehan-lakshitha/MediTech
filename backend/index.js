import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import bookingRoute from "./Routes/booking.js";



dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors(
    {
        origin: '*',
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        optionsSuccessStatus: 200
    }
))

module.exports = (req, res) => {
    //set header first to allow request or origin domain (value can be different)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');

//---- other code

 //Preflight CORS handler
    if(req.method === 'OPTIONS') {
        return res.status(200).json(({
            body: "OK"
        }))
    }

}

// const corsOptions = {
//     origin:true,
// }

app.get('/', (req,res)=> {
    res.send('API is working');
})

mongoose.set('strictQuery', false)
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            // userNewUrlParser: true,
            // userUnifiedTopology: true,
        })
        console.log('MongoDB database is connected')
    } catch (err) {
        console.log('MongoDB database connection failed ' + err)
    }
}

//middleware
app.use(express.json());
app.use(cookieParser());
//app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/bookings', bookingRoute);

app.listen(port, ()=> {
    connectDB();
    console.log("server is running @ http://localhost:" + port);
})
