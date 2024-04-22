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
  }),
  methods: {
  }
};
</script>
