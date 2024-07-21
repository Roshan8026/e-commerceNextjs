import connectDB from "@/utils/connectDB";
import Banner from "@/models/Banner";

export default async (req, res) => {
    await connectDB();
    switch (req.method) {
        case "POST":
            await addBanner(req, res)
            break;
        case "GET":
            await getBanner(req, res)
            break;
        case "PUT":
            await updateBanner(req, res)
            break;
        case "DELETE":
            await deleteBanner(req, res)
            break;
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

// adding Banner

const addBanner = async (req, res) => {
    const data = req.body;
    try {
        await Banner.create(data);
        return res.status(201).json({ msg: "Banner Added Successfully" });
    }
    catch (error) {
        console.log('error in saving Banner (server) => ' + error)
        return res.status(405).json({ error: "Cannot Add Banner , Retry !" })
    }
}

// deleting Banner
const deleteBanner = async (req, res) => {
    try {
        const id = req.query.id;
        console.log(id);
        const productDeletionResult = await Banner.findByIdAndDelete(id);
        return res.status(201).json({ msg: "Banner Deleted Successfully" });
    }
    catch (error) {
        console.log('error in deleting Banner(server) => ' + error);
        return res.status(405).json({ error: "can't delete Banner , Retry !" });
    }
}

// update Product
const updateBanner = async (req, res) => {
    const data = req.body;
    const id = data._id;
    try {
        await Banner.findByIdAndUpdate(id, data)
        return res.status(200).json({ msg: 'Banner updated successfully' })

    }
    catch (error) {
        console.log('error in getting Banner data by id (server) => ' + error)
        return res.status(408).json({ error: 'cannot update Banner data' })
    }
}


// get Banner
const getBanner = async (req, res) => {

    try {
        const data = await Banner.find();
        return res.status(201).send(data);
    }
    catch (error) {
        console.log('error in getting Banner (server) => ' + error);
        return res.status(405).json({ error: "can't get data , Retry !" });
    }
}
