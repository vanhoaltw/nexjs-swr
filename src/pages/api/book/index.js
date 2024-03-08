import dbConnect from "@/database/dbConnect";
import Book from "@/models/Book";

export default async function api(req, res) {
  const { method } = req || {};
  await dbConnect();

  switch (method) {
    case "GET": {
      try {
        const books = await Book.find({});
        res.status(200).json({ success: true, data: books });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
    }

    case "POST": {
      try {
        const body = JSON.parse(req.body);
        const newBook = await Book.create(body);
        res.status(201).json({ success: true, data: newBook });
      } catch (error) {
        console.log({ error });
        res.status(400).json({ success: false, error });
      }
      break;
    }

    default: {
      res.status(400).json({ success: false });
      break;
    }
  }
}
