export default async (e, req , res , next) => {
  console.log('Error: ' , e )

  // HTTP Response
  /*
    HTTP/1.1 400 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 24
    ETag: W/"18-io+YwShJfk2KaRC/1b0Huj4aGJ8"
    Date: Fri, 27 Sep 2019 13:20:57 GMT
    Connection: keep-alive

    {"status":400,success:false, message: "some message"}
  */
  res.json({status: e.status || 400, success:false, message: e.message})
}