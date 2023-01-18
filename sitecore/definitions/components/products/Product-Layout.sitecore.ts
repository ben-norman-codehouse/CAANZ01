import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Products-Layout component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function ProductsLayout(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Products-Layout',
    templateName: 'Products-Layout',
    icon: SitecoreIcon.Layout,
    placeholders: ['jss-products-layout'],
  });
}
