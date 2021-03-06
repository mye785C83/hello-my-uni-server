import mongoose from 'mongoose';
import dotenv from 'dotenv';

// const MONGO_URI='mongodb://localhost/database';
dotenv.config();

  // Node.js의 native Promise 사용
  mongoose.Promise = global.Promise;

  if(process.env.NODE_ENV === 'development'){
    mongoose.connect('mongodb://localhost/database',{
      dbName: 'MyUnidb',
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useCreateIndex: true, 
      useFindAndModify: false
    }).then(() => console.log('Successfully connected to mongodb'))
      .catch(e => console.error(e));
  }else{
    mongoose.connect(process.env.MONGO_URI,{
      dbName: 'MyUnidb',
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useCreateIndex: true, 
      useFindAndModify: false
    }).then(() => console.log('Successfully connected to mongodb'))
      .catch(e => console.error(e));
  }

  
