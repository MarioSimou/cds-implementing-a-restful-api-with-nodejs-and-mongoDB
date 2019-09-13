export default async (e, req, res, next) => {
  console.log('Error: ' , e )
  res.status(400).json({status: 400, data : e.message })
}