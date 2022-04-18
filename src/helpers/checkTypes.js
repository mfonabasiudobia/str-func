const checkTypes = (string,types) => {
    let status = false;
    //check if string matches type then return true or false
	types.forEach((item) => {
        if(typeof string === item){
            return status = true;
        }
    })

    return status;

}

module.exports = checkTypes;