import { getMinifiedResult, minifyResults, table } from "../../lib/airtable";

export default async function handler (req, res) {
    const { 
        eventTitle,
        reservedBy,
        reservationStart,
        reservationEnd,
        reservationType,
        desk,
        ticketNumber
     } = req.body;
    try {
        const newRecords = await table('reservations').create([{ "fields": {eventTitle,reservedBy,reservationStart,reservationEnd,desk,ticketNumber} }]);
        return res.status(200).json(getMinifiedResult(newRecords[0]));
    } catch (error) {
        console.error('error',error);
        return res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};