@ECHO OFF
SET JEKYLL_ENV=production
jekyll build --incremental --config _config.yml,./_misc/prod.yml --destination "_site_prod/"
