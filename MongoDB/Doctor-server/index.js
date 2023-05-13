const express=require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors=require('cors')
const port=process.env.PORT || 5000
const app=express()

app.use(cors())
app.use(express.json())

//RG6J8rvareluvVET



const uri = "mongodb+srv://doctor:RG6J8rvareluvVET@cluster0.mz723df.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const doctorsCollection=client.db('doctors').collection('doctorsData')
    const bookingCollection=client.db('bookings').collection('bookingData')

   app.get('/service',async(req,res)=>{
    const cursor = doctorsCollection.find();
    const result = await cursor.toArray();
    res.send(result);
   })

   app.get('/service.:id',async(req,res)=>{
    const id=req.params.id;
    const query={_id: new ObjectId(id)}
    const Options={
        projection:{title:1,price:1,img:1,service_id:1}
    }
    const result=doctorsCollection.findOne(query,Options)
    res.send(result);
   })

   //read
   app.get('/bookings',async(req,res)=>{
    console.log(req.query.email)
    let query={}
    if(req.query?.email){
        query={email:req.query.email}
    }
    const result=await bookingCollection.find().toArray()
    res.send(result)
   })

   //create
   app.post('/bookings',async(req,res)=>{
    const booking=req.body;
    console.log(booking)
    const result=await bookingCollection.insertOne(booking)
    res.send(result)

   })

   //delete
   app.delete('/bookings/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await bookingCollection.deleteOne(query);
    res.send(result);
})





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
    res.send('doctor site is running')
})

app.listen(port,()=>{
    console.log(`doctor site running on port ${port}`)
})