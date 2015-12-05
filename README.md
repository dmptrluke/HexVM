# HiveVM
## Install
Needs ruby. Commands to run in project root:
```
gem install bundler
bundle install
```
Currently helper scripts only run on windows. I will fix this.

## Install-Mac
export JEKYLL_ENV=development
jekyll serve --config ./_conf/config.yml,./_conf/dev.yml --destination "_site_dev/"

## Development
```
serve
```
Starts a local web server on port 4000. Stores current working files in `./_site_dev/`
If you need to add an image just put it in _assets/images and use {% img filename %}

## Production
```
build
```
Builds site. May take a long time. Outputs files in `./_site_prod/`. Upload these to web server.

## License
```
Copyright 2015 Luke Rogers
```
