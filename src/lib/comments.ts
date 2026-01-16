const STORAGE_KEY = 'growthrings-feedback';

export interface FeedbackData {
  comments: Record<string, string>;
  options: Record<string, { selected: string; notes: string }>;
}

export function getFeedback(): FeedbackData {
  if (typeof window === 'undefined') {
    return { comments: {}, options: {} };
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { comments: {}, options: {} };
  }
  return JSON.parse(stored);
}

export function saveComment(section: string, content: string) {
  const feedback = getFeedback();
  feedback.comments[section] = content;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}

export function getComment(section: string): string {
  const feedback = getFeedback();
  return feedback.comments[section] || '';
}

export function saveOptionFeedback(id: string, selected: string, notes: string) {
  const feedback = getFeedback();
  feedback.options[id] = { selected, notes };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}

export function getOptionFeedback(id: string): { selected: string; notes: string } {
  const feedback = getFeedback();
  return feedback.options[id] || { selected: '', notes: '' };
}

export function getAllFeedback(): FeedbackData {
  return getFeedback();
}

export function clearAllFeedback() {
  localStorage.removeItem(STORAGE_KEY);
}
