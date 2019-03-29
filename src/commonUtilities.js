/**
* Summary: Comoon Utilities Methods
* @author Akash Sharma
* @date  27.03.2019
*/
import { commonConstants } from './constants/common.constants'

const COMMON_UTILITIES = {
    isEmpty,
    isEmptyObject,
    saveToken,
    getToken,
}

/**
* Description: isEmpty will check the empty value
* @param {string} _param
* @return {boolean}
*/
function isEmpty(_param) {
    return (_param === 'undefined' || _param === undefined || _param === '' || _param === null);
}

/**
* Description: isEmptyObject will check the empty object
* @param {object} _obj
* @return {boolean}
*/
function isEmptyObject(_obj) {
    if (_obj == null) return true;// null and undefined are "empty"
    if (_obj.length > 0) return false;
    if (_obj.length === 0) return true;
    for (var key in _obj) {
        if (hasOwnProperty.call(_obj, key)) return false;
    }
    return true;
}

/**
* Description: Set the Login Token in Local Staorage
* @param {String} tokenValue
* @return {boolean}
*/
function saveToken(tokenValue){
    localStorage.setItem(commonConstants.AUTH_TOKEN, tokenValue);
}

/**
* Description: Get the Token from Local Staorage
* @param {String} tokenKey
* @return {String}
*/
function getToken(tokenKey){
   return localStorage.getItem(tokenKey);
}

export default COMMON_UTILITIES;