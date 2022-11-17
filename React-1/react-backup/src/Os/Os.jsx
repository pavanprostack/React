import React from 'react';
import os from 'os';

function Os() {
  return (
    <div>
      <p>Platform: {os.platform()}</p>
      <p>Release: {os.release()}</p>
      <p>Arch: {os.arch()}</p>
    </div>
  );
}

export default Os;
