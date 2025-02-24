// src/lib/utils.js
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
};

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

export const getPostTypeLabel = (type) => {
    const labels = {
        qna: 'Q&A',
        codeshare: 'Code Share',
        daily: 'Daily Summary'
    };
    return labels[type] || type;
};
