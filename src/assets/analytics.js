import {environment} from "../environments/environment";

export function googleAnalyticsHeadScripts() {
  const head = document.getElementsByTagName('head')[0];

  const googleAnalyticsFirstScript = document.createElement('script');
  googleAnalyticsFirstScript.async = true;
  googleAnalyticsFirstScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.analyticsCode;

  const googleAnalyticsSecondScript = document.createElement('script');
  googleAnalyticsSecondScript.innerHTML = '    window.dataLayer = window.dataLayer || [];\n' +
    '    function gtag(){dataLayer.push(arguments);}\n' +
    '    gtag(\'js\', new Date());\n' +
    '\n' +
    '    gtag(\'config\', \'' + environment.analyticsCode + '\');';

  head.insertBefore(googleAnalyticsSecondScript, head.firstChild);
  head.insertBefore(googleAnalyticsFirstScript, head.firstChild);
}

export function googleAnalytics(url) {
  gtag('config', environment.analyticsCode, {'page_path': url});
}

export function sendGAEvent(action, category = '', label = '', value = '') {
  if (environment.analyticsCode) {
    let payload = {};
    if (category) payload['event_category'] = category;
    if (label) payload['event_label'] = label;
    if (value) payload['value'] = value;
    gtag('event', action, payload);
  }
}
