import { accessToken } from '../utils/constants'

const returnOptions = () => {

	log(accessToken, 'accessToken')

	if (!accessToken) {
		return JSON.stringify({
			remove: ['organisation'],
		})
	} else {
		return JSON.stringify({
			remove: ['setup'],
		})
	}
}

export default returnOptions
