let myData = [];

class LowLevelStorage {

    get(key, callback) {
        let error = null;
        let response = null;
        try {

            myData.map((data, index, array) => {
                if (data.key == key) {
                    response = data;
                }
            });
            if (response == null) error = "Data not found";


        } catch (error) {
            error = error.toString();
        }
        callback(error, response);

    }

    put(key, value, callback) {
        let error = null;
        let response = null;
        let overRide = false;
        try {
            if (key == null || value == null || key == '' || value == '') error = "Invalid Data";
            else {
                myData.map((data, index, array) => {
                    if (data.key == key) {
                        myData[index] = { key: key, value: value };
                        overRide = true;
                    }
                });
                if (overRide == false) myData.push({ key: key, value: value });
                response = "Data added  successfully";
            }

        } catch (error) {
            error = error.toString();

        }

        callback(error, response);
    }

    del(key, callback) {
        let error = null;
        let response = null;

        try {
            myData.map((data, index, arr) => {

                if (data.key == key) {
                    myData.splice(index, 1);
                    response = "Data deleted  successfully";
                }

            });

            if (response == null) error = "Data not found";

        } catch (error) {
            error = error.toString();
        }

        callback(error, response);
    }

}

let lowLevelStorage = new LowLevelStorage();
module.exports = lowLevelStorage;