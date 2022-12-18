import { minifyResults, table } from "../../lib/airtable";

export default async (_req, res) => {
    try {
        const records = await table('employees').select({
            sort:[{field: "name", direction: "desc"}]
        }).firstPage();
        const getMinifiedResults = minifyResults(records);
        res.status(200).json(getMinifiedResults);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};