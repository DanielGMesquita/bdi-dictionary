<template>
  <div>
    <PageHeader
      :title="labels.title"
      :description="labels.description"
    />
    <input
      type="text"
      class="input"
      placeholder="Qual palavra você deseja buscar?"
      v-model="word"
    />
    <button @click="fetchData" class="custom-button">Buscar Sinônimos</button>

    <div ref="chartContainer" style="width: 100%; height: 600px;"></div>
  </div>
</template>

<script>
import PageHeader from '@/components/base/PageHeader';
import * as d3 from 'd3';
import axios from 'axios';

export default {
  name: 'SynonymsChart',
  components: { PageHeader },
  data: () => ({
    labels: {
      title: 'Relação entre palavras',
      search: 'Buscar',
      description: 'Visualização de gráfico de relacionamentos de palavras',
      inputs: {
        executionDate: 'Escolha a palavra consultar:'
      },
    },
    word: "",
    data: null,
  }),
  methods: {
    fetchData() {
      if (this.word.trim() !== "") {
        // Fazer a chamada ao backend para obter os sinônimos da palavra fornecida
        axios.get(`https://dictionary-api.up.railway.app/dictionary/synonyms?word=${this.word}`)
          .then(response => {
            this.data = response.data;
            this.createChart();
          })
          .catch(error => {
            console.error('Erro ao obter os sinônimos:', error);
          });
      }
    },
    createChart() {
      const width = 600;
      const height = width;
      const cx = width * 0.5;
      const cy = height * 0.54;
      const radius = Math.min(width, height) / 2 - 80;

      const tree = d3.cluster()
        .size([2 * Math.PI, radius])
        .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

      const root = tree(d3.hierarchy(this.data.synonymsTree)
        .sort((a, b) => d3.ascending(a.data.name, b.data.name)));

      const svgContainer = d3.select(this.$refs.chartContainer);

      svgContainer.selectAll("svg").remove();

      const svg = svgContainer.append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-cx, -cy, width, height])
        .attr("style", "width: 50%; height: auto; font: 10px sans-serif;");

      svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5)
        .selectAll()
        .data(root.links())
        .join("path")
        .attr("d", d3.linkRadial()
          .angle(d => d.x)
          .radius(d => d.y));

      svg.append("g")
        .selectAll()
        .data(root.descendants())
        .join("circle")
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
        .attr("fill", d => d.children ? "#555" : "#999")
        .attr("r", 2.5);

      svg.append("g")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
        .selectAll()
        .data(root.descendants())
        .join("text")
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0) rotate(${d.x >= Math.PI ? 180 : 0})`)
        .attr("dy", "0.31em")
        .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
        .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
        .attr("paint-order", "stroke")
        .attr("stroke", "white")
        .attr("fill", "currentColor")
        .text(d => d.data.name);
    }
  }
};
</script>


<style>
.custom-button {
  margin-top: 10px;
  padding: 10px;
  color: #fff;
  background-color: #007bff; /* azul escuro */
  border-color: #007bff;
}

/* Estilo para botão em um fundo escuro */
.dark-bg .custom-button {
  background-color: #fff;
  color: #007bff;
}
</style>