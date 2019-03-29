import COMMON_UTILITIES from '../../../commonUtilities';
import LoginService from '../../../services/service.login'
import { alertConstants } from '../../../constants/alert.constant'
export const LoginModel = function (onSuccess, onFail, onEmptyField) {
    function validateUser(userId, password) {
        if (!COMMON_UTILITIES.isEmpty(userId) && !COMMON_UTILITIES.isEmpty(password)) {
            LoginService.getLoginRequest(userId, password).then((response) => {
                if (response.type === alertConstants.SUCCESS) {
                    onSuccess('Logon Sucess', response.message.data.token);
                } else {
                    onFail("Server Response error");
                }
            })
        } else {
            onEmptyField("Field is Empty");
        }
    }
    return {
        validateUser: validateUser
    }
}
