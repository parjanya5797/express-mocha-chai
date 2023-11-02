class StudentController {
    constructor() {

    }

    home(type) {
        let data = this.getInfo(type,1);
        // this.getInfo(type,1);
        return data + 5;
    }

    userId() {
        return 12;
    }

    getInfo(type,status) {
        return type;
    }

    finalMarks(total) {
        let external = this.getExternalMarks(total);
        let internal = this.getInternalMarks(total);
        let finalSum = external + internal + 10;
        return finalSum;
    }

    getExternalMarks(total) {
        return total + 1;
    }

    getInternalMarks(total) {
        return total - 1;
    }

    dbData() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => resolve(10),1000);
        })
    }
}

module.exports = StudentController