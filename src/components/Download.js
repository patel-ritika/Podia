import React from 'react';
import DownloadTop from './download/DownloadTop';
import DownloadSell from './download/DownloadSell';
import DownloadTake from './download/DownloadTake';
import DownloadBundle from './download/DownloadBundle';
import DownloadMigration from './download/DownloadMigration';
import DownloadBusiness from './download/DownloadBusiness';

const Download = () => {
  return (
    <div>
      <DownloadTop/>
      <DownloadSell/>
      <DownloadTake/>
      <DownloadBundle/>
      <DownloadMigration/>
      <DownloadBusiness/>
    </div>
  );
}

export default Download;
