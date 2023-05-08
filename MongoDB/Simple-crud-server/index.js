const express = require('express')
const cors=require('cors')
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const app=express()
const port=process.env.PORT || 5000

app.use(cors())
app.use(express.json())




const uri = "mongodb+srv://showmandas3216:UcRJm62SFD7vqs7y@cluster0.8zuh1en.mongodb.net/?retryWrites=true&w=majority";

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

  const usersCollection=client.db('userDB').collection('users')
  //read users
  app.get('/users',async(req,res)=>{
    const cursor=usersCollection.find()
    const result=await cursor.toArray();
    res.send(result)
  })

  app.get('/users/:id',async(req,res)=>{
    const id = req.params.id 
    const query={_id: new ObjectId(id)}
    const user=await usersCollection.findOne(query)
    res.send(user)
  })
  app.put('/users/:id',async(req,res)=>{
    const id = req.params.id 
    const user=req.body;
    console.log(user)
    const filter={_id: new ObjectId(id)}
const options={upsert:true}
const updateUser={
  $set:{
    name:user.name,
    email:user.email
  }
}
const result=await usersCollection.updateOne(filter,updateUser,options)
res.send(result);
  })

  //create users
    app.post('/users',async(req,res)=>{
      const user=req.body;
      console.log('new user',user);
      // res.send(result)
   const result=await usersCollection.insertOne(user);
   res.send(result)
    })

    //delete data
    app.delete('/users/:id',async(req,res)=>{
      const id=req.params.id;
      const query={_id: new ObjectId(id)}
      const result=await usersCollection.deleteOne(query)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error

  }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
    res.send("simple crud is running");
})

app.listen(port,()=>{
    console.log(`Simple crud is running on port ${port}`);
})