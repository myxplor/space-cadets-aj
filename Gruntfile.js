module.exports = function(grunt) {

  grunt.initConfig({
    bake: {
        your_target: {
            options: {
                // Task-specific options go here.
            },
 
            files: {
                // files go here, like so:
 
                "dist/index.html": "app/index.html",
                "dist/information.html": "app/information.html",
                "dist/mymynd.html": "app/mymynd.html",
 
                // etc ...
            }
        },
    }
  });

  grunt.registerTask('default', 'bake');
  grunt.loadNpmTasks( "grunt-bake" );

};