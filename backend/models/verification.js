import mongoose,{Schema} from "mongoose";

const verificationSchema = new Schema({
    userId : {type: Schema.Types.ObjectId, required: true, ref: "User"},
    token : {type: String, required: true},
    expiresAt : {type: Date, required: true},

},{
    timestamps: true,
})

const Verification = mongoose.model("Verification", verificationSchema);

export default Verification;