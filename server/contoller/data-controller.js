import Graph from "../schema/data-schema.js";

export const getInfo = async(req, res) => {
    try {
       const info = await Graph.find({});
       return res.status(200).json(info);
    } catch(err) {
        console.log(err.message,"error");
        res.status(500).json({error:"internal server error"})
    }
}

