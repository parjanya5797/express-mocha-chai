const userList = (req,res) => {
    res.send({
        statusText:"success",
        data:{
            list:"hello"
        }
    });
}

const newsData = () => {
    return new Promise((resolve,reject) => {
        resolve({otp:90000});
    })
}

module.exports = {
    userList,
    newsData
}