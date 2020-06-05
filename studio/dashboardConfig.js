export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ed99ef9e0f2c9101cfd5056',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nwfaefym',
                  apiId: '0832fc5f-98f6-4575-95ae-145a681dd70c'
                },
                {
                  buildHookId: '5ed99efa7fd47917578de4e3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vpev6buv',
                  apiId: '8812baab-83f8-4c3d-8600-9358ceccf3a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarcosPedro/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vpev6buv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
