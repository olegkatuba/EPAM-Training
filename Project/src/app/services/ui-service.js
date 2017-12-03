class UiService {
	switchColor(path) {
		switch (path) {
			case '/public_catalogs':
				return '#5359c9';
			case '/private_catalogs':
				return '#FC9580';
			case '/favorites':
				return '#22A6DF';
			case '/about':
				return '#FC8AD2';
			default:
				return '#242424';
		}
	}
}

export const uiService = new UiService();