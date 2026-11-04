import { getCollection } from 'astro:content';
import {
  isPublicInsight,
  isPublicEvent,
  isPublicInitiative,
} from './content-policy';
export const publicInsights = async () =>
  (await getCollection('insights', ({ data }) => isPublicInsight(data))).sort(
    (a, b) => b.data.publishedAt!.getTime() - a.data.publishedAt!.getTime(),
  );
export const publicEvents = async () =>
  (await getCollection('events', ({ data }) => isPublicEvent(data))).sort(
    (a, b) => a.data.startsAt!.getTime() - b.data.startsAt!.getTime(),
  );
export const publicInitiatives = async () =>
  getCollection('initiatives', ({ data }) => isPublicInitiative(data));
export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kathmandu',
  }).format(date);
export const formatEventTime = (date: Date) =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kathmandu',
  }).format(date);
