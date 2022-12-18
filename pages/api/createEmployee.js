import { minifyResults, table } from "../../lib/airtable";

export default async (req, res) => {
    const { item } = req.body;
    try {
        const newRecords = await table('employees').create([{ fields: { item } }]);

        res.status(200).json(getMinifiedResult(newRecords[0]));
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};