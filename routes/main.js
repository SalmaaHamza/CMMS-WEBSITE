const express = require('express');
const controller = require('../controllers/control');
const path = require('path');
const bcrypt = require('bcryptjs')
const DirName=require('../util/path');
const router = express.Router();
const WorksOrders=require('../models/worksOrders')
const Pre_installation = require('../models/pre-installation')
const Engineers= require('../models/engineers')
const spareParts = require('../models/spareParts')
const DailyInspection = require('../models/DailyInspection')
router.get('/index',controller.mainRoute);
router.get('/managementSystem',controller.managementSystem);
router.get('/showLogin',controller.showLogin);
router.post('/login',controller.login);
router.get('/showWorkOrders',controller.showWorkOrder);
router.get('/showWorkOrdersForm',controller.showWorkOrdeForm);
router.post('/getWorkOrderData',controller.getWorkOrderData)
// router.get('/viewTech',controller.viewTech);
// router.get('/viewTechForm',controller.viewTechForm);
// router.post('/getTechData',controller.getTechdata)
router.get('/showPre-installationform',controller.showPreinstallationData)
router.get('/pre-installationform',controller.showPreinstallationform);
router.post('/pre-installationform',controller.getData);
router.get('/viewEng',controller.showEng);
router.get('/addEng',controller.ShowEditEngForm);
router.post('/addEng',controller.singUp);
router.get('/showEq',controller.showEq);
router.get('/showEqform',controller.showEqform)
router.post('/getEqData',controller.getEqData)
router.get('/showPreMain',controller.showPrevMain)
router.get('/showEditEng',controller.showEditEng)
router.post('/editEng',controller.editEng)
// router.get('/showEditTech',controller.ShowEditTech)
// router.post('/editTech',controller.EditTech)
router.get('/showEditEq',controller.showEditEq)
router.post('/editEq',controller.editEq)
// router.
module.exports=router;