import { createRouter, createWebHashHistory } from "vue-router";
import SynonymsChart from '../components/synonyms/SynonymsChart.vue';
import SynonymsTable from '../components/synonyms/SynonymsTable.vue';

const routes = [
  {
    path: "/chart",
    name: 'synonymsChart',
    component: SynonymsChart,
  },
  {
    path: "/",
    name: 'synonymsTable',
    component: SynonymsTable,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
