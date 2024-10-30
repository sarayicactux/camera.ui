/* eslint-disable unicorn/prevent-abbreviations */
'use-strict';

import http from 'http';
import https from 'https';
import * as path from 'path';
import cron from 'node-cron';
import ConfigService from '../services/config/config.service.js';
import LoggerService from '../services/logger/logger.service.js';
import * as RecordingsModel from './components/recordings/recordings.model.js';
import * as CamerasModel from './components/cameras/cameras.model.js';
import os from 'os';
import fs from 'fs-extra';


const { log } = LoggerService;
const storagePath = path.resolve(os.homedir(), '.camera.ui/database');
const dbObj = fs.readJsonSync(storagePath + '/database.json')

import App from './app.js';

export default class Server {
  constructor(controller) {
    const app = new App({
      debug: process.env.CUI_LOG_MODE === '2',
      version: ConfigService.ui.version,
    });

    const server = ConfigService.ui.ssl
      ? https.createServer(
          {
            key: ConfigService.ui.ssl.key,
            cert: ConfigService.ui.ssl.cert,
          },
          app
        )
      : http.createServer(app);
    

    server.on('listening', async () => {
      let addr = server.address();
      let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

      log.info(
        `camera.ui v${ConfigService.ui.version} is listening on ${bind} (${ConfigService.ui.ssl ? 'https' : 'http'})`
      );

      controller.emit('finishLaunching');
    });

    server.on('error', (error) => {
      let error_;

      if (error.syscall !== 'listen') {
        log.error(error, 'Interface', 'server');
      }

      let bind = typeof port === 'string' ? 'Pipe ' + ConfigService.ui.port : 'Port ' + ConfigService.ui.port;

      switch (error.code) {
        case 'EACCES':
          error_ = `Can not start the User Interface! ${bind} requires elevated privileges`;
          break;
        case 'EADDRINUSE':
          error_ = `Can not start the User Interface! ${bind} is already in use`;
          break;
        default:
          error_ = error;
      }

      log.error(error_, 'Interface', 'server');

      server.close();
    });

    const recording = async() => {
      // const timer = 1*60;
      const timer = 5*60;
      
          const camras = await CamerasModel.list();
          for (const camera of camras) {
            console.log(camera.name);
            RecordingsModel.createRecording({
              // path: `${path.resolve()}/recording`,
               path: dbObj.settings.recordings.path,
              timer,
              camera: camera.name,
              trigger: "doorbell",
              type: "Video"
            });
          }
          RecordingsModel.removeOlds(13 * timer);

       
    }
    setTimeout(async() => {
        cron.schedule('*/5 * * * *', () => {
            recording();
        });
       },1000 );


  //RecordingsModel.removeAll()
    server.on('close', () => {
      log.debug('User interface closed');
      controller.emit('shutdown');
    });
    
    return server;
  }
}
