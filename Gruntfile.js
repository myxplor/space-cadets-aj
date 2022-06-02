module.exports = function(grunt) {

  grunt.initConfig({
    bake: {
        your_target: {
            options: {
                // Task-specific options go here.
            },
 
            files: {
                // files go here, like so:
 
                "index.html": "app/index.html",
                "mindfulness.html": "app/mindfulness.html",
                "depression.html": "app/depression.html",
                "information.html": "app/information.html",
                "mymynd.html": "app/mymynd.html",
 
                // etc ...
            }
        },
    }
  });

  grunt.registerTask('default', 'bake');
  grunt.loadNpmTasks( "grunt-bake" );

};