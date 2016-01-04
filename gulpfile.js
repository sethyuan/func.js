var gulp = require("gulp"),
    del = require("del"),
    sourcemaps = require("gulp-sourcemaps"),
    changed = require("gulp-changed"),
    babel = require("gulp-babel"),
    mocha = require("gulp-mocha");

gulp.task("clean", function(cb) {
  return del(["test"], cb);
});

gulp.task("default", ["test"]);

gulp.task("test", ["build-test"], function() {
  return gulp.src("test/*-test.js", {read: false})
    .pipe(mocha({
      reporter: "spec",
      ui: "bdd"
    }));
});

gulp.task("build-test", function() {
  return gulp.src(["*.js", "!gulpfile.js", "tests/*.js"])
    .pipe(changed("test"))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["es2015", "stage-2"]
    }))
    .pipe(babel({
      presets: ["es2015", "stage-2"],
      plugins: ["transform-runtime"]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("test"));
});
