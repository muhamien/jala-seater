import { minifyResults, table } from "../../lib/airtable";

export default async function createEmployee (req, res) {
    const { item } = req.body;
    try {
        const newRecords = await table('employees').create([{ fields: { item } }]);

        return res.status(200).json(getMinifiedResult(newRecords[0]));
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};