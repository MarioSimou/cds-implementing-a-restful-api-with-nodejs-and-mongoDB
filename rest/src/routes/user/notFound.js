export default async (req,res) => {
  return res.status(404).json({status: 404, success: false})
}