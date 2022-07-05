import React from 'react';
import DocItemFooter from '@theme-original/DocItemFooter';
import Feedback from './Feedback';

export default function DocItemFooterWrapper(props) {
  return (
    <>
      <Feedback />
      <div>I Like cheese</div>
      <DocItemFooter {...props} />
    </>
  );
}
