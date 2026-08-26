import { useEffect, useState } from 'react';
import './Toast.css';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'error' | 'success' | 'info' | 'warning';
  duration?: number; // ms, 0 = no auto-dismiss
}

interface ToastProps {
  messages: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast = ({ messages, onDismiss }: ToastProps) => {
  return (
    <div className="toast-container">
      {messages.map(msg => (
        <ToastItem
          key={msg.id}
          message={msg}
          onDismiss={() => onDismiss(msg.id)}
        />
      ))}
    </div>
  );
};

interface ToastItemProps {
  message: ToastMessage;
  onDismiss: () => void;
}

const ToastItem = ({ message, onDismiss }: ToastItemProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (message.duration === 0) return; // No auto-dismiss

    const duration = message.duration || 4000;
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onDismiss, 300); // Wait for animation
    }, duration);

    return () => clearTimeout(timer);
  }, [message.duration, onDismiss]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onDismiss, 300);
  };

  const iconMap = {
    error: '❌',
    success: '✅',
    info: 'ℹ️',
    warning: '⚠️',
  };

  return (
    <div
      className={`toast toast--${message.type} ${isExiting ? 'toast--exiting' : ''}`}
      role="alert"
    >
      <span className="toast__icon">{iconMap[message.type]}</span>
      <span className="toast__message">{message.message}</span>
      <button
        className="toast__close"
        onClick={handleClose}
        aria-label="ปิด"
      >
        ✕
      </button>
    </div>
  );
};

export const useToast = () => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const show = (message: string, type: 'error' | 'success' | 'info' | 'warning' = 'info', duration = 4000) => {
    const id = Date.now().toString();
    setMessages(prev => [...prev, { id, message, type, duration }]);
  };

  const dismiss = (id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
  };

  const error = (message: string) => show(message, 'error', 4000);
  const success = (message: string) => show(message, 'success', 3000);
  const warning = (message: string) => show(message, 'warning', 4000);
  const info = (message: string) => show(message, 'info', 3000);

  return { messages, dismiss, show, error, success, warning, info };
};
