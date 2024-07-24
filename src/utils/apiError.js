class apiError extends Error{
    constructor(
        statusCode,
        message="something",
        error=[],
        status=""
    ){
        super(message);
        this.statusCode=statusCode
        this.error=error
        this.status=status
        this.data=null;

        if(statck){
            this.stack=statck
        } else {
            Error.captureStackTrace(this,this.constructor)
        }

    }
   
   
}
export default apiError ; 