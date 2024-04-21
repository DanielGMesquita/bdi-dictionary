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
  name: 'SynonymsTable',
  components: { PageHeader },
  data: () => ({
    labels: {
      title: 'Busca de Sinônimos',
      search: 'Buscar',
      description: 'Permite a busca de palavras sinônimas a seleção do usuário',
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
