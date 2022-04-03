export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6249d7c220abb612f1c117e3',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-studio-5p4wr943',
                  apiId: 'bc5cfbec-8fbd-4d79-a256-b8454afc2dd1'
                },
                {
                  buildHookId: '6249d7c30216d16296dba8f1',
                  title: 'Portfolio Website',
                  name: 'sanity-portfolio-web-2xceewka',
                  apiId: '7cda5d2f-4f4d-4afb-8267-834f86a3436b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nuelAY/sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-portfolio-web-2xceewka.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
