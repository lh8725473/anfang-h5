(function() {
	'use strict';
	var gulp = require('gulp');
	var path = require('path');
	var sass = require('gulp-sass');
	var csso = require('gulp-csso');
	var concat = require('gulp-concat');
	var replace = require('gulp-replace-task');
	var useref = require('gulp-useref');
	var jsMin = require('gulp-jsmin');
	var jshint = require('gulp-jshint');
	var gulpsync = require('gulp-sync')(gulp);
	var sourceMaps = require('gulp-sourcemaps');
	var inlineAngularTemplates = require('gulp-inline-angular-templates');

	var usemin = require('gulp-usemin');
	var uglify = require('gulp-uglify');
	var minifyHtml = require('gulp-minify-html');
	var minifyCss = require('gulp-minify-css');
	var rev = require('gulp-rev');
	var gulpif = require('gulp-if');
	var revReplace = require('gulp-rev-replace');
	var rename = require("gulp-rename");
	var gulpIgnore = require('gulp-ignore');
	var clean = require('gulp-clean');

	//编译scss
	gulp.task('sass', function() {
		return gulp.src('./src/app.scss')
			.pipe(sass().on('error', sass.logError))
			//.pipe(concat('main.css'))
			.pipe(gulp.dest('./src'));
	});

	//监听编译css
	gulp.task('watch', function() {
		gulp.watch('./src/**/*.scss', ['sass']);
		//gulp.watch('./src/**/*.js', ['concatjs']);
	});

	//字符串替换
	gulp.task('replace', function() {
		gulp.src('src/index.html')
			.pipe(replace({
				patterns: [{
					match: 'dev',
					replacement: 'build'
				}]
			}))
			.pipe(gulp.dest('build'));
	});

	//angularTemplates 合并
	gulp.task('inlineAngularTemplates', function() {
		return gulp.src('src/*/**/*.html')
			.pipe(inlineAngularTemplates('build/index.html', {
				base: 'src', // (Optional) ID of the <script> tag will be relative to this folder. Default is project dir. 
				unescape: { // (Optional) List of escaped characters to unescape 
					'&apos;': '\''
				}
			}))
			.pipe(gulp.dest('build'));
	});
	
	//合并打包压缩js css 
	gulp.task('useref', function() {
		return gulp.src('src/index.html')
			.pipe(useref())
			.pipe(gulpif('*.js', uglify()))
			.pipe(gulpif('*.css', minifyCss()))
			.pipe(rev())
			.pipe(revReplace())
			.pipe(gulp.dest('build'));
	});

	//重命名index.thml
	gulp.task('rename', function(){
		return gulp.src("build/*.html")
		.pipe(rename("index.html"))
		.pipe(gulp.dest("build"));
	})

	//clean多余html
	gulp.task('cleanhtml', function(){
		return gulp.src('build/*.html', {read: false})
			.pipe(gulpIgnore.exclude('index.html'))
			.pipe(clean());
	})

	//copy文件
	gulp.task('copy', ['copyImg', 'copySvg'])

	gulp.task('copyImg', function(){
		return gulp.src('src/img/*.*')
			.pipe(gulp.dest("build/img"));
	})

	gulp.task('copySvg', function(){
		return gulp.src('bower_components/ionic/release/fonts/*')
			.pipe(gulp.dest("build/fonts"));
	})

	//clean发布目录
	gulp.task('clean', function () {
		return gulp.src('build/', {read: false})
			.pipe(clean());
	})
	
	//发布项目
	gulp.task('build', gulpsync.sync(['clean', 'copy', 'sass', 'useref', 'rename', 'cleanhtml', 'inlineAngularTemplates']))
})();