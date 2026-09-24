/**
 * SCANNERI ELEMENTHO — runtime (announcements, page status, settings)
 * Compatible with Admin Panel localStorage keys.
 */
(function () {
  'use strict';
  if ((location.pathname.split('/').pop() || '') === 'admin.html') return;

  function loadJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch (e) { return fallback; }
  }

  var page = location.pathname.split('/').pop() || 'index.html';
  if (!page) page = 'index.html';

  var settings = loadJSON('se_site_settings', null) || loadJSON('siteSettings', null) || {};
  if (localStorage.getItem('maintenanceMode') === '1') settings.maintenance = true;

  var pages = loadJSON('se_pages_status', null) || loadJSON('pageStatus', null);

  var announce = loadJSON('se_announce', null);
  if (!announce) {
    var list = loadJSON('announcements', []);
    if (list && list.length) {
      var last = list[list.length - 1];
      announce = { text: typeof last === 'string' ? last : (last.text || ''), enabled: true };
    }
  }

  if (settings.title) document.title = settings.title;
  if (settings.desc) {
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', settings.desc);
  }

  var lang = (localStorage.getItem('lang') || localStorage.getItem('se_admin_lang') || 'tj');
  var msgMaint = lang === 'ru'
    ? { t: 'Сайт на обслуживании', p: 'Пожалуйста, зайдите позже. Ведутся технические работы.' }
    : { t: 'Сайт дар ҳолати нигоҳдорӣ', p: 'Лутфан дертар бозгашт кунед. Корҳои техникӣ идома доранд.' };
  var msgOff = lang === 'ru'
    ? { t: 'Страница временно недоступна', p: 'Этот раздел сейчас отключён.', a: '← На главную' }
    : { t: 'Саҳифа муваққатан дастнорас аст', p: 'Ин қисмат ҳоло фаъол нест. Ба саҳифаи асосӣ баргардед.', a: '← Ба асосӣ' };

  if (settings.maintenance) {
    document.documentElement.innerHTML =
      '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<title>' + msgMaint.t + '</title>' +
      '<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;' +
      'background:#0c1222;color:#f1f5f9;font-family:system-ui,sans-serif;padding:24px;text-align:center}' +
      '.box{max-width:420px;border:1px solid rgba(201,162,39,.25);border-radius:14px;padding:32px 24px;' +
      'background:rgba(20,28,46,.9)}h1{color:#e8d48b;font-size:1.4rem;margin:0 0 12px}' +
      'p{color:#94a3b8;line-height:1.55;margin:0}</style></head><body><div class="box">' +
      '<h1>⚛ ' + msgMaint.t + '</h1><p>' + msgMaint.p + '</p></div></body>';
    return;
  }

  if (pages && pages[page] === false) {
    document.documentElement.innerHTML =
      '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<title>' + msgOff.t + '</title>' +
      '<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;' +
      'background:#0c1222;color:#f1f5f9;font-family:system-ui,sans-serif;padding:24px;text-align:center}' +
      '.box{max-width:420px;border:1px solid rgba(201,162,39,.25);border-radius:14px;padding:32px 24px;' +
      'background:rgba(20,28,46,.9)}h1{color:#e8d48b;font-size:1.4rem;margin:0 0 12px}' +
      'p{color:#94a3b8;line-height:1.55;margin:0 0 18px}a{color:#c9a227;font-weight:600}</style></head><body><div class="box">' +
      '<h1>' + msgOff.t + '</h1><p>' + msgOff.p + '</p><a href="index.html">' + msgOff.a + '</a></div></body>';
    return;
  }

  if (announce && announce.enabled && announce.text) {
    var bar = document.createElement('div');
    bar.setAttribute('role', 'status');
    bar.style.cssText =
      'position:relative;z-index:50;background:linear-gradient(90deg,rgba(201,162,39,.18),rgba(45,212,191,.1));' +
      'border-bottom:1px solid rgba(201,162,39,.28);color:#e8d48b;font-family:system-ui,sans-serif;' +
      'font-size:0.88rem;padding:10px 40px 10px 16px;text-align:center;line-height:1.4';
    bar.textContent = announce.text;
    var close = document.createElement('button');
    close.type = 'button';
    close.setAttribute('aria-label', 'Close');
    close.textContent = '×';
    close.style.cssText =
      'position:absolute;right:10px;top:50%;transform:translateY(-50%);background:transparent;' +
      'border:none;color:#e8d48b;font-size:1.25rem;cursor:pointer;line-height:1;padding:4px 8px';
    close.addEventListener('click', function () { bar.remove(); });
    bar.appendChild(close);
    function inject() {
      if (document.body) document.body.insertBefore(bar, document.body.firstChild);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
    else inject();
  }
})();
