const shelf = {
  id: '',
  code: '',
  name: '',
  description: '',
  highlight: null,
  show: false,

  totalMaterialArea: 0,
  totalPlankCount: 0,
  price: 0,
  image: {
    '2d': '',
    '3d': '',
    factory2d: '',
    factory3d: '',
    assembly2d: '',
    assembly3d: '',
  },
  planks: {
    frame: [
      {
        type: '',
        name: '',
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
        depth: '',
        length: '',
        degree: '',
        posX: '',
        posY: '',
      },
    ],
    divider: [
      {
        type: '',
        name: '',
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
        depth: '',
        length: '',
        degree: '',
        posX: '',
        posY: '',
      },
    ],
    shelf: [
      {
        type: '',
        name: '',
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

            customLength: null,

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
          },
        ],
        depth: '',
        length: '',
        degree: '',
        posX: '',
        posY: '',
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

      generalLighting: {
        code: '',
        lightSource: '',
        type: '',
        name: '',

        variant: {
          code: '',
          name: '',
          color: {
            code: '',
            color: 'warm',
            colorCode: '',
            name: 'warm',
          },
        },

        quantity: null,
        customLength: null,
      },
      wineRacks: [
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
            color: {
              code: '',
              colorCode: '',
              name: '',
            },
          },
        },
      ],
    },
  ],
}
