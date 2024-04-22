<template>
  <div>
    <PageHeader
      :title="labels.title"
      :description="labels.description"
    />
    <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="word"
        />
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
    items: [],
    menu: false,
    word: "",
    words: [],
  }),
  methods: {
    fetchData() {
      // Faz uma chamada ao backend para obter os sinônimos da palavra fornecida
      axios.get(`https://dictionary-api.up.railway.app/dictionary/synonyms?word=${this.word}`)
        .then(response => {
          const synonyms = response.data.synonyms;
          // Adiciona a palavra original à lista de nós
          this.nodes.push({ id: this.word });
          // Adiciona os sinônimos à lista de nós
          synonyms.forEach(synonym => {
            this.nodes.push({ id: synonym });
            // Adiciona links entre a palavra original e seus sinônimos
            this.links.push({ source: this.word, target: synonym });
          });
          // Chama a função para renderizar o gráfico
          this.renderGraph();
        })
        .catch(error => {
          console.error('Erro ao obter os sinônimos:', error);
        });
    },
    renderGraph() {
      const width = 600;
      const height = 400;

      const svg = d3.select(this.$refs.graph)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      // Crie a simulação de força para posicionar os nós
      const simulation = d3.forceSimulation(this.nodes)
        .force('link', d3.forceLink(this.links).distance(100))
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter(width / 2, height / 2));

      // Crie os elementos SVG para representar os links
      const link = svg.selectAll('.link')
        .data(this.links)
        .enter().append('line')
        .attr('class', 'link');

      // Crie os elementos SVG para representar os nós
      const node = svg.selectAll('.node')
        .data(this.nodes)
        .enter().append('circle')
        .attr('class', 'node')
        .attr('r', 10)
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended));

      // Adicione texto aos nós
      const labels = svg.selectAll(null)
        .data(this.nodes)
        .enter()
        .append('text')
        .text(d => d.id)
        .attr('font-size', 12);

      // Defina o comportamento de arrastar dos nós
      function dragstarted(d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      // Atualize a posição dos elementos SVG conforme a simulação avança
      simulation.on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

        node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y);

        labels
          .attr('x', d => d.x + 15)
          .attr('y', d => d.y + 5);
      });
    }
  }
};
</script>
