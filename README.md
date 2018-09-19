## Configuration
``` bash
$ cd env
$ cp dev.dev.sample dev.env
$ vi dev.env  ## add all you need in the dev.env as system environment
$ . ./dev.env
```

## Run
``` bash
$ node ./src/app.js
```

### pm2
```bash
$ pm2 start pm2.config.js
```
