window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
// =require slate/a11y.js
// =require slate/cart.js
// =require slate/utils.js
// =require slate/rte.js
// =require slate/sections.js
// =require slate/currency.js
// =require slate/images.js
// =require slate/variants.js

/*================ Sections ================*/
// =require sections/product.js
// =require sections/header-section.js
// =require sections/footer-section.js
// =require sections/featured-collection-section.js
// =require sections/slideshow.js
// =require sections/collection-section.js
// =require sections/cart.js
// =require sections/maps.js
// =require sections/instagram-feed.js

/*================ Global ================*/
// =require global/qty-selector.js
// =require global/product-model.js

/*================ Modules ================*/
// =require modules/site-header.js
// =require modules/mobile-nav.js
// =require modules/nav-drawer.js
// =require modules/search.js
// =require modules/site-footer.js
// =require modules/product-card.js
// =require modules/quick-view.js
// =require modules/collection-sorting.js
// =require modules/collection-sidebar.js
// =require modules/inflector.js

/*================ Templates ================*/
// =require templates/customers-addresses.js
// =require templates/customers-login.js
// =require templates/search.js

$(document).ready(function() {
  var sections = new slate.Sections();
  sections.register('product', theme.Product);
  sections.register('header', theme.HeaderSection);
  sections.register('footer', theme.FooterSection);
  sections.register('featured-collection-section', theme.FeaturedCollectionSection);
  sections.register('slideshow', theme.Slideshow);
  sections.register('collection-template', theme.CollectionSection);
  sections.register('cart', theme.Cart);
  sections.register('map', theme.Maps);
  sections.register('instagram-feed', theme.InstagramFeed);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Wrap videos in div to force responsive layout.
  slate.rte.wrapTable();
  slate.rte.iframeReset();

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }
});
