import { createRouter, createWebHashHistory } from "vue-router";
import BaseLayout from '../views/BaseLayout.vue';
import SynonymsChart from '../components/synonyms/SynonymsChart.vue';
import SynonymsTable from '../components/synonyms/SynonymsTable.vue';

const routes = [
  {
    path: "/",
    name: 'baseLayout',
    component: BaseLayout,
  },
  {
    path: "/synonyms",
    name: 'synonymsChart',
    component: SynonymsChart,
  },
  {
    path: "/synonyms",
    name: 'synonymsTable',
    component: SynonymsTable,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
