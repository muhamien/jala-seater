import { getMinifiedResult, minifyResults, table } from "../../lib/airtable";

export default async function handler (req, res) {
    const { 
        name,
        email,
        photo,
        status,
     } = req.body;
    try {
        const newRecords = await table('employees').create([{ "fields": {name,email,photo,status} }]);
        return res.status(200).json(getMinifiedResult(newRecords[0]));
    } catch (error) {
        console.error('error',error);
        return res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};