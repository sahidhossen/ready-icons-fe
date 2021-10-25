const apiRoot = process.env.NEXT_PUBLIC_BASE_URL; // from the global variable
/**
 * @type {Object}
 */
const DEFAULT_HEADERS = {
	Accept: 'application/json, */*;q=0.1',
};

/**
 *
 * @type {Object}
 */
const DEFAULT_OPTIONS = {};

const API = (options) => {
	const { url, path, data, parse = true, ...remainingOptions } = options;
	let { body, headers } = options;

	// Merge explicitly-provided headers with default values.
	headers = { ...DEFAULT_HEADERS, ...headers };

	// The `data` property is a shorthand for sending a JSON body.
	if (data) {
		body = JSON.stringify(data);
		headers['Content-Type'] = 'application/json';
	}
	let apiUrl = apiRoot + (url || path);
	const responsePromise = fetch(apiUrl, {
		...DEFAULT_OPTIONS,
		...remainingOptions,
		body,
		headers,
	});

	const checkStatus = (response) => {
		if ((response.status >= 200 && response.status < 300) || response.status === 401) {
			return response;
		}
		throw response;
	};

	const parseResponse = (response) => {
		if (parse) {
			if (response.status === 204) {
				return null;
			}
			return response.json ? response.json() : Promise.reject(response);
		}

		return response;
	};

	return responsePromise
		.then(checkStatus)
		.then(parseResponse)
		.catch((response) => {
			console.log('res: ', response);
			if (!parse) {
				throw response;
			}
			const invalidJsonError = {
				code: 'invalid_json',
				message: 'The response is not a valid JSON response.',
			};

			if (!response || !response.json) {
				throw invalidJsonError;
			}

			return response
				.json()
				.catch(() => {
					console.log('CALLING', apiUrl, response.status);
					throw invalidJsonError;
				})
				.then((error) => {
					const unknownError = {
						code: 'unknown_error',
						message: 'An unknown error occurred.',
					};

					throw error || unknownError;
				});
		});
};

export default API;
