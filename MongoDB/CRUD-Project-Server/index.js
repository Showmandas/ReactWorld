const express = require('express')
const cors=require('cors')
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const app=express()
const port=process.env.PORT || 5000

app.use(cors())
app.use(express.json())


// YvgfIPwflywjA1Pi


const uri = "mongodb+srv://showmandas3216:YvgfIPwflywjA1Pi@cluster0.mz723df.mongodb.net/?retryWrites=true&w=majority";
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
    const usersCollection=client.db('userdb').collection('userdata')
    // read user 
    app.get('/users',async(req,res)=>{
        const cursor=usersCollection.find()
        const result=await cursor.toArray()
        res.send(result)
    })

    app.get('/users/:id',async(req,res)=>{
        const id=req.params.id;
        const query={_id:new ObjectId(id)}
        const user=await usersCollection.findOne(query);
        res.send(user)
    })

    // create user
    app.post('/users',async(req,res)=>{
        const user=req.body;
        console.log(user)
        const result=await usersCollection.insertOne(user);
        res.send(result);
    })

    // delete user 
    app.delete('/users/:id',async(req,res)=>{
        const id=req.params.id;
        const query={_id: new ObjectId(id)}
        const result=await usersCollection.deleteOne(query)
        res.send(result)
    })

    // update user 
    app.put('/users/:id',async(req,res)=>{
        const id=req.params.id;
        const upDateUser=req.body;
        const filter={_id: new ObjectId(id)}
        const options={upsert:true}
        const userUpdate={
            $set:{
                name:upDateUser.name,
                email:upDateUser.email,
            }
        }
        const result=await usersCollection.updateOne(filter,userUpdate,options);
        res.send(result)
    })

    // await client.connect();
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
    res.send("simple crud is running");
})

app.listen(port,()=>{
    console.log(`Simple crud is running on port ${port}`);
})