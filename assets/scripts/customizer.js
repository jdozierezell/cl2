/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(($) => {
  // Site title and description.
  // eslint-disable-next-line no-undef
  wp.customize('blogname', (value) => {
    value.bind((to) => {
      $('.site-title a').text(to);
    });
  });
  // eslint-disable-next-line no-undef
  wp.customize('blogdescription', (value) => {
    value.bind((to) => {
      $('.site-description').text(to);
    });
  });

  // Header text color.
  // eslint-disable-next-line no-undef
  wp.customize('header_textcolor', (value) => {
    value.bind((to) => {
      if (to === 'blank') {
        $('.site-title, .site-description').css({
          clip: 'rect(1px, 1px, 1px, 1px)',
          position: 'absolute',
        });
      } else {
        $('.site-title, .site-description').css({
          clip: 'auto',
          position: 'relative',
        });
        $('.site-title a, .site-description').css({
          color: to,
        });
      }
    });
  });
// eslint-disable-next-line no-undef
})(jQuery);
