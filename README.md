![crudy](https://cloud.githubusercontent.com/assets/2857535/9075332/fa99d7a4-3b13-11e5-99cb-189b1c67f08c.png)

An [hapi](http://hapijs.com/) plugin that will expose a RESTful **CRUD** interface using your [Dogwater](https://github.com/devinivy/dogwater) *models* and [Bedwetter](https://github.com/devinivy/bedwetter)'s *route-handler*.

E.g.:
If you've defined a *Person* model through *Dogwater*, using this plugin will **automatically** expose the following routes:

	GET /person 			List all Persons
	GET /person/{id}		Get one Person by id
	POST /person 			Create a new Person
	POST /person/{id}		Update a Person by id
	PATCH /person/{id}		Update a Person by id
	DELETE /person/{id}		Delete a Person by id

## Installation
This plugin uses **ES6 features** and it works like charm with **iojs > 2.0**. If you are planing to use it with non ES6-enabled engines, consider using [Babel.js](http://babeljs.io).

	npm install --save crudy

Don't forget that *hapi*, *Dogwater* and *Bedwetter* should be already dependencies of your project, defined in the ```package.json``` file. These are in facts **peer-dependencies**.

## Usage
This module can be used as common [Hapi.js](http://hapijs.com/) plug-in, configuring it in the ```plugin``` section of the ```manifest.json``` of your application:

		"crudy": {
			"person": {
				"config": {
					"tags": ["api"],
					"notes": "Notes...",
					"handler": {
						"bedwetter": {
							"prefix": "/api/v1"
						}
					}
				},
				"actions": {
					"find": true,
					"findOne": true
				}
			}
		}	
	

or using the ```server.register()``` [method](http://hapijs.com/tutorials/plugins#loading-a-plugin) and passing this object as *options*.

Note that you can pass **routes-specific options** to the plug-in: *prefixes*, *notes*, *tags*...

Using the ```actions``` section you can define which actions should be provided by *crudy*.

If no configuration is passed to the *plugin*, it will expose the complete **CRUD interface**, as in the example above.

## Tests
	npm test

## Contribution
Contributions are welcome. Send me your pull-request or open an [issue](https://github.com/g-div/crudy/issues).

### TODOs:
- [ ] Per-action options (Auth, ACL, Prefix, ...)
- [ ] Use Joi for validation in order to unlock Hapi-compliant documentation (lout/swagger)
- [ ] Better Unit testing
- [ ] Test coverage
