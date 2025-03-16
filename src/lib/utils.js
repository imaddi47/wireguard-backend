const _          = require('lodash');
const exec       = require('child_process').exec;
const execFile   = require('child_process').execFile;
const logger     = require('./logger').global;
const error      = require('./error');

module.exports = {
	exec: async function(cmd, options = {}) {
		logger.debug('CMD:', cmd);

		const { stdout, stderr } = await new Promise((resolve, reject) => {
			const child = exec(cmd, options, (isError, stdout, stderr) => {
				if (isError) {
					reject(new error.CommandError(stderr, isError));
				} else {
					resolve({ stdout, stderr });
				}
			});

			child.on('error', (e) => {
				reject(new error.CommandError(stderr, 1, e));
			});
		});
		return stdout;
	},

	/**
	 * @param   {String} cmd
	 * @param   {Array}  args
	 * @returns {Promise}
	 */
	execFile: function (cmd, args) {
		// logger.debug('CMD: ' + cmd + ' ' + (args ? args.join(' ') : ''));

		return new Promise((resolve, reject) => {
			execFile(cmd, args, function (err, stdout, /*stderr*/) {
				if (err && typeof err === 'object') {
					reject(err);
				} else {
					resolve(stdout.trim());
				}
			});
		});
	},
};