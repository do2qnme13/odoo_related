# -*- coding: utf-8 -*-
{
    'name': "Custom Sale Dashboard",
    'summary': "Dashborad for Sale Module",
    'sequence':-1,
    'description': """
        Custom Dashboard for Sale Module to track quotations,orders.
    """,

    'author': "Pyae Sone Hein",
    'category': 'Sale',
    'version': '0.1',
    'depends': ['base','web','sale','board'],

    'data': [
        # 'security/ir.model.access.csv',
        'views/sales_dashboard.xml',
    ],
    'demo': [
    ],
    'installable':True,
    'application':True,
    'assets': {
        'web.assets_backend':[
            'custom_sale_dashboard/static/src/components/**/*.js',
            'custom_sale_dashboard/static/src/components/**/*.xml',
            'custom_sale_dashboard/static/src/components/**/*.scss',
        ]
    }
}

