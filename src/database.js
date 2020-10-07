import mongoose from 'mongoose';

const URI = 'mongodb://localhost/stack-mern';

mongoose.connect(URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));


export default mongoose;