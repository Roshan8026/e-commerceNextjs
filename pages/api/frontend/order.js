import connectDB from "@/utils/connectDB";
import Order from "@/models/Order";

export default async (req, res) => {
    await connectDB();
    switch (req.method) {
        case "POST":
            await create_order(req, res);
            break;
        case "GET":
            await get_order_data(req, res);
            break;
        case "PUT":
            await update_order_status(req, res);
            break;
        case "DELETE":
            await delete_order(req, res);
            break;
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

const create_order = async (req, res) => {
    const data = req.body;

    try {
        const order = new Order(data);
        await order.save();
        return res.status(200).json({ msg: "Order created successfully", order });
    } catch (error) {
        console.log('Error in creating order (server) => ' + error);
        return res.status(401).json({ error: "Something went wrong" });
    }
}

const get_order_data = async (req, res) => {
    const { id } = req.query;
    try {
        const orderData = await Order.find({ user: id }).populate('products.product');
        return res.status(200).send(orderData);
    } catch (error) {
        console.log('Error in getting order data (server) => ' + error);
        return res.status(401).json({ error: "Something went wrong" });
    }
}
