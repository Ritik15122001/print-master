/** Ticket-style field: mono label, borderless control, inline error message. */
export default function FormField({ name, label, optional, error, full, children }) {
  const msgId = `m-${name}`;
  return (
    <div className={`field ${error ? 'err' : ''} ${full ? 'col-span-full' : ''}`}>
      <label htmlFor={`f-${name}`}>
        {label} {optional && <span className="opt">(optional)</span>}
      </label>
      {children({ id: `f-${name}`, name, 'aria-invalid': error ? true : undefined, 'aria-describedby': error ? msgId : undefined })}
      <span className="msg" id={msgId}>{error}</span>
    </div>
  );
}
