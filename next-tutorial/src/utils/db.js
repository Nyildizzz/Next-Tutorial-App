import mongoose from "mongoose";

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);

    }
    catch(error){
        console.log(error)
        handleError(error);
        throw new Error("CONNECTİON ERROR");
    }
}
export default connect;