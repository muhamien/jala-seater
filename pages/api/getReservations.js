import { base, getMinifiedRecord, minifyRecords } from './utils/Airtable';

export default async function handler(req, res) {
    try {
        const records = await base('reservation').select().firstPage();
        const formattedRecords = minifyRecords(records);
        res.status(200).json(formattedRecords);
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
}