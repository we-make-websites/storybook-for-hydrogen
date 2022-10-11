import React from 'react'
import type {DecoratorFn} from '@storybook/react'
import {ShopifyTestProviders} from '@shopify/hydrogen/testing';

export const withShopifyTestProvider: DecoratorFn = (Story) => (
  <ShopifyTestProviders>
    <Story />
  </ShopifyTestProviders>
)