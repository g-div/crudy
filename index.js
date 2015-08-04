'use strict';
const Hoek = require('hoek');

let internals = {
	defaults: {
		config: {
			handler: {
				bedwetter: {}
			}
		},
		actions: {
			find: true,
			findOne: true,
			create: true,
			update: true,
			destroy: true
		}
	}
};

exports.register = function (server, options, next) {
	internals = Hoek.applyToDefaults(internals, options);
	server.dependency(['bedwetter', 'dogwater'], internals.after);

	next();
};

internals.after = function (server, next) {
	for (const entity in server.plugins.dogwater) {
		if (server.plugins.dogwater.hasOwnProperty(entity)) {
			let current;
			if (internals[entity]) {
				current = Hoek.applyToDefaultsWithShallow(internals.defaults, internals[entity], ['actions']);
			} else {
				current = internals.defaults;
			}
			const path = `${current.config.handler.bedwetter.prefix || ''}/${entity}`;

			if (current.actions.find) {
				current.config.description = `Find all ${entity} entries`;
				server.route({
					method: 'GET',
					path,
					config: current.config
				});
			}
			if (current.actions.findOne) {
				current.config.description = `Find one ${entity} by id`;
				server.route({
					method: 'GET',
					path: `${path}/{id}`,
					config: current.config
				});
			}
			if (current.actions.create) {
				current.config.description = `Create a new ${entity}`;
				server.route({
					method: 'POST',
					path,
					config: current.config
				});
			}
			if (current.actions.update) {
				current.config.description = `Update one ${entity} by id`;
				server.route({
					method: ['POST', 'PATCH'],
					path: `${path}/{id}`,
					config: current.config
				});
			}
			if (current.actions.destroy) {
				current.config.description = `Delete one ${entity} by id`;
				server.route({
					method: 'DELETE',
					path: `${path}/{id}`,
					config: current.config
				});
			}
		}
		next();
	}
};

exports.register.attributes = {
	pkg: require('./package.json')
};
