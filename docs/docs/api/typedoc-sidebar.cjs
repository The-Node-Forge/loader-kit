// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = {
  items: [
    {
      type: 'category',
      label: 'Classes',
      items: [{ type: 'doc', id: 'api/classes/Loader', label: 'Loader' }],
    },
    {
      type: 'category',
      label: 'Functions',
      items: [
        { type: 'doc', id: 'api/functions/createLoader', label: 'createLoader' },
      ],
    },
  ],
};
module.exports = typedocSidebar.items;
