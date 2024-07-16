const commonSidebar = [
];

const lily58prov2 = [
  'lily58-pro-v2/about',
  'lily58-pro-v2/assembly',
  'lily58-pro-v2/firmware',
  'lily58-pro-v2/technical_specifications',
]

const lily58pro = [
  'lily58-pro/Lily58_Pro_BG',
  'lily58-pro/firmware',
]

const literev3 = [
  'lily58-lite-rev3/about',
  'lily58-lite-rev3/assembly',
]

const literev2 = [
  'lily58-lite-rev2/Lily58_Lite_Rev2',
  'lily58-lite-rev2/Lily58_Lite_Rev2_BG',
  'lily58-lite-rev2/Lily58_Lite_Rev2_PinHeader',
  'lily58-lite-rev2/Lily58_Lite_Rev2_Parts',
  'lily58-lite-rev2/firmware',
]

const sidebars = {
  topSidebar: [
    'about',
    {
      type: 'category',
      label: 'Lily58 Pro V2',
      items: lily58prov2,
    },
    {
      type: 'category',
      label: 'Lily58 Pro',
      items: lily58pro,
    },
    {
      type: 'category',
      label: 'Lily58 Lite Rev3',
      items: literev3,
    },
    {
      type: 'category',
      label: 'Lily58 Lite Rev2',
      items: literev2,
    },
    ...commonSidebar
  ],
  prov2Sidebar: [
    ...lily58prov2,
    ...commonSidebar,
  ],
  proSidebar: [
    ...lily58pro,
    ...commonSidebar,
  ],
  literev3Sidebar: [
    ...literev3,
    ...commonSidebar,
  ],
  literev2Sidebar: [
    ...literev2,
    ...commonSidebar,
  ],
  
};

module.exports = sidebars;
