module.exports = function (grunt) {

    // 构建任务配置
    grunt.initConfig({
        //读取package.json的内容，形成json数据
        pkg: grunt.file.readJSON('package.json'),

        //js min
        uglify: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> by fwx*/\n'
            },
            //具体任务配置
            build: {
                files: {
                    'js/mobile.min.js': 'js/mobile.js',
                    'js/v2-mobile.min.js': 'js/v2-mobile.js',
                    'js/index.min.js': 'js/index.js'
                }
            }
        },


        //css min
        cssmin: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> by fwx*/\n'
            },
            //具体任务配置
            combine: {
                files: {
                    //style下顶级目录css压缩
                    //'style/mobile.min.css': ['style/headFoot.css','style/common.css','style/mobile.css'],
                    //'style/promo.min.css': ['style/headFoot.css','style/common.css','style/promoNew.css'],

                    //style下v2目录css压缩
                    'style/v2/index.min.css': ['style/v2/01reset.css', 'style/v2/02common.css', 'style/v2/03headFoot.css', 'style/v2/04index.css'],
                    'style/v2/mobile.min.css': ['style/v2/01reset.css', 'style/v2/02common.css', 'style/v2/03headFoot.css', 'style/v2/05mobile.css', 'style/v2/05mobile-02.css'],
                    'style/v2/promoNew.min.css': ['style/v2/01reset.css', 'style/v2/02common.css', 'style/v2/03headFoot.css', 'style/v2/06promoNew.css']
                }
            }
        }



    });

    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 默认执行的任务
    grunt.registerTask('default', ['uglify', 'cssmin']);
};