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
serve
```
Starts a local web server on port 4000. Stores current working files in `./_site_dev/`

## Production
```
build
```
Builds site. May take a long time. Outputs files in `./_site_prod/`. Upload these to web server.
