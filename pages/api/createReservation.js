import { tableReservation, getMinifiedRecord, minifyRecords } from './utils/Airtable';

export default async function handler(req, res) {
    const {
        name, 
        email, 
        reservation_date,
        reservation_code,
        chair_number,
        book_type
    } = req.body;

    try {
        const createRecords = await tableReservation.create([{fields:{name, email, reservation_date, reservation_code, chair_number, book_type}}]);
        const createRecord = {
            // id: createRecords[0].id,
            fields: createRecords
        }
        console.log(createRecords)
        res.status(200).json(createRecord);
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
}