const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/', (request, response) => {
    const signedUpUser = new signUpTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        phone:request.body.phone

    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router