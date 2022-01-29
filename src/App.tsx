import React, { useEffect } from 'react';

export const App = React.memo(() => {
  useEffect(() => {
    console.log('object');
  });
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  );
});
