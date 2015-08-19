"use strict";

module.exports = function(grunt) {
    grunt.initConfig({

        atomizer: {
            app: {
                options: {
                    ie: true,
                    configFile: "./config/atomic-config.js"
                },
                files: [{
                    src: ["src/**/**/*.jsx"],
                    dest: "dist/style_atomic.min.css"
                }]
            }
        },

        less: {
            build: {
                options: {},
                files: {
                    "dist/style_less.css": "src/less/style.less"
                }
            },
            minified: {
                options: {
                    cleancss: true
                },
                files: {
                    "dist/style_less.min.css": ["src/less/style.less", "dist/style_atomic.min.css"]
                }
            }
        },

        browserify: {
            options: {
                transform: [["babelify", { "stage": 2 }]]
            },
            client: {
                src: ["build/lodash.build.min.js", "build/lodash.build.min.js", "src/js/**/*.js", "src/js/**/*.jsx", "src/js/script.js"],
                dest: "dist/react/bundle.js"
            }
        },

        eslint: {
            all: [
                "gruntfile.js",
                "lib/*.js",
                "app.js",
                "src/*/*.js",
                "src/*/*/*.js",
                "src/*/*/*.jsx",
                "app.js",
                "Gruntfile.js"
            ],
            options: {
                config: "config/eslint.json"
            }
        },

        // Copy to dist
        copy: {
            js: {
                expand: true,
                cwd: "src/js",
                src: "*.js",
                dest: "dist/"
            }
        },

        watch: {
            script: {
               options: {
                    spawn: false,
                    event: ["added", "deleted", "changed"]
                },
                files: ["src/**/**/*.jsx", "src/**/**/*.js", "src/**/*.js", "src/**/*.css", "src/**/*.less"],
                tasks: ["build"]
            },
            grunt: {
                files: ["Gruntfile.js"]
            },
            jsx: {
                files: ["js/**/*.jsx"],
                tasks: ["browserify"]
            }
        },

        nodemon: {
            dev: {
                script: "app.js"
            }
        },

        concurrent: {
            dev: {
                tasks: ["build", "nodemon:dev", "watch"],
                options: {
                    logConcurrentOutput: true
                }
            }
        }

    });

    // Load module
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-atomizer");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("eslint-grunt");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks("grunt-nodemon");

    // Create grunt task
    grunt.registerTask("build", [
        "less:build",
        "less:minified",
        "atomizer:app",
        "eslint",
        "browserify",
        "copy"
    ]);

    grunt.registerTask("dev", ["concurrent:dev"]);
};
