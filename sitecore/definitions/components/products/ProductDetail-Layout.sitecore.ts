import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Products-Layout component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function ProductDetailLayout(manifest: Manifest): void {
  manifest.addRouteType({
    name: 'ProductDetail-Layout',
    fields: [],
  });
  manifest.addComponent({
    name: 'ProductDetail-Layout',
    templateName: 'ProductDetail-Layout',
    icon: SitecoreIcon.Layout,
    placeholders: ['jss-product-detail-layout'],
  });
}
