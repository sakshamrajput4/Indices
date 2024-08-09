// src/components/ReviewHighlighter.js
import React from 'react';
import Tooltip from './Tooltip';

function getHighlightColor(sentiment) {
  switch (sentiment) {
    case 'Positive':
      return '#D9F2DD';
    case 'Negative':
      return '#F2DBD9';
    case 'Mixed':
      return '#e8bd6d3d';
    case 'Neutral':
      return '#eaf09b6b';
    default:
      return 'transparent';
  }
}
function applyHighlights(content, highlightIndices, color) {
    let modifiedContent = content;
    highlightIndices.forEach(([start, end, sentiment]) => {
      const highlightText = content.substring(start, end);
      modifiedContent = modifiedContent.replace(
        highlightText,
        `<span style="background-color: ${color};" class="highlight">${highlightText}</span>`
      );
    });
    return modifiedContent;
  }

function ReviewHighlighter({ content, analytics }) {
  let highlightedContent = content;

  analytics.forEach((analysis) => {
    analysis.sentences.forEach((sentence) => {
      const color = getHighlightColor(analysis.sentiment);
      highlightedContent = highlightedContent.replace(
        sentence,
        `<span style="background-color: ${color};" class="highlight" title="${analysis.topic}">${sentence}<Tooltip topic="${analysis.topic}"</span>`
      );
    });
  });

  return <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
}

export default ReviewHighlighter;
