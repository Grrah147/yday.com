const shelf = {
  id: '',
  code: '',
  name: '',
  description: '',
  highlight: null,
  show: false,

  image: {
    '2d': '',
    '3d': '',
    factory2d: '',
    factory3d: '',
    assembly2d: '',
    assembly3d: '',
  },

  totalMaterialArea: 0,
  totalPlankCount: 0,
  price: 0,

  planks: {
    frame: [
      {
        type: '',
        name: '',

        length: '',
        depth: '',
        degree: '',

        placement: {
          posx: '',
          posy: '',
        },

        material: {
          code: '',
          type: '',
          variant: '',
          name: '',
          color: {
            code: '',
            colorCode: '',
            name: '',
          },
        },

        lighting: [
          {
            code: '',
            lightSource: '',
            type: '',
            name: '',

            variant: {
              code: '',
              name: '',
              color: {
                code: '',
                color: '',
                colorCode: '',
                name: '',
              },
            },

            customLength: null,

            placement: {
              position: '',
              alignmentZ: '',
              alignmentX: '',
            },
          },
        ],
      },
    ],

    divider: [
      {
        type: '',
        name: '',

        depth: '',
        length: '',
        degree: '',

        placement: {
          posx: '',
          posy: '',
        },

        material: {
          code: '',
          type: '',
          variant: '',
          name: '',
          color: {
            code: '',
            colorCode: '',
            name: '',
          },
        },

        lighting: [
          {
            code: '',
            lightSource: '',
            type: '',
            name: '',

            variant: {
              code: '',
              name: '',
              color: {
                code: '',
                color: '',
                colorCode: '',
                name: '',
              },
            },

            customLength: null,

            placement: {
              position: '',
              alignmentZ: '',
              alignmentX: '',
            },
          },
        ],
      },
    ],

    shelf: [
      {
        type: '',
        name: '',

        depth: '',
        length: '',
        degree: '',

        placement: {
          posx: '',
          posy: '',
        },

        material: {
          code: '',
          type: '',
          variant: '',
          name: '',
          color: {
            code: '',
            colorCode: '',
            name: '',
          },
        },

        lighting: [
          {
            code: '',
            lightSource: '',
            type: '',
            name: '',

            variant: {
              code: '',
              name: '',
              color: {
                code: '',
                color: '',
                colorCode: '',
                name: '',
              },
            },

            customLength: null,

            placement: {
              position: '',
              alignmentZ: '',
              alignmentX: '',
            },
          },
        ],
      },
    ],
  },

  options: [
    {
      backboard: false,
      edgeFinish: 'single',
      variousColor: false,
      variousLighting: false,

      generalMaterial: {
        code: '',
        type: '',
        variant: '',
        name: '',
        color: {
          code: '',
          colorCode: '',
          name: '',
        },
      },

      wineRack: [
        {
          corners: [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
          ],
          depth: 37,
          material: {
            code: '',
            type: '',
            variant: '',
            name: '',
            color: {
              code: '',
              color: '',
              colorCode: '',
              name: '',
            },
          },
        },
      ],
    },
  ],
}
