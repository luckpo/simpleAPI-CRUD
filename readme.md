## Simple API with Express

#### Dependencies
* libraries: express 4.16.2 and mongoose 4.13.6
* Database : mongoDB
* a unix machine is recommended

#### Installation
* application: `yarn install`
* cron job : `chmod a+x system/updateTasksCRON.js`, then test manually with `cd system; ./updateTasksCRON.js` if needed and then add it to your crontab

#### Execution
* `node api.js`, or use forever or pm2 (not provided/documented here)
