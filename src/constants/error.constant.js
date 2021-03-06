/**
* Summary: customErrorConst, httpErrorConst, validCodes, invalidToken
* Description: define the customErrorConst, httpErrorConst, validCodes, invalidToken
* @author Akash Sharma
* @date  27.03.2017
*/

export const customErrorConst = {
    ERROR_DEFAULT:"No Request Found"
};

export const httpErrorConst = {
    500: "Internal Server Error."
};

export const validCodes = (code) => {
    if (code >= 200 && code < 400) {
        return true;
    }
    return false;
}

export const invalidToken = {
    401: "401"
}