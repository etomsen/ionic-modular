// Generated on 2015-04-06 using generator-ionic 0.7.1
(function(){
	'use strict';

	var _ = require('lodash');
	var path = require('path');
	var cordovaCli = require('cordova');
	var spawn = process.platform === 'win32' ? require('win-spawn') : require('child_process').spawn;

	module.exports = function (grunt) {

		require('load-grunt-tasks')(grunt);
		require('time-grunt')(grunt);

		grunt.initConfig({
			yeoman: {
				app: 'app',
				modules: 'modules',
				images: 'images',
				styles: 'styles',
				test: 'test',
				dist: 'www',
				spec: 'spec'
			},

			// Environment Variables for Angular App
			// This creates an Angular Module that can be injected via ENV
			// Add any desired constants to the ENV objects below.
			// https://github.com/diegonetto/generator-ionic#environment-specific-configuration
			ngconstant: {
				options: {
					space: '  ',
					wrap: '"use strict";\n\n {%= __ngModule %}',
					name: 'config',
					dest: '<%= yeoman.app %>/configuration.js'
				},
				development: {
					constants: {
						ENV: {
							name: 'development',
							apiEndpoint: 'http://localhost:8080/restapi'
						}
					}
				},
				production: {
					constants: {
						ENV: {
							name: 'production',
							apiEndpoint: 'http://localhost:8080/restapi'
						}
					}
				}
			},

			watch: {
				bower: {
					files: ['bower.json'],
					tasks: ['wiredep', 'newer:copy:app']
				},
				html: {
					files: ['<%= yeoman.app %>/**/*.html'],
					tasks: ['compile_modules', 'newer:copy:app']
				},
				js: {
					files: ['<%= yeoman.app %>/**/*.js'],
					tasks: ['newer:copy:app', 'newer:jshint:all']
				},
				styles: {
					files: ['<%= yeoman.app %>/**/*.css'],
					tasks: ['compile_modules', 'newer:copy:styles', 'newer:copy:tmp']
				},
				gruntfile: {
					files: ['Gruntfile.js'],
					tasks: ['ngconstant:development', 'newer:copy:app']
				}
			},

			// The actual grunt server settings
			connect: {
				options: {
					port: 9000,
					// Change this to '0.0.0.0' to access the server from outside.
					hostname: 'localhost'
				},
				dist: {
					options: {
						base: '<%= yeoman.dist %>'
					}
				},
				coverage: {
					options: {
						port: 9002,
						open: true,
						base: ['coverage']
					}
				}
			},

			// Make sure code styles are up to par and there are no obvious mistakes
			jshint: {
				options: {
					jshintrc: '.jshintrc',
					reporter: require('jshint-stylish')
				},
				all: [
					'Gruntfile.js',
					'<%= yeoman.app %>/app.js',
					'<%= yeoman.app %>/<%= yeoman.modules %>/**/*.js'
				],
				test: {
					options: {
						jshintrc: 'test/.jshintrc'
					},
					src: ['test/unit/**/*.js']
				}
			},

			// Empties folders to start fresh
			clean: {
				dist: {
					files: [{
						dot: true,
						src: [
							'.temp',
							'<%= yeoman.dist %>/*',
							'!<%= yeoman.dist %>/.git*'
						]
					}]
				},
				server: '.temp'
			},

			// Automatically inject Bower components into the app
			wiredep: {
				app: {
					src: ['<%= yeoman.app %>/index.html'],
					ignorePath:  /\.\.\//,
					exclude: [
						'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js',
						'bower_components/cryptojslib/components/aes-min.js',
						'bower_components/cryptojslib/components/aes.js',
						'bower_components/cryptojslib/components/cipher-core-min.js',
						'bower_components/cryptojslib/components/cipher-core.js',
						'bower_components/cryptojslib/components/core-min.js',
						'bower_components/cryptojslib/components/enc-base64-min.js',
						'bower_components/cryptojslib/components/enc-utf16-min.js',
						'bower_components/cryptojslib/components/enc-utf16.js',
						'bower_components/cryptojslib/components/evpkdf-min.js',
						'bower_components/cryptojslib/components/evpkdf.js',
						'bower_components/cryptojslib/components/format-hex-min.js',
						'bower_components/cryptojslib/components/format-hex.js',
						'bower_components/cryptojslib/components/hmac-min.js',
						'bower_components/cryptojslib/components/hmac.js',
						'bower_components/cryptojslib/components/lib-typedarrays-min.js',
						'bower_components/cryptojslib/components/lib-typedarrays.js',
						'bower_components/cryptojslib/components/md5-min.js',
						'bower_components/cryptojslib/components/md5.js',
						'bower_components/cryptojslib/components/mode-cfb-min.js',
						'bower_components/cryptojslib/components/mode-cfb.js',
						'bower_components/cryptojslib/components/mode-ctr-gladman-min.js',
						'bower_components/cryptojslib/components/mode-ctr-gladman.js',
						'bower_components/cryptojslib/components/mode-ctr-min.js',
						'bower_components/cryptojslib/components/mode-ctr.js',
						'bower_components/cryptojslib/components/mode-ecb-min.js',
						'bower_components/cryptojslib/components/mode-ecb.js',
						'bower_components/cryptojslib/components/mode-ofb-min.js',
						'bower_components/cryptojslib/components/mode-ofb.js',
						'bower_components/cryptojslib/components/pad-ansix923-min.js',
						'bower_components/cryptojslib/components/pad-ansix923.js',
						'bower_components/cryptojslib/components/pad-iso10126-min.js',
						'bower_components/cryptojslib/components/pad-iso10126.js',
						'bower_components/cryptojslib/components/pad-iso97971-min.js',
						'bower_components/cryptojslib/components/pad-iso97971.js',
						'bower_components/cryptojslib/components/pad-nopadding-min.js',
						'bower_components/cryptojslib/components/pad-nopadding.js',
						'bower_components/cryptojslib/components/pad-zeropadding-min.js',
						'bower_components/cryptojslib/components/pad-zeropadding.js',
						'bower_components/cryptojslib/components/pbkdf2-min.js',
						'bower_components/cryptojslib/components/pbkdf2.js',
						'bower_components/cryptojslib/components/rabbit-legacy-min.js',
						'bower_components/cryptojslib/components/rabbit-legacy.js',
						'bower_components/cryptojslib/components/rabbit-min.js',
						'bower_components/cryptojslib/components/rabbit.js',
						'bower_components/cryptojslib/components/rc4-min.js',
						'bower_components/cryptojslib/components/rc4.js',
						'bower_components/cryptojslib/components/ripemd160-min.js',
						'bower_components/cryptojslib/components/ripemd160.js',
						'bower_components/cryptojslib/components/sha1-min.js',
						'bower_components/cryptojslib/components/sha1.js',
						'bower_components/cryptojslib/components/sha224-min.js',
						'bower_components/cryptojslib/components/sha224.js',
						'bower_components/cryptojslib/components/sha256-min.js',
						'bower_components/cryptojslib/components/sha3-min.js',
						'bower_components/cryptojslib/components/sha3.js',
						'bower_components/cryptojslib/components/sha384-min.js',
						'bower_components/cryptojslib/components/sha384.js',
						'bower_components/cryptojslib/components/sha512-min.js',
						'bower_components/cryptojslib/components/sha512.js',
						'bower_components/cryptojslib/components/tripledes-min.js',
						'bower_components/cryptojslib/components/tripledes.js',
						'bower_components/cryptojslib/components/x64-core-min.js',
						'bower_components/cryptojslib/components/x64-core.js',
						'bower_components/cryptojslib/rollups/aes.js',
						'bower_components/cryptojslib/rollups/hmac-md5.js',
						'bower_components/cryptojslib/rollups/hmac-ripemd160.js',
						'bower_components/cryptojslib/rollups/hmac-sha1.js',
						'bower_components/cryptojslib/rollups/hmac-sha224.js',
						'bower_components/cryptojslib/rollups/hmac-sha256.js',
						'bower_components/cryptojslib/rollups/hmac-sha3.js',
						'bower_components/cryptojslib/rollups/hmac-sha384.js',
						'bower_components/cryptojslib/rollups/hmac-sha512.js',
						'bower_components/cryptojslib/rollups/md5.js',
						'bower_components/cryptojslib/rollups/pbkdf2.js',
						'bower_components/cryptojslib/rollups/rabbit-legacy.js',
						'bower_components/cryptojslib/rollups/rabbit.js',
						'bower_components/cryptojslib/rollups/rc4.js',
						'bower_components/cryptojslib/rollups/ripemd160.js',
						'bower_components/cryptojslib/rollups/sha1.js',
						'bower_components/cryptojslib/rollups/sha224.js',
						'bower_components/cryptojslib/rollups/sha256.js',
						'bower_components/cryptojslib/rollups/sha3.js',
						'bower_components/cryptojslib/rollups/sha384.js',
						'bower_components/cryptojslib/rollups/sha512.js',
						'bower_components/cryptojslib/rollups/tripledes.js']
				}
			},



			// Reads HTML for usemin blocks to enable smart builds that automatically
			// concat, minify and revision files. Creates configurations in memory so
			// additional tasks can operate on them
			useminPrepare: {
				html: '<%= yeoman.app %>/index.html',
				options: {
					dest: '<%= yeoman.dist %>',
					staging: '.temp',
					flow: {
						html: {
							steps: {
								js: ['concat', 'uglifyjs'],
								css: ['cssmin']
							},
							post: {}
						}
					}
				}
			},

			// Performs rewrites based on the useminPrepare configuration
			usemin: {
				html: ['<%= yeoman.dist %>/<%= yeoman.modules %>/**/*.html'],
				css: ['<%= yeoman.dist %>/*.css'],
				options: {
					assetsDirs: ['<%= yeoman.dist %>']
				}
			},

			// The following *-min tasks produce minified files in the dist folder
			cssmin: {
				options: {
					//root: '<%= yeoman.app %>',
					noRebase: true
				}
			},

			htmlmin: {
				dist: {
					options: {
						collapseWhitespace: true,
						collapseBooleanAttributes: true,
						removeCommentsFromCDATA: true,
						removeOptionalTags: true
					},
					files: [{
						expand: true,
						cwd: '<%= yeoman.dist %>',
						src: ['*.html', 'modules/**/*.html'],
						dest: '<%= yeoman.dist %>'
					}]
				}
			},

			// Copies remaining files to places other tasks can use
			copy: {
				modules: {
					expand: true,
					files: [{
						expand: true,
						flatten: true,
						cwd: '<%= yeoman.app %>',
						dest: '<%= yeoman.app %>/<%= yeoman.images %>',
						src: ['<%= yeoman.modules %>/**/<%= yeoman.images %>/*.{png,jpg,jpeg,gif,webp,svg}']
					}]
				},
				dist: {
					files: [{
						expand: true,
						dot: true,
						cwd: '<%= yeoman.app %>',
						dest: '<%= yeoman.dist %>',
						src: [
							'<%= yeoman.images %>/**/*.{png,jpg,jpeg,gif,webp,svg}',
							'*.html',
							'<%= yeoman.modules %>/**/*.html',
							'fonts/*'
						]
					},
					{
						expand: true,
						cwd: '.temp/<%= yeoman.images %>',
						dest: '<%= yeoman.dist %>/<%= yeoman.images %>',
						src: ['generated/*']
					}]
				},
				styles: {
					expand: true,
					flatten: true,
					cwd: '<%= yeoman.app %>',
					dest: '.temp/<%= yeoman.styles %>/',
					src: '<%= yeoman.styles %>/*.css'
				},

				fonts: {
					expand: true,
					cwd: 'app/lib/ionic/release/fonts/',
					dest: '<%= yeoman.app %>/fonts/',
					src: '*'
				},
				vendor: {
					expand: true,
					cwd: '<%= yeoman.app %>/vendor',
					dest: '.temp/<%= yeoman.styles %>/',
					src: '{,*/}*.css'
				},
				app: {
					expand: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>/',
					src: [
						'**/*',
						'!**/*.(scss,sass,css)',
					]
				},
				tmp: {
					expand: true,
					cwd: '.temp',
					dest: '<%= yeoman.dist %>/',
					src: '**/*'
				}
			},

			concurrent: {
				ionic: {
					tasks: [],
					options: {
						logConcurrentOutput: true
					}
				},
				server: [
					'copy:styles',
					'copy:vendor',
					'copy:fonts'
				],
				test: [
					'copy:styles',
					'copy:vendor',
					'copy:fonts'
				],
				dist: [
					'copy:styles',
					'copy:vendor',
					'copy:fonts'
				]
			},

			// By default, your `index.html`'s <!-- Usemin block --> will take care of
			// minification. These next options are pre-configured if you do not wish
			// to use the Usemin blocks.

			// cssmin: {
			//   dist: {
			//     files: {
			//       '<%= yeoman.dist %>/<%= yeoman.styles %>/main.css': [
			//         '.temp/<%= yeoman.styles %>/**/*.css',
			//         '<%= yeoman.app %>/**/*.css'
			//       ]
			//     }
			//   }
			// },
			// uglify: {
			//   dist: {
			//     files: {
			//       '<%= yeoman.dist %>/<%= yeoman.modules %>/scripts.js': [
			//         '<%= yeoman.dist %>/<%= yeoman.modules %>/scripts.js'
			//       ]
			//     }
			//   }
			// },
			// use this to copy all separate .css files in modules into one file modules.css,
			// that is included in the index.html
			concat: {
				modules: {
					dest: '<%= yeoman.app %>/<%= yeoman.styles %>/modules.css',
					src: ['<%= yeoman.app %>/<%= yeoman.modules %>/**/*.css']
				}
			},

			// Test settings
			// These will override any config options in karma.conf.js if you create it.
			karma: {
				options: {
					basePath: '',
					frameworks: ['jasmine'],
					files: [
						'<%= yeoman.app %>/bower_components/angular/angular.js',
						'<%= yeoman.app %>/bower_components/angular-mocks/angular-mocks.js',
						'<%= yeoman.app %>/bower_components/angular-animate/angular-animate.js',
						'<%= yeoman.app %>/bower_components/angular-sanitize/angular-sanitize.js',
						'<%= yeoman.app %>/bower_components/angular-ui-router/release/angular-ui-router.js',
						'<%= yeoman.app %>/bower_components/ionic/release/js/ionic.js',
						'<%= yeoman.app %>/bower_components/ionic/release/js/ionic-angular.js',
						'<%= yeoman.app %>/bower_components/cryptojslib/components/core.js',
						'<%= yeoman.app %>/bower_components/cryptojslib/components/enc-base64.js',
						'<%= yeoman.app %>/bower_components/cryptojslib/components/sha256.js',
						'<%= yeoman.app %>/<%= yeoman.modules %>/app.js',
						'<%= yeoman.app %>/<%= yeoman.modules %>/**/*.module.js',
						'<%= yeoman.app %>/<%= yeoman.modules %>/**/*.js',
						'<%= yeoman.spec %>/**/*.spec.js'
					],
					autoWatch: false,
					reporters: ['dots', 'coverage'],
					port: 8080,
					singleRun: true,
					preprocessors: {
						// Update this if you change the yeoman config path
						'<%= yeoman.app %>/<%= yeoman.modules %>/**/*.js': ['coverage']
					},
					coverageReporter: {
						reporters: [
							{ type: 'html', dir: 'coverage/' },
							{ type: 'text-summary' }
						]
					}
				},
				unit: {
					// Change this to 'Chrome', 'Firefox', etc. Note that you will need
					// to install a karma launcher plugin for browsers other than Chrome.
					browsers: ['PhantomJS'],
					background: true
				},
				continuous: {
					browsers: ['PhantomJS'],
					singleRun: true,
				}
			},

			// ngAnnotate tries to make the code safe for minification automatically by
			// using the Angular long form for dependency injection.
			ngAnnotate: {
				dist: {
					files: [{
						expand: true,
						cwd: '.temp/concat/<%= yeoman.modules %>',
						src: '*.js',
						dest: '.temp/concat/<%= yeoman.modules %>'
					}]
				}
			}

		});

		// Register tasks for all Cordova commands
		_.functions(cordovaCli).forEach(function (name) {
			grunt.registerTask(name, function () {
				this.args.unshift(name.replace('cordova:', ''));
				// Handle URL's being split up by Grunt because of `:` characters
				if (_.contains(this.args, 'http') || _.contains(this.args, 'https')) {
					this.args = this.args.slice(0, -2).concat(_.last(this.args, 2).join(':'));
				}
				var done = this.async();
				var exec = process.platform === 'win32' ? 'cordova.cmd' : 'cordova';
				var cmd = path.resolve('./node_modules/cordova/bin', exec);
				var flags = process.argv.splice(3);
				var child = spawn(cmd, this.args.concat(flags));
				child.stdout.on('data', function (data) {
					grunt.log.writeln(data);
				});
				child.stderr.on('data', function (data) {
					grunt.log.error(data);
				});
				child.on('close', function (code) {
					code = code ? false : true;
					done(code);
				});
			});
		});

		// Since Apache Ripple serves assets directly out of their respective platform
		// directories, we watch all registered files and then copy all un-built assets
		// over to <%= yeoman.dist %>/. Last step is running cordova prepare so we can refresh the ripple
		// browser tab to see the changes. Technically ripple runs `cordova prepare` on browser
		// refreshes, but at this time you would need to re-run the emulator to see changes.
		grunt.registerTask('ripple', ['wiredep', 'newer:copy:app', 'ripple-emulator']);
		grunt.registerTask('ripple-emulator', function () {
			grunt.config.set('watch', {
				all: {
					files: _.flatten(_.pluck(grunt.config.get('watch'), 'files')),
					tasks: ['newer:copy:app', 'prepare']
				}
			});

			var cmd = path.resolve('./node_modules/ripple-emulator/bin', 'ripple');
			var child = spawn(cmd, ['emulate']);
			child.stdout.on('data', function (data) {
				grunt.log.writeln(data);
			});
			child.stderr.on('data', function (data) {
				grunt.log.error(data);
			});
			process.on('exit', function (code) {
				child.kill('SIGINT');
				process.exit(code);
			});

			return grunt.task.run(['watch']);
		});

		// Dynamically configure `karma` target of `watch` task so that
		// we don't have to run the karma test server as part of `grunt serve`
		grunt.registerTask('watch:karma', function () {
			var karma = {
				files: ['<%= yeoman.app %>/<%= yeoman.modules %>/**/*.js', '<%= yeoman.test %>/spec/**/*.js'],
				tasks: ['newer:jshint:test', 'karma:unit:run']
			};
			grunt.config.set('watch', karma);
			return grunt.task.run(['watch']);
		});

		// Wrap ionic-cli commands
		grunt.registerTask('ionic', function() {
			var done = this.async();
			var script = path.resolve('./node_modules/ionic/bin/', 'ionic');
			var flags = process.argv.splice(3);
			var child = spawn(script, this.args.concat(flags), { stdio: 'inherit' });
			child.on('close', function (code) {
				code = code ? false : true;
				done(code);
			});
		});

		grunt.registerTask('compile_modules',
			['copy:modules', 'concat:modules']
		);

		grunt.registerTask('test', [
			// 'jshint',
			'karma'
		]);

		grunt.registerTask('serve', function (target) {
			if (target === 'compress') {
				return grunt.task.run(['compress', 'ionic:serve']);
			}

			grunt.config('concurrent.ionic.tasks', ['ionic:serve', 'watch']);
			grunt.task.run(['wiredep', 'init', 'concurrent:ionic']);
		});
		grunt.registerTask('emulate', function() {
			grunt.config('concurrent.ionic.tasks', ['ionic:emulate:' + this.args.join(), 'watch']);
			return grunt.task.run(['init', 'concurrent:ionic']);
		});
		grunt.registerTask('run', function() {
			grunt.config('concurrent.ionic.tasks', ['ionic:run:' + this.args.join(), 'watch']);
			return grunt.task.run(['init', 'concurrent:ionic']);
		});
		grunt.registerTask('build', function() {
			return grunt.task.run(['init', 'ionic:build:' + this.args.join()]);
		});

		grunt.registerTask('init', [
			'clean',
			'compile_modules',
			'ngconstant:development',
			'wiredep',
			'concurrent:server',
			'newer:copy:app',
			'newer:copy:tmp'
		]);


		grunt.registerTask('compress', [
			'clean',
			'compile_modules',
			'ngconstant:production',
			'wiredep',
			'useminPrepare',
			'concurrent:dist',
			'concat',
			'ngAnnotate',
			'copy:dist',
			'cssmin',
			'uglify',
			'usemin',
			'htmlmin'
		]);

		grunt.registerTask('coverage',
			['karma:continuous',
			'connect:coverage:keepalive'
		]);

		grunt.loadNpmTasks('grunt-karma');

		grunt.registerTask('default', [
			'wiredep',
			'newer:jshint',
			'karma:continuous',
			'compress'
		]);
	};
}());
