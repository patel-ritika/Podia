import React from 'react';
import DownloadTop from './download/DownloadTop';
import DownloadSell from './download/DownloadSell';
import DownloadTake from './download/DownloadTake';
import DownloadBundle from './download/DownloadBundle';

const Download = () => {
  return (
    <div>
      <DownloadTop/>
      <DownloadSell/>
      <DownloadTake/>
      <DownloadBundle/>
    </div>
  );
}

export default Download;
