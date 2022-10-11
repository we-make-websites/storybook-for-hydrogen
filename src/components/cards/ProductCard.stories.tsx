import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ProductCard} from './ProductCard.client';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Hydrogen/Components/Cards/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  product: {
    id: 'gid://shopify/Product/6730850828344',
    title: 'The Hydrogen Snowboard',
    publishedAt: '2022-06-09T21:22:48Z',
    handle: 'snowboard',
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/41007289630776',
          image: {
            url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/products/Main.jpg?v=1655932274',
            altText: null,
            width: 3908,
            height: 3908,
          },
          priceV2: {
            amount: '600.0',
            currencyCode: 'USD',
          },
          compareAtPriceV2: {
            amount: '649.95',
            currencyCode: 'USD',
          },
        },
      ],
    },
  },
  className: 'snap-start w-80',
};
