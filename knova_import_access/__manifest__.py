# -*- coding: utf-8 -*-
# (C) 2020 KNOVA (<https://www.knovatek.com>)
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

{
    "name": "Access rules for Import/Export",
    "version": "0.1",
    "depends": ['web'],
    "author": "Knova Software Technologies Pvt. Ltd.",
    "license": 'AGPL-3',
    "support": 'info@knovatek.com',
    "description": """
Add access rules for import / export features
**********************************************

For each user, you can indicate if it can export / import data

Suggestions & Feedback to: Muhammad Salman
    """,
    "summary": "",
    "website": "https://www.knovatek.com",
    "category": 'Tools',
    "images": ['static/description/banner.png'],
    "sequence": 20,
    "data": [
        'security/web_impex_security.xml',
        'views/webclient_templates.xml',
    ],
    "auto_install": True,
    "installable": True,
    "application": False,
}
