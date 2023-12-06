const produtorRuralService = require('./produtor-rural-service');

module.exports = routes => {
    const SERVICE = '/produtorrural'

    /**
     * @swagger
     *
     * /login:
     *   post:
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: username
     *         in: formData
     *         required: true
     *         type: string
     *       - name: password
     *         in: formData
     *         required: true
     *         type: string
     */

    /**
     * @swagger
     * /users:
     *   get:
     *     summary: Retrieve a list of JSONPlaceholder users
     *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
     */

    routes.get(`${SERVICE}`, produtorRuralService.list);

    routes.post(`${SERVICE}`, produtorRuralService.create);

    routes.put(`${SERVICE}/:id`, produtorRuralService.edit);

    routes.delete(`${SERVICE}/:id`, produtorRuralService.delete);

    routes.get(`${SERVICE}/:id`, produtorRuralService.getById);

    routes.post(`${SERVICE}/changepw`, produtorRuralService.changePassword);

    routes.post(`${SERVICE}/resetpw`, produtorRuralService.resetPassword);

    routes.post(`/login`, produtorRuralService.login);
}