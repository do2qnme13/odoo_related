# -*- coding: utf-8 -*-
# from odoo import http


# class CustomSaleDashboard(http.Controller):
#     @http.route('/custom_sale_dashboard/custom_sale_dashboard', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/custom_sale_dashboard/custom_sale_dashboard/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('custom_sale_dashboard.listing', {
#             'root': '/custom_sale_dashboard/custom_sale_dashboard',
#             'objects': http.request.env['custom_sale_dashboard.custom_sale_dashboard'].search([]),
#         })

#     @http.route('/custom_sale_dashboard/custom_sale_dashboard/objects/<model("custom_sale_dashboard.custom_sale_dashboard"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('custom_sale_dashboard.object', {
#             'object': obj
#         })

