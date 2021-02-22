import { API_URL } from './constants';
import { DecodedAPIResponse, ErrorResponse } from './interfaces';

export const getUrl = (endPoint: string): string => {
	return API_URL + endPoint;
}

export const decodeApiResponse = (result: APIResponse): DecodedAPIResponse => {
	if (!result.response) {
		return {
			response: {},
			status: result.status
		};
	}

	return {
		response: JSON.parse(result.response),
		status: result.status
	};
}

export const getAPIErrorMessage = (errorResponse: any): string => {
	return errorResponse.errors.map((error: ErrorResponse) => error.message).join(" ");
}
