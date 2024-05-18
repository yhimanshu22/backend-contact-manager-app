import { app } from './app.js';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import colors from 'colors';

dotenv.config();

const PORT = process.env.PORT || 8000 ;


connectDB()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`.bgMagenta);
    });
    
})

.catch((error)=>{
    console.log('mongodb connection failed!!!',error);
    })
