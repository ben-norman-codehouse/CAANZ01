import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Product-Layout component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function ProductLayout(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Product-Layout',
    templateName: 'Product-Layout',
    icon: SitecoreIcon.Layout,
    placeholders: ['jss-product-layout'],
  });
}
