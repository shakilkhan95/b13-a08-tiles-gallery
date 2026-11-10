import { Spinner } from '@heroui/react';

const LoadingPage = () => {
    return (
      <div className="flex items-center gap-4 p-28 justify-center">
        <Spinner />
      </div>
    );
};

export default LoadingPage;