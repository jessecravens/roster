module.exports = function(grunt) {

  grunt.initConfig({
    aws: grunt.file.readJSON('aws-keys.json'),
    s3: {
      options: {
        key: '<%= aws.AWSAccessKeyId %>',
        secret: '<%= aws.AWSSecretKey %>',
        bucket: '<%= aws.bucket %>',
        access: 'public-read',
        headers: {
          // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
          "Cache-Control": "max-age=630720000, public",
          "Expires": new Date(Date.now() + 63072000000).toUTCString()
        }
      },
      prod: {
        upload: [
          {
            src: 'dist/index.html',
            dest: 'index.html',
            options: {
              headers: {
                // 1 minute cache policy (1000 * 60)
                "Cache-Control": "max-age=60000, public",
                "Expires": new Date(Date.now() + 60000).toUTCString()
              }
            }
          },
          {
            src: 'dist/assets/*',
            dest: 'assets/'
          }
          // {
          //   src: 'dist/assets/bootstrap/*',
          //   dest: 'assets/bootstrap'
          // },
          // {
          //   src: 'dist/fonts/*',
          //   dest: 'fonts/'
          // },
          // {
          //   src: 'dist/fonts/bootstrap/*',
          //   dest: 'fonts/bootstrap'
          // }
        ],
      }
    }, // end s3
    hashres: {
      prod: {
        src: [
          'dist/assets/app.js',
          'dist/assets/vendor.css',
          'dist/assets/app.css'
        ],
        dest: 'dist/index.html',
      }
    } // end hashres
  });

  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-hashres');

  // Uses a naming convention to specify the AWS bucket

  grunt.registerTask('deploy', 'deploy task.', function(arg1, arg2) {

    if (arguments.length === 0) {
      grunt.log.writeln("No target environment specified.");
      grunt.log.writeln("i.e. grunt deploy:production");

    } else {

      if (arg1 === 'production'){

        grunt.task.run(['hashres', 's3']);

      }else if (arg1 === 'staging'){

        // Append -staging to the production bucket name
        var sbucket = grunt.file.readJSON('aws-keys.json')['bucket'] + '-' + arg1;
        grunt.config.set('aws.bucket', sbucket);
        grunt.task.run(['hashres', 's3']);

      }else if (arg1 === 'qa'){

        // We don't need no stinkin' QA

        // Append -qa to the production bucket name
        // var qbucket = grunt.file.readJSON('aws-keys.json')['bucket'] + '-' + arg1;
        // grunt.config.set('aws.bucket', qbucket);
        // grunt.task.run(['hashres', 's3']);

      }else{
        grunt.log.writeln("That is not a valid target deployment environment");
      }
    }
  });

};
