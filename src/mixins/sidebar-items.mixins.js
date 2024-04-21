export default {
  computed: {
    items() {
      return [
        {
          icon: 'home',
          name: 'Home',
          url: {
            name: 'home',
          }
        },
        {
          icon: 'post',
          name: 'Publicação',
          url: {
            name: 'synonyms',
          },
          children: [
            {
              icon: 'clipboard-list-outline',
              name: 'Sinônimos',
              url: {
                name: 'synonymsTable',
              },
            },
            {
              icon: 'clock-alert-outline',
              name: 'Relacionamento de Palavras',
              url: {
                name: 'synonymsChart',
              },
            },
          ],
        },
      ];
    }
  }
};
