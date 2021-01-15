import { apiUrl } from './constants'

export interface DecodedAPIResponse {
	response: any
	status: number
}

export const getUrl = (endPoint: string) => {
	return apiUrl + endPoint
}

export const decodeApiResponse = (result: APIResponse): DecodedAPIResponse => {
	if (!result.response) {
		return {
			response: {},
			status: result.status,
		}
	}

	return {
		response: JSON.parse(result.response),
		status: result.status,
	}
}
