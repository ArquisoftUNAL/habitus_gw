const soap = require("soap");

const { EXTERNAL_INTERFACE_URL } = require("./../../config");

class ExternalInterfaceAPI {

    constructor() {
        console.log(EXTERNAL_INTERFACE_URL)
        soap.createClient(
            `${EXTERNAL_INTERFACE_URL}/wsdl?wsdl`,
            (err, client) => {
                if (err) {
                    console.error(err);
                    return;
                }

                this.client = client;
            }
        )

    }

    async getData() {

        return new Promise((resolve, reject) => {
            if (this.client) {
                this.client.CategoriesQuery({}, (err, res) => {
                    if (err) {
                        console.error(err);
                        resolve({
                            categories: []
                        });
                        return;
                    }

                    resolve(res);
                })
            } else {
                resolve({
                    categories: []
                });
            }
        })

    }

    async getCentersData() {
        return new Promise((resolve, reject) => {
            if (this.client) {
                this.client.MedicalCenters({}, (err, res) => {

                    if (err) {
                        console.error(err);
                        resolve({

                        });
                        return;
                    }

                    resolve(res);
                })
            } else {

                resolve({
                    centers: []
                });
            }
        })
    }
}

module.exports = ExternalInterfaceAPI;
