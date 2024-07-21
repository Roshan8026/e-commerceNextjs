import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema({
    category: { type : mongoose.Schema.Types.ObjectId , ref : 'Category' , required : true },
    name: { type : String , required : true },
    price: { type : Number , required : true },
    description: { type : String , required : true },
    front_image : { type : String , required : true },
    back_image : { type : String , required : true },
    top_image : { type : String , required : true },
    bottom_image : { type : String , required : true },
    quantity : { type : Number , required : true },
    featured : { type : Boolean , required : true },
    slug : { type : String , required : true},
    tags: { type: [String], enum: ['xs', 's', 'm', 'l', 'xl', 'xxl'] }, // Add tags field
},{ timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', ProductsSchema);

export default Product;