import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
      <div className="flex items-center gap-4 p-28 justify-center">
        <Spinner />
      </div>
    );
};

export default loading;