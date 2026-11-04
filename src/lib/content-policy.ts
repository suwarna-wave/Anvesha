export function isPublicInsight(
  data: { status: string; publishedAt?: Date },
  now = new Date(),
) {
  return (
    data.status === 'published' && !!data.publishedAt && data.publishedAt <= now
  );
}
export function isPublicEvent(data: {
  status: string;
  state: string;
  startsAt?: Date;
}) {
  return (
    data.status === 'published' && data.state !== 'planned' && !!data.startsAt
  );
}
export function isPublicInitiative(data: { status: string }) {
  return data.status === 'published';
}
export function eventRegistrationAvailable(
  data: {
    state: string;
    registrationUrl?: string;
    startsAt?: Date;
    deadline?: Date;
  },
  now = new Date(),
) {
  return (
    data.state === 'open' &&
    !!data.registrationUrl &&
    !!data.startsAt &&
    data.startsAt > now &&
    (!data.deadline || data.deadline >= now)
  );
}
