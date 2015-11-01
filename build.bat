@ECHO OFF
SETLOCAL
SET JEKYLL_ENV=production
jekyll build --config ./_conf/config.yml,./_conf/prod.yml --destination "_site_prod/"
ENDLOCAL
