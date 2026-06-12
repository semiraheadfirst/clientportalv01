/* @ds-bundle: {"format":3,"namespace":"StriiveDesignSystem_627d12","components":[],"sourceHashes":{"styles/ds-nav.js":"689afdf9c617"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StriiveDesignSystem_627d12 = window.StriiveDesignSystem_627d12 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// styles/ds-nav.js
try { (() => {
/* Shared topbar injector for DS pages.
   Use on any page: <script src="styles/ds-nav.js"></script>
   Set <body data-page="typography" data-section="foundation"> */

(function () {
  const foundationNav = [{
    id: 'overview',
    href: 'foundation.html',
    label: 'Overview'
  }, {
    id: 'typography',
    href: 'foundation-typography.html',
    label: 'Typography'
  }, {
    id: 'color',
    href: 'foundation-color.html',
    label: 'Color'
  }, {
    id: 'spacing',
    href: 'foundation-spacing.html',
    label: 'Spacing'
  }, {
    id: 'radius',
    href: 'foundation-radius.html',
    label: 'Radius'
  }, {
    id: 'borders',
    href: 'foundation-borders.html',
    label: 'Borders'
  }, {
    id: 'elevation',
    href: 'foundation-elevation.html',
    label: 'Elevation'
  }, {
    id: 'motion',
    href: 'foundation-motion.html',
    label: 'Motion'
  }];
  const componentsNav = [{
    id: 'overview',
    href: 'components.html',
    label: 'Overview'
  }, {
    id: 'prime',
    href: 'components-prime.html',
    label: 'Prime components'
  }, {
    id: 'custom',
    href: 'components-custom.html',
    label: 'Custom components'
  }];
  const meta = {
    foundation: {
      title: 'Foundation',
      nav: foundationNav,
      tag: 'Foundation'
    },
    components: {
      title: 'Components',
      nav: componentsNav,
      tag: 'Components'
    },
    about: {
      title: 'About',
      nav: [{
        id: 'location',
        href: 'location.html',
        label: 'Where this lives'
      }],
      tag: 'About'
    }
  };
  const body = document.body;
  const section = body.dataset.section;
  const page = body.dataset.page;
  const m = meta[section];
  if (!m) return;
  const topbar = document.createElement('header');
  topbar.className = 'topbar';
  topbar.innerHTML = `
    <div class="topbar-inner">
      <a href="index.html" class="back">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        Design System
      </a>
      <span class="sep">/</span>
      <span class="here">${m.title}</span>
      <span class="spacer"></span>
      <span class="section-tag">${m.tag}</span>
    </div>
  `;
  body.insertBefore(topbar, body.firstChild);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "styles/ds-nav.js", error: String((e && e.message) || e) }); }

})();
