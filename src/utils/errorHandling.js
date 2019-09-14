export default async (e, req , res , next) => {
  console.log('Error: ' , e )
  const status = e.status || 500

  res.status(status).json({status, data : e.message})
}