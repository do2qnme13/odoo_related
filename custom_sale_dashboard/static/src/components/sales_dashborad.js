import { registry } from "@web/core/registry";
import { KpiCard } from "./kpi_card/kpi_card";
import { Component, useState, onWillStart, useRef, onMounted } from "@odoo/owl";
import { loadJS } from "@web/core/assets";
import { ChartRenderer } from "./chart_render/chart_renderer";

export class OwlSalesDashboard extends Component {}

OwlSalesDashboard.template = "owl.OwlSalesDashboard"; // Your QWeb template name
OwlSalesDashboard.components = { KpiCard, ChartRenderer };
registry.category("actions").add("owl.sales_dashboard", OwlSalesDashboard);
