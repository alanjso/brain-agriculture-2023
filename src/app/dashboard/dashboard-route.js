const dashboardService = require('./dashboard-service');

module.exports = routes => {
    const SERVICE = '/dashboard/produtorrural'

    /**
     * @swagger
     * /api/exemplo:
     *   get:
     *     summary: Descrição resumida da rota
     *     description: Descrição mais detalhada da rota
     *     responses:
     *       200:
     *         description: Sucesso
     *         content:
     *           application/json:
     *             example:
     *               mensagem: "Exemplo de resposta"
     */
    routes.get(`${SERVICE}/completo`, dashboardService.calcDashboardCompleto);

    routes.get(`${SERVICE}/total-fazendas`, dashboardService.calcTotalFazendas);
    routes.get(`${SERVICE}/total-hectares`, dashboardService.calcTotalHectares);
    routes.get(`${SERVICE}/pizza-uso-solo`, dashboardService.calcPizzaUsoSolo);
    routes.get(`${SERVICE}/pizza-estados`, dashboardService.calcPizzaEstados);
    routes.get(`${SERVICE}/pizza-culturas`, dashboardService.calcPizzaCulturas);
}