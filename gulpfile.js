const gulp = require("gulp"),
	sass = require("gulp-sass"),
	pug = require("gulp-pug"),
	autoprefixer =require("gulp-autoprefixer");

gulp.task("sass",()=>
	gulp.src("./static/sass/main.scss")
		.pipe(sass({
			autputStyle: "nested",
		}))
		.pipe(autoprefixer({
			versions: ["last 2 browsers"]
		}))
		.pipe(gulp.dest("./static/css"))
);

gulp.task("pug",()=>
	gulp.src("./static/pug/*.pug")
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest("./static/"))
);

gulp.task("default",() => {
	gulp.watch("./static/sass/**/*.scss", ["sass"])
	gulp.watch("./static/pug/**/*.pug", ["pug"]);
});
