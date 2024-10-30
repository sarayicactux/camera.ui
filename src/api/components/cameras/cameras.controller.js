/* eslint-disable unicorn/prevent-abbreviations */
'use-strict';

import * as CamerasModel from './cameras.model.js';
import { Cam } from 'onvif/promises/index.js';

import CameraController from '../../../controller/camera/camera.controller.js';
import MotionController from '../../../controller/motion/motion.controller.js';

const setTimeoutAsync = (ms) => new Promise((res) => setTimeout(res, ms));

export const insert = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.body.name);

    if (camera) {
      return res.status(409).send({
        statusCode: 409,
        message: 'Camera already exists',
      });
    }

    const result = await CamerasModel.createCamera(req.body);

    if (!result) {
      return res.status(409).send({
        statusCode: 409,
        message: 'Camera already exists',
      });
    }

    res.status(201).send({
      name: result.name,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const list = async (req, res, next) => {
  try {
    res.locals.items = await CamerasModel.list();

    return next();
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const getByName = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    res.status(200).send(camera);
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const patchByName = async (req, res) => {
  try {
    if (req.body === undefined || Object.keys(req?.body).length === 0) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Bad request',
      });
    }

    let camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    if (req.body.name && req.params.name !== req.body.name) {
      camera = await CamerasModel.findByName(req.body.name);

      if (camera) {
        return res.status(422).send({
          statusCode: 422,
          message: 'Camera already exists',
        });
      }
    }

    await CamerasModel.patchCamera(req.params.name, req.body);

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const getStatusByName = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    const status = await CamerasModel.pingCamera(camera, req.query.timeout);

    res.status(200).send({
      status: status ? 'ONLINE' : 'OFFLINE',
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const getCameraSettingsByName = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    const cameraSetting = await CamerasModel.getSettingsByName(req.params.name);

    if (!cameraSetting) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera setting not found',
      });
    }

    res.status(200).send(cameraSetting);
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const getSnapshotByName = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    const imageBuffer = await CamerasModel.requestSnapshot(camera, req.query.fromSubSource);

    if (req.query.buffer) {
      res.status(200).send(imageBuffer.toString('base64'));
    } else {
      res.set('Content-Type', 'image/jpeg');
      res.set('Content-Disposition', 'inline');
      res.status(200).send(imageBuffer);
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const removeByName = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    await CamerasModel.removeByName(req.params.name);

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const removeAll = async (req, res) => {
  try {
    await CamerasModel.removeAll();

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const resetMotion = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    MotionController.triggerMotion(camera.name, false);

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const moveCamera = async (req, res) => {
  try {
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    let cameraPosition = {
        x: 0,
        y: 0,
        zoom: 0
    };
   const { camName, x, y,zoom } = req.body;
    const camera = await CamerasModel.findByName(camName);

    if (camera) {
        
        // const cam = new Cam({ username: camera.username, password: camera.password, hostname: camera.hostname, port: camera.port });
        const cam = new Cam({ username: camera.username, password: camera.password, hostname: camera.hostname, port: camera.port });
       
        if (!cam) {
            return res.status(500).send('Failed to create camera object');
        }
        
        // Calculate new position
        await cam.connect();
            
            const newX = clamp(cameraPosition.x + +x, -1, 1);
            const newY = clamp(cameraPosition.y + +y, -1, 1);
            const newZoom = clamp(cameraPosition.zoom + +zoom, 0, 1);
            // Calculate relative movement
            const moveX = newX - cameraPosition.x;
            const moveY = newY - cameraPosition.y;
            const moveZoom = newZoom - cameraPosition.zoom;
            // console.log({ x: moveX, y: moveY, zoom: moveZoom });
            // console.log({ cameraPosition });
                    // Only move if there's a change
                    if (moveX !== 0 || moveY !== 0 || moveZoom !== 0) {
                        await cam.relativeMove({ x: moveX, y: moveY, zoom: moveZoom  ,speed:{x:0.1, y:0.1,zoom:0.1}});

                        // Update tracked position
                        cameraPosition = { x: newX, y: newY, zoom: newZoom };
                        //console.log('Camera moved to:', cameraPosition);
                        res.send('Camera moved');
                        return
                    }
                    else {
                    await cam.relativeMove({ x: 0, y: 0, zoom: -0.05 ,speed:{x:0.1, y:0.1,zoom:0.1}});
                        // Update tracked position
                    cameraPosition = { x: 0, y: 0, zoom: 0 };
                    res.status(404).send('out of range');
                    return;
                    }
                    
    }
    else {
        res.status(404).send('Camera not found');
        return;
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const restartPrebuffering = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    const controller = CameraController.cameras.get(req.params.name);

    if (!controller || (controller && !controller.prebuffer)) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera controller not exists',
      });
    }

    controller.prebuffer.restart();
    await setTimeoutAsync(1000);

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const restartVideoanalysis = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    const controller = CameraController.cameras.get(req.params.name);

    if (!controller || (controller && !controller.videoanalysis)) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera controller not exists',
      });
    }

    controller.videoanalysis.restart();
    await setTimeoutAsync(1000);

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const startMotion = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    MotionController.triggerMotion(camera.name, true);

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const stopPrebuffering = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    const controller = CameraController.cameras.get(req.params.name);

    if (!controller || (controller && !controller.prebuffer)) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera controller not exists',
      });
    }

    controller.prebuffer.stop(true);
    await setTimeoutAsync(1000);

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const stopVideoanalysis = async (req, res) => {
  try {
    const camera = await CamerasModel.findByName(req.params.name);

    if (!camera) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera not exists',
      });
    }

    const controller = CameraController.cameras.get(req.params.name);

    if (!controller || (controller && !controller.prebuffer)) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Camera controller not exists',
      });
    }

    controller.videoanalysis.stop(true);
    await setTimeoutAsync(1000);

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};
