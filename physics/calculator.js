function value(id) {
    const input = document.getElementById(id);
    return input.value.trim() === '' ? null : Number(input.value);
}
function valid(values) { return values.every(number => Number.isFinite(number)); }
function showResult(id, message, error = false) { const element = document.getElementById(id); element.textContent = message; element.classList.toggle('calc-error', error); }
function format(number) { return Number(number.toFixed(4)).toString(); }
function missing(id) { showResult(id, 'Маълумотро ворид кунед', true); }

function calcSpeed() {
    const s = value('speedS'); const t = value('speedT'); const v = value('speedV'); const v0 = value('speedV0');
    if (!valid([s, t, v, v0])) return missing('speedResult');
    if (t === 0) return showResult('speedResult', 'Вақт бояд аз сифр фарқ кунад', true);
    showResult('speedResult', `v = ${format(s / t)} м/с · a = ${format((v - v0) / t)} м/с² · s = ${format(v * t)} м`);
}

function calcForce() {
    const m = value('forceM'); const a = value('forceA'); const f = value('forceF');
    if (!valid([m, a, f])) return missing('forceResult');
    if (m === 0 || a === 0) return showResult('forceResult', 'Масса ва шитоб бояд аз сифр фарқ кунанд', true);
    showResult('forceResult', `F = ${format(m * a)} Н · m = ${format(f / a)} кг · a = ${format(f / m)} м/с²`);
}

function calcPressureDensity() {
    const force = value('pressureF'); const area = value('pressureS'); const mass = value('densityM'); const volume = value('densityV');
    if (!valid([force, area, mass, volume])) { missing('pressureResult'); missing('densityResult'); return; }
    if (area === 0 || volume === 0) { showResult('pressureResult', 'Масоҳат ва ҳаҷм бояд аз сифр фарқ кунанд', true); showResult('densityResult', '', true); return; }
    showResult('pressureResult', `p = ${format(force / area)} Па`);
    showResult('densityResult', `ρ = ${format(mass / volume)} кг/м³`);
}

function calcWorkEnergy() {
    const force = value('workF'); const distance = value('workS'); const mass = value('energyM'); const speed = value('energyV');
    if (!valid([force, distance, mass, speed])) { missing('workResult'); missing('energyResult'); return; }
    showResult('workResult', `A = ${format(force * distance)} Ҷ`);
    showResult('energyResult', `Eк = ${format(mass * speed * speed / 2)} Ҷ`);
}

function calcOhm() {
    const voltage = value('ohmU'); const current = value('ohmI'); const resistance = value('ohmR');
    if (!valid([voltage, current, resistance])) return missing('ohmResult');
    if (current === 0 || resistance === 0) return showResult('ohmResult', 'Ҷараён ва муқовимат бояд аз сифр фарқ кунанд', true);
    showResult('ohmResult', `U = ${format(current * resistance)} В · I = ${format(voltage / resistance)} А · R = ${format(voltage / current)} Ом · P = ${format(voltage * current)} Вт`);
}