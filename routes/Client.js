const express = require("express")
const router = express.Router()
const clientController = require('../controllers/Client')
const verify = require("../middleware/JWT")

router.post('/create-client', clientController.createClient)
router.post('/client-login', clientController.clientLogin)
router.post('/create-clients', clientController.createClients)
router.post('/get', verify.validateToken, clientController.getClient)
router.post('/update', verify.validateToken, clientController.updateClient)
router.post('/delete', verify.validateToken, clientController.deleteClient)
router.post('/send-email', clientController.sendEmail)
router.post('/send-otp', clientController.sendOtp)
router.post('/verify-otp', clientController.verifyOtp)
router.post('/forgot-password', clientController.forgotPassword)
router.post('/change-password', verify.validateToken, clientController.changePassword)
router.post('/create-sign', clientController.createSign)
router.post('/get-sign', clientController.getSign)

module.exports = router
