@ECHO OFF
SETLOCAL
SET JEKYLL_ENV=development
jekyll serve --config ./_conf/config.yml,./_conf/dev.yml --destination "_site_dev/"
ENDLOCAL
