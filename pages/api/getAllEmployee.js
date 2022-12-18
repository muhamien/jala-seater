import { minifyResults, table } from "../../lib/airtable";

export default async function getAllEmployee (_req, res) {
    try {
        const records = await table('employees').select({
            sort:[{field: "name", direction: "desc"}]
        }).firstPage();
        const getMinifiedResults = minifyResults(records);
        return res.status(200).json(getMinifiedResults);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};