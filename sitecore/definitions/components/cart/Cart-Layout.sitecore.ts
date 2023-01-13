import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Cart-Layout component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function CartLayout(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Cart-Layout',
    templateName: 'Cart-Layout',
    icon: SitecoreIcon.Layout,
    placeholders: ['jss-cart-layout'],
  });
}
