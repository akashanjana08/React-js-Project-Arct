/**
* Summary: Contains APIS for Auth Services
* @author Akash Sharma
* @date  27.03.2019
*/
import Method from './services';
import API_INTERFACE from '../constants/uri.constant';
import { responseActions } from '../actions/action.response';
const AuthenticationServices = {
	getLoginRequest,
};

/**
    * Description: Make Call to AUTH Service to get Token API
    * @return {object}
    */
function getLoginRequest(userId, password) {
	var url = API_INTERFACE.AUTH;
	return Method.post(url, null, { email: userId, password: password }).then(
		req_response => {
			let getResponse = responseActions.response(req_response);
			if (getResponse) {
				return getResponse;
			}
		},
		error => {
			return responseActions.errorResponse(error);
		}
	).catch(function (error) {
		console.log(error);
	});
}

export default AuthenticationServices;
