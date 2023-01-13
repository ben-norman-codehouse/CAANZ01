import Link from 'next/link';
import { useI18n } from 'next-localization';
import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs';
import { useOcSelector } from './ordercloud/redux/ocStore';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

const Navigation = (): JSX.Element => {
  const { t } = useI18n();

  const { lineItemCount } = useOcSelector((s) => ({
    user: s.ocUser.user,
    loading: s.ocAuth.loading,
    isAnonymous: s.ocAuth.isAnonymous,
    lineItemCount: s.ocCurrentOrder.order ? s.ocCurrentOrder.order.LineItemCount : 0,
  }));

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link href="/">
          <a className="text-dark">
            <img
              src={`${publicUrl}/CA_TM_logo_BR_Horizontal_CMYK_C 1.svg`}
              width="250px"
              alt="CAANZ"
            />
          </a>
        </Link>
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        {/* <a
          className="p-2 text-dark"
          href="https://jss.sitecore.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Documentation')}
        </a> */}
        {/* <Link href="/styleguide">
          <a className="p-2 text-dark">{t('Styleguide')}</a>
        </Link>
        <Link href="/graphql">
          <a className="p-2 text-dark">{t('GraphQL')}</a>
        </Link> */}
        <Link href="/products">
          <a className="p-2 text-dark">{t('Products')}</a>
        </Link>
        <Link href="/cart">
          <a className="p-2 text-dark">
            {t('Cart')} <span className="badge badge-pill badge-primary">{lineItemCount}</span>{' '}
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
