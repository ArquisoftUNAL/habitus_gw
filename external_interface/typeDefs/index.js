module.exports = `#graphql
    type Category {
        cat_id: String!
        cat_name: String!
    }

    type SOAPCategoriesResponse {
        categories: [Category!]!
    }

    type MedicalCenter {
        id: String!
        name: String!
        location: String!
    }

    type SOAPMedicalCenterResponse {
        centers : [MedicalCenter!]!
    }

    extend type Query {
        getExternalCategories: SOAPCategoriesResponse!
        getMedicalCenters: SOAPMedicalCenterResponse
    }
`;
