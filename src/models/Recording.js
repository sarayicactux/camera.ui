import Sequelize from 'sequelize';
import sequelize from '../config/seq-config.js';

const Recording = sequelize.define('Recording', {

        camera		  : Sequelize.STRING,
        fileName	  : Sequelize.STRING,
        name		  : Sequelize.STRING,
        extension	  : Sequelize.STRING,
        recordStoring : Sequelize.BOOLEAN,
        recordType	  : Sequelize.STRING,
        time		  : Sequelize.STRING,
        timestamp	  : Sequelize.INTEGER,
        label	      : Sequelize.STRING,
        createdAt	  : Sequelize.DATE,
        updatedAt	  : Sequelize.DATE,
    },
    {
        tableName:'recordings'
    }
);

export default Recording;