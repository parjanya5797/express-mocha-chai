const userList = (req,res) => {
    res.send("Hello World !!!");
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