'use client';

import { useState, useEffect, useCallback } from 'react';
import { MessageSquare, Check, Loader2 } from 'lucide-react';
import { saveComment, getComment } from '@/lib/comments';

interface CommentSectionProps {
  section: string;
  title?: string;
}

export default function CommentSection({ section, title = "Questions or Feedback?" }: CommentSectionProps) {
  const [content, setContent] = useState('');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const existing = getComment(section);
    if (existing) {
      setContent(existing);
    }
  }, [section]);

  const handleBlur = useCallback(() => {
    if (hasChanges && content) {
      setSaving(true);
      saveComment(section, content);
      setTimeout(() => {
        setSaving(false);
        setSaved(true);
        setHasChanges(false);
        setTimeout(() => setSaved(false), 2000);
      }, 300);
    }
  }, [content, hasChanges, section]);

  const handleChange = (value: string) => {
    setContent(value);
    setHasChanges(true);
    setSaved(false);
  };

  const handleSave = () => {
    setSaving(true);
    saveComment(section, content);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setHasChanges(false);
      setTimeout(() => setSaved(false), 2000);
    }, 300);
  };

  return (
    <div className="mt-12 bg-white rounded-2xl p-6 shadow-md border border-stone-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-500 rounded-lg flex items-center justify-center">
          <MessageSquare className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-stone-800">{title}</h3>
          <p className="text-sm text-stone-500">Your feedback will be saved automatically</p>
        </div>
      </div>

      <div className="relative">
        <textarea
          value={content}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          placeholder="Leave your thoughts, questions, or concerns here..."
          className="w-full h-32 p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-white resize-none transition-all"
        />

        <div className="absolute bottom-3 right-3">
          {saving && (
            <span className="flex items-center gap-1 text-sm text-stone-400">
              <Loader2 className="h-3 w-3 animate-spin" />
              Saving...
            </span>
          )}
          {saved && !saving && (
            <span className="flex items-center gap-1 text-sm text-green-500">
              <Check className="h-3 w-3" />
              Saved
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleSave}
          disabled={saving || (!hasChanges && !content)}
          className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
            saved
              ? 'bg-green-500 text-white'
              : saving
              ? 'bg-stone-200 text-stone-400 cursor-wait'
              : 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-lg'
          }`}
        >
          {saving ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : saved ? (
            <>
              <Check className="h-4 w-4" />
              Saved!
            </>
          ) : (
            'Save Comment'
          )}
        </button>

        {hasChanges && !saved && (
          <span className="text-sm text-amber-600 flex items-center gap-1">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Unsaved changes
          </span>
        )}
      </div>
    </div>
  );
}
