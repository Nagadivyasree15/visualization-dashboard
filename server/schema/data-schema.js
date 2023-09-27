import mongoose from 'mongoose';

const graphSchema = mongoose.Schema({
        intensity : Number,
    	likelihood : Number,
    	relevance : Number,
    	start_year : String,
    	country : String,
    	topic : String,
    	region : String
   },
   )

const Graph = mongoose.model('Graph', graphSchema);

export default Graph;