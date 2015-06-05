var gulp = require("gulp"),
    del = require("del"),
    sourcemaps = require("gulp-sourcemaps"),
    changed = require("gulp-changed"),
    babel = require("gulp-babel");

gulp.task("clean", function(cb) {
  del(["lib", "test"], cb);
});

gulp.task("default", ["dev"]);

gulp.task("dev", ["build-lib", "build-test"]);

gulp.task("watch", ["dev"], function() {
  gulp.watch("./src/**/*.js", ["dev"]);
});

gulp.task("prod", ["build-lib-prod"]);

gulp.task("build-lib", function() {
  return gulp.src("./src/lib/**/*.js")
    .pipe(changed("lib"))
    .pipe(sourcemaps.init())
    .pipe(babel({
      stage: 1,
      optional: ["runtime"],
      loose: ["es6.forOf", "es6.properties.computed"]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("lib"));
});

gulp.task("build-test", function() {
  return gulp.src("./src/test/**/*.js")
    .pipe(changed("test"))
    .pipe(sourcemaps.init())
    .pipe(babel({
      stage: 1,
      optional: ["runtime"],
      loose: ["es6.forOf", "es6.properties.computed"]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("test"));
});

gulp.task("build-lib-prod", function() {
  return gulp.src("./src/lib/**/*.js")
    .pipe(babel({
      stage: 1,
      optional: ["runtime"],
      loose: ["es6.forOf", "es6.properties.computed"]
    }))
    .pipe(gulp.dest("lib"));
});
