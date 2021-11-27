#!/bin/bash
npm run build
cd out
for file in $(find ./* -name "*.html" | xargs -I {} basename -s .html {});
do
    mv ${file}.html ${file}
done
cd ..
aws s3 sync ./out s3://makeyourpage-prod --acl public-read --profile makeyourpage --content-type text/html
aws cloudfront create-invalidation --profile=makeyourpage --distribution-id EWIH8DYL9OI7C --paths "/*" 