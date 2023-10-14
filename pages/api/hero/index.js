import Hero from "../../../models/Heros";
import dbConnect from "../../../database/dbConnect";

export default async (req, res) => {
  const {method} = req;
  dbConnect();

  switch (method) {
    case "GET":
      try {
        const hero = await Hero.find({});
        res.status(200).json({success: true, hero: hero});
      } catch (error) {
        res.status(400).json({success: false, message: error});
      }
      break;

    case "POST":
      try {
        const hero = await Hero.create(req.body);
        res.status(201).json({success: true, hero: hero});
      } catch (error) {
        res.status(400).json({success: false, error});
      }
      break;

    default:
      res.status(400).json({success: false});
      break;
  }
};
