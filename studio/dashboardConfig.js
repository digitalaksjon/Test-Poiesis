export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'test-poiesis-studio',
                  apiId: '3fbeb53c-7c5b-47d4-b80d-0de84304b07f'
                },
                {
                  buildHookId: '632766f7af20696a33852550',
                  title: 'Events Website',
                  name: 'test-poiesis',
                  apiId: '5828440e-1e45-457d-9ead-9e1ba2c8ca5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitalaksjon/Test-Poiesis',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-poiesis.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
