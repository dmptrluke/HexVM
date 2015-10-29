# HiveVM
## Install
Needs ruby. Commands to run in project root:
```
gem install bundler
bundle install
```

## Development
```
jekyll serve
```
Starts a local web server on port 4000. Stores current working files in `./_site_dev/`

## Production
```
jekyll build --config '_production.yml'
```
Builds site. May take a long time. Outputs files in `./_site_prod/`. Upload these to web server.
