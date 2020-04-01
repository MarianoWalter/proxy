exports.log = ({ silent = false }) => {
	return (req, res, next) => {
		if (!silent) {
			console.info(`[${getDateString()}] ${req.method} ${req.url}`);
		}
		next();
	};
};

function getDateString() {
	const date = new Date();
	return [
		date.getFullYear(),
		'/',
		pad(date.getMonth() + 1),
		'/',
		pad(date.getDate()),
		' ',
		pad(date.getHours()),
		':',
		pad(date.getMinutes()),
		':',
		pad(date.getSeconds()),
	].join('');
}

function pad(txt) {
	return `${txt}`.padStart(2, '0');
}
