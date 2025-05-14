import { registry } from "@web/core/registry";
import { KpiCard } from "./kpi_card/kpi_card";
import { Component, useState, onWillStart, useRef } from "@odoo/owl";

export class OwlSalesDashboard extends Component {}

OwlSalesDashboard.template = "owl.OwlSalesDashboard"; // Your QWeb template name
OwlSalesDashboard.components = { KpiCard };
registry.category("actions").add("owl.sales_dashboard", OwlSalesDashboard);
