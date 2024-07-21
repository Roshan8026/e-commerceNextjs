import mongoose from "mongoose";

const BannerSchema = mongoose.Schema({
    image : { type : String , required : true }
},{ timestamps: true });

const Banner = mongoose.models.Banner || mongoose.model('Banner', BannerSchema);

export default Banner;