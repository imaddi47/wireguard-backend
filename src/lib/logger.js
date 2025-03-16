const {Signale} = require('signale');

module.exports = {
	global:    new Signale({scope: 'Global   '}),
	ip_rule:   new Signale({scope: 'IP Rule  '}),
	access:    new Signale({scope: 'Access   '}),
	import:    new Signale({scope: 'Importer '}),
	setup:     new Signale({scope: 'Setup    '})
};