import Hero from "../../../models/Heros";
import dbConnect from "../../../database/dbConnect";

export default async (req, res) => {
  const {
    query: {id},
    method,
  } = req;
  dbConnect();

  switch (method) {
    case "GET":
      try {
        const hero = await Hero.findById(id);
        if (!hero) {
          res.status(400).json({success: false, message: "Not Found"});
        }
        res.status(200).json({success: true, hero: hero});
      } catch (error) {
        res.status(400).json({success: false, error});
      }
      break;

    case "PUT":
      try {
        const hero = await Hero.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!hero) {
          res.status(400).json({success: false, message: "Not Found"});
        }
        res.status(200).json({success: true, hero: hero});
      } catch (error) {
        res.status(400).json({success: false, error});
      }
      break;

    case "DELETE":
      try {
        const hero = await Hero.findOneAndDelete(id);
        if (!hero) {
          res.status(400).json({success: false, message: "Not Found"});
        }
        res.status(200).json({success: true, hero: hero});
      } catch (error) {
        res.status(400).json({success: false, error});
      }
      break;

    default:
      res.status(400).json({success: false});
      break;
  }
};
