import React from 'react';
import DownloadTop from './download/DownloadTop';
import DownloadSell from './download/DownloadSell';
import DownloadTake from './download/DownloadTake';
import DownloadBundle from './download/DownloadBundle';
import DownloadMigration from './download/DownloadMigration';

const Download = () => {
  return (
    <div>
      <DownloadTop/>
      <DownloadSell/>
      <DownloadTake/>
      <DownloadBundle/>
      <DownloadMigration/>
    </div>
  );
}

export default Download;
