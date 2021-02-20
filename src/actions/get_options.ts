import { ACCESS_TOKEN } from '../utils/constants'

const returnOptions = () => {
	if (!ACCESS_TOKEN) {
		return JSON.stringify({
			remove: ['workSpaces']
		});
	} else {
		return JSON.stringify({
			remove: ['setup']
		});
	}
}

export default returnOptions;
