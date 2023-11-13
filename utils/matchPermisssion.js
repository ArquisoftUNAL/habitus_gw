const { GraphQLError } = require("graphql");

const validatePermissions = (permissions, role, operationName) => {

    const throwError = () => {
        throw new GraphQLError(
            "You are not allowed to access this operation.",
            {
                extensions: {
                    code: "UNAUTHORIZED"
                }
            }
        );
    }

    if (!permissions) {
        throwError();
    }

    const rolePermissions = permissions.find(p => p.role === role);

    if (!rolePermissions) {
        throwError();
    }

    const operationPermissions = rolePermissions.operations.find(
        p => (p === operationName || p == "all")
    );

    if (!operationPermissions) {
        throwError();
    }
}

module.exports = validatePermissions;