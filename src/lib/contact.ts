const DEFAULT_SUBJECT = 'Contacto desde portafolio — Jackson Londoño';
const DEFAULT_BODY = 'Hola Jackson,\n\n';

export function getGmailComposeUrl(
  email: string,
  options?: { subject?: string; body?: string },
): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: email,
    su: options?.subject ?? DEFAULT_SUBJECT,
    body: options?.body ?? DEFAULT_BODY,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function getMailtoUrl(
  email: string,
  options?: { subject?: string; body?: string },
): string {
  const params = new URLSearchParams();
  if (options?.subject) params.set('subject', options.subject);
  if (options?.body) params.set('body', options.body);

  const query = params.toString();
  return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}
