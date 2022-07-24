const dataCtrl = require("./controllers/userRequest");
const dataParser = require('maya-data-parser')


module.exports = {
  '/search' : {
    POST: {
      function : dataCtrl.userSearch,
      middlewares: [dataParser]
    }
  },
};