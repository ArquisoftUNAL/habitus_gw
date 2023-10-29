const soap = require("soap");

const { EXTERNAL_INTERFACE_URL } = require("./../../config");

class ExternalInterfaceAPI {

    constructor() {
        this.client = null;
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
        if (this.client) {
            this.client.CategoriesQuery(args, (err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }

                return res;
            })
        }
    }
}

module.exports = ExternalInterfaceAPI;
