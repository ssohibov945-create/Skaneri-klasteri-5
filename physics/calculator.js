function val(id) {
  const el = document.getElementById(id);
  if (!el || el.value.trim() === '') return null;
  const n = Number(el.value);
  return Number.isFinite(n) ? n : null;
}

function fmt(n) {
  return Number(n.toFixed(4)).toString();
}

function show(id, text, isError) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.classList.toggle('calc-error', !!isError);
}

function calcSpeed() {
  const s = val('speedS');
  const t = val('speedT');
  const v = val('speedV');
  const v0 = val('speedV0');
  const parts = [];

  if (s !== null && t !== null) {
    if (t === 0) return show('speedResult', 'Вақт бояд аз сифр фарқ кунад', true);
    parts.push('v = ' + fmt(s / t) + ' м/с');
  }
  if (v !== null && t !== null) {
    parts.push('s = ' + fmt(v * t) + ' м');
  }
  if (v !== null && v0 !== null && t !== null) {
    if (t === 0) return show('speedResult', 'Вақт бояд аз сифр фарқ кунад', true);
    parts.push('a = ' + fmt((v - v0) / t) + ' м/с²');
  }

  if (parts.length === 0) {
    return show('speedResult', 'Ҳадди ақал 2 қиматро ворид кунед (s+t, v+t ё v+v₀+t)', true);
  }
  show('speedResult', parts.join(' · '));
}

function calcForce() {
  const m = val('forceM');
  const a = val('forceA');
  const f = val('forceF');
  const parts = [];

  if (m !== null && a !== null) parts.push('F = ' + fmt(m * a) + ' Н');
  if (f !== null && a !== null) {
    if (a === 0) return show('forceResult', 'Шитоб бояд аз сифр фарқ кунад', true);
    parts.push('m = ' + fmt(f / a) + ' кг');
  }
  if (f !== null && m !== null) {
    if (m === 0) return show('forceResult', 'Масса бояд аз сифр фарқ кунад', true);
    parts.push('a = ' + fmt(f / m) + ' м/с²');
  }

  if (parts.length === 0) {
    return show('forceResult', 'Ҳадди ақал 2 қиматро ворид кунед', true);
  }
  show('forceResult', parts.join(' · '));
}

function calcPressureDensity() {
  const force = val('pressureF');
  const area = val('pressureS');
  const mass = val('densityM');
  const volume = val('densityV');
  let ok = false;

  if (force !== null && area !== null) {
    if (area === 0) {
      show('pressureResult', 'Масоҳат бояд аз сифр фарқ кунад', true);
    } else {
      show('pressureResult', 'p = ' + fmt(force / area) + ' Па');
      ok = true;
    }
  } else {
    show('pressureResult', '');
  }

  if (mass !== null && volume !== null) {
    if (volume === 0) {
      show('densityResult', 'Ҳаҷм бояд аз сифр фарқ кунад', true);
    } else {
      show('densityResult', 'ρ = ' + fmt(mass / volume) + ' кг/м³');
      ok = true;
    }
  } else {
    show('densityResult', '');
  }

  if (!ok) {
    show('pressureResult', 'F+S барои фишор ё m+V барои зичӣ ворид кунед', true);
  }
}

function calcWorkEnergy() {
  const force = val('workF');
  const distance = val('workS');
  const mass = val('energyM');
  const speed = val('energyV');
  let ok = false;

  if (force !== null && distance !== null) {
    show('workResult', 'A = ' + fmt(force * distance) + ' Ҷ');
    ok = true;
  } else {
    show('workResult', '');
  }

  if (mass !== null && speed !== null) {
    show('energyResult', 'Eк = ' + fmt(mass * speed * speed / 2) + ' Ҷ');
    ok = true;
  } else {
    show('energyResult', '');
  }

  if (!ok) {
    show('workResult', 'F+s барои кор ё m+v барои энергия ворид кунед', true);
  }
}

function calcOhm() {
  const U = val('ohmU');
  const I = val('ohmI');
  const R = val('ohmR');
  const parts = [];

  if (I !== null && R !== null) parts.push('U = ' + fmt(I * R) + ' В');
  if (U !== null && R !== null) {
    if (R === 0) return show('ohmResult', 'Муқовимат бояд аз сифр фарқ кунад', true);
    parts.push('I = ' + fmt(U / R) + ' А');
  }
  if (U !== null && I !== null) {
    if (I === 0) return show('ohmResult', 'Ҷараён бояд аз сифр фарқ кунад', true);
    parts.push('R = ' + fmt(U / I) + ' Ом');
  }
  if (U !== null && I !== null) parts.push('P = ' + fmt(U * I) + ' Вт');
  else if (I !== null && R !== null) parts.push('P = ' + fmt(I * I * R) + ' Вт');
  else if (U !== null && R !== null) parts.push('P = ' + fmt(U * U / R) + ' Вт');

  if (parts.length === 0) {
    return show('ohmResult', 'Ҳадди ақал 2 қиматро ворид кунед (U, I, R)', true);
  }
  show('ohmResult', parts.join(' · '));
}
