module.exports = function(response, status = 200) {
	return this.status(status).json({ status, payload: response });
};
