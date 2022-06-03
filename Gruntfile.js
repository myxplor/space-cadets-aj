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
                "articles.html": "app/articles.html",
                "crisis.html": "app/crisis.html",
                "experts.html": "app/experts.html",
                "information.html": "app/information.html",
                "mindfulness.html": "app/mindfulness.html",
                "depression.html": "app/depression.html",
                "information.html": "app/information.html",
                "mymynd.html": "app/mymynd.html",
                "talk.html": "app/talk.html",
 
                // etc ...
            }
        },
    }
  });

  grunt.registerTask('default', 'bake');
  grunt.loadNpmTasks( "grunt-bake" );
  grunt.loadNpmTasks('grunt-contrib-watch');

};