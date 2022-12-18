const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE);

const table = (tableName) => base(tableName);

// To get minified records array
const minifyResults = (records) =>
  records.map((record) => getMinifiedResult(record));

// to make record meaningful.
const getMinifiedResult = (record) => {
  if (!record.fields.avalability) {
    record.fields.avalability = "Available";
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};
export { table, minifyResults, getMinifiedResult };