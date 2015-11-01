# HiveVM
## Install
Needs ruby. Commands to run in project root:
```
gem install bundler
bundle install
```
Currently helper scripts only run on windows. I will fix this.

## Development
```
<<<<<<< HEAD
serve
=======
jekyll serve
>>>>>>> 2277f7f26f5bb4bb9a2438a36f4fa269b8c4daf3
```
Starts a local web server on port 4000. Stores current working files in `./_site_dev/`

## Production
```
build
```
Builds site. May take a long time. Outputs files in `./_site_prod/`. Upload these to web server.
