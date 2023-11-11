const validatePermissions = (permissions, role, operationName) => {

    if (!permissions) {
        return false;
    }

    const rolePermissions = permissions.find(p => p.role === role);

    if (!rolePermissions) {
        return false;
    }

    const operationPermissions = rolePermissions.operations.find(
        p => (p === operationName || p == "all")
    );

    return operationPermissions;
}

module.exports = validatePermissions;