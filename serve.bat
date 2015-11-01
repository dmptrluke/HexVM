@ECHO OFF
SET JEKYLL_ENV=development
jekyll serve --incremental --config _config.yml,./_misc/dev.yml --destination "_site_dev/"
