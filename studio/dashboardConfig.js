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
                  buildHookId: '60062c86e91328a2c082c1da',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-b3p6zxwo',
                  apiId: '7ad80ac4-591a-4efc-a75a-af6fb9a8cd61'
                },
                {
                  buildHookId: '60062c862191b4eb4fbaeea2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1j7fax1a',
                  apiId: 'cd4e6a9f-13b9-4d60-abf5-4cd5106afefc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eed6/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1j7fax1a.netlify.app',
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
