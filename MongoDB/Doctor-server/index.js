const express=require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt=require('jsonwebtoken')
const cors=require('cors')
require('dotenv').config()
const port=process.env.PORT || 5000
const app=express()

app.use(cors())
app.use(express.json())

console.log(process.env.DB_USER)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mz723df.mongodb.net/?retryWrites=true&w=majority`;

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


    //jwt
    app.post('/jwt',(req,res)=>{
      const user=req.body
      console.log(user)
      const token=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
      console.log(token)
      res.send({token})
    })

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
    const result=await bookingCollection.find(query).toArray()
    res.send(result)
   })

   //create
   app.post('/bookings',async(req,res)=>{
    const booking=req.body;
    console.log(booking)
    const result=await bookingCollection.insertOne(booking)
    res.send(result)

   })

   app.patch('/bookings/:id',async(req,res)=>{
    const id=req.params.id
    const filter={_id:new ObjectId(id)}
    // const options={upsert:true}
    const updatedData=req.body
    console.log(updatedData)
    const updateDoc={
      $set:{
        status:updatedData.status
      }
    }
    const result=await bookingCollection.updateOne(filter,updateDoc)
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