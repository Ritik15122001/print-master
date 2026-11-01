import { useEffect, useRef, useState } from 'react';
import FormField from './FormField';
import Button from '../common/Button';
import { ArrowRight, WhatsAppIcon } from '../common/Icons';
import { SERVICE_OPTIONS, BUDGET_OPTIONS } from '../../data/services';
import { validateAll, validateField } from '../../utils/validation';
import { buildEnquiryMessage, buildWhatsAppUrl, openWhatsApp } from '../../utils/whatsapp';

const EMPTY = { name: '', contact: '', company: '', service: '', details: '', budget: '' };
export const jobNo = () => `PM-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}`;

/**
 * Static quote form — every valid submission is turned into a prefilled
 * WhatsApp message. Nothing is sent anywhere until the visitor presses Send
 * inside WhatsApp, and the form is never reset before the message is built.
 */
export default function ContactForm({ presetService }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'ok' | 'bad', text, href? }
  const refs = useRef({});

  // Service-specific "Get a quote" links pre-select the dropdown.
  useEffect(() => {
    if (presetService?.value) setValues((v) => ({ ...v, service: presetService.value }));
  }, [presetService]);

  const set = (name) => (e) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: validateField(name, value) }));
  };
  const blur = (name) => () => setErrors((er) => ({ ...er, [name]: validateField(name, values[name]) }));

  // Single submission handler for both buttons.
  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validateAll(values);
    setErrors(errs);
    const firstBad = Object.keys(errs).find((k) => errs[k]);
    if (firstBad) {
      setStatus({ type: 'bad', text: 'Please correct the highlighted fields.' });
      refs.current[firstBad]?.focus();
      return;
    }
    const ref = jobNo();
    const url = buildWhatsAppUrl(buildEnquiryMessage(values, `Print Master · ${ref}`));
    if (!url) {
      setStatus({ type: 'bad', text: 'WhatsApp enquiries are not set up yet — please try again soon.' });
      if (import.meta.env.DEV) console.warn('[Print Master] Set whatsappNumber in src/config/siteConfig.js');
      return;
    }
    openWhatsApp(url); // synchronous, inside the submit gesture → not popup-blocked
    setStatus({
      type: 'ok',
      text: 'WhatsApp opened with your enquiry prefilled. Press Send in WhatsApp to deliver it — nothing has been sent yet.',
      href: url,
    });
  };

  const bind = (name) => ({
    value: values[name],
    onChange: set(name),
    onBlur: blur(name),
    ref: (el) => { refs.current[name] = el; },
  });

  return (
    <form className="grid grid-cols-2 gap-x-[26px] p-[clamp(26px,4vw,48px)] max-sm:grid-cols-1" noValidate onSubmit={onSubmit}>
      <div className="col-span-full mb-2 flex items-center justify-between border-b-[1.5px] border-ink pb-4">
        <b className="text-[1.3rem] tracking-[-.02em]">Request a quote</b>
        <span className="mono text-muted">Job No. {jobNo()}</span>
      </div>
      <div role="status" aria-live="polite" className="col-span-full">
        {status && (
          <div className={`status ${status.type}`}>
            {status.text}
            {status.href && (
              <> {' '}<a href={status.href} target="_blank" rel="noopener noreferrer">Didn't open? Tap here.</a></>
            )}
          </div>
        )}
      </div>
      <FormField name="name" label="Name" error={errors.name}>
        {(a) => <input {...a} {...bind('name')} autoComplete="name" />}
      </FormField>
      <FormField name="contact" label="Email or mobile" error={errors.contact}>
        {(a) => <input {...a} {...bind('contact')} autoComplete="tel" placeholder="98xxxxxxxx" />}
      </FormField>
      <FormField name="company" label="Company" optional>
        {(a) => <input {...a} {...bind('company')} autoComplete="organization" />}
      </FormField>
      <FormField name="service" label="Service required" error={errors.service}>
        {(a) => (
          <select {...a} {...bind('service')}>
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
        )}
      </FormField>
      <FormField name="details" label="Project details" error={errors.details} full>
        {(a) => <textarea {...a} {...bind('details')} placeholder="Quantity, size, paper / finish, deadline, references…" />}
      </FormField>
      <FormField name="budget" label="Budget" optional full>
        {(a) => (
          <select {...a} {...bind('budget')}>
            <option value="">Prefer not to say</option>
            {BUDGET_OPTIONS.map((b) => <option key={b}>{b}</option>)}
          </select>
        )}
      </FormField>
      <div className="col-span-full flex flex-wrap items-center gap-2.5 pt-6">
        <Button as="button" type="submit" variant="ink">Send to Press <ArrowRight /></Button>
        <Button as="button" type="submit" variant="wa"><WhatsAppIcon />Send on WhatsApp</Button>
        <small className="flex-[1_1_200px] text-[.85rem] text-muted">
          Your details are used only to respond to this enquiry. Submitting opens WhatsApp with your message ready to send.
        </small>
      </div>
    </form>
  );
}
