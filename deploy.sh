#!/bin/bash
npm run build
aws s3 sync ./out s3://makeyourpage-prod --acl public-read --profile makeyourpage