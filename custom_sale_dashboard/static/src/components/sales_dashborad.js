import { registry } from "@web/core/registry";
import { KpiCard } from "./kpi_card/kpi_card";
import { Component, useState, onWillStart, useRef, onMounted } from "@odoo/owl";
import { loadJS } from "@web/core/assets";

export class OwlSalesDashboard extends Component {
    setup() {
        this.charRef = useRef("chart");
        console.log(this.charRef);
        onWillStart(async () => {
            await loadJS(
                "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"
            );
        });

        onMounted(() => {
            const data = [
                { year: 2010, count: 10 },
                { year: 2011, count: 20 },
                { year: 2012, count: 15 },
                { year: 2013, count: 25 },
                { year: 2014, count: 22 },
                { year: 2015, count: 30 },
                { year: 2016, count: 28 },
            ];

            new Chart(this.charRef.el, {
                type: "doughnut",
                options: {
                    animation: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                },
                data: {
                    labels: data.map((row) => row.year),
                    datasets: [
                        {
                            label: "Acquisitions by year",
                            data: data.map((row) => row.count),
                        },
                    ],
                },
            });
        });
    }
}

OwlSalesDashboard.template = "owl.OwlSalesDashboard"; // Your QWeb template name
OwlSalesDashboard.components = { KpiCard };
registry.category("actions").add("owl.sales_dashboard", OwlSalesDashboard);
