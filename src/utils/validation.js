// Validation rules ported 1:1 from the reference form.
export const rules = {
  name: (v) => v.trim().length >= 2 || 'Please enter your name.',
  contact: (v) => {
    const s = v.trim();
    if (!s) return 'Please share an email or mobile number.';
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
    const d = s.replace(/\D/g, '');
    const mobile =
      /^[+\d\s\-()]+$/.test(s) &&
      (/^[6-9]\d{9}$/.test(d) || /^91[6-9]\d{9}$/.test(d) || /^0\d{10}$/.test(d) || (d.length >= 8 && d.length <= 13));
    return email || mobile || 'Enter a valid email or 10-digit mobile number.';
  },
  service: (v) => !!v || 'Please choose a service.',
  details: (v) => v.trim().length >= 15 || 'Please add a few details (at least 15 characters).',
};

/** Returns an error string, or '' when valid / no rule exists. */
export function validateField(name, value) {
  const rule = rules[name];
  if (!rule) return '';
  const res = rule(value);
  return res === true ? '' : res;
}

export function validateAll(values) {
  return Object.fromEntries(Object.keys(rules).map((k) => [k, validateField(k, values[k] ?? '')]));
}
