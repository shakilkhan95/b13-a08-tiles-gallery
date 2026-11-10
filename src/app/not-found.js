import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
      <div className="flex flex-col items-center gap-4 p-28 justify-center">
        <h2 className="text-2xl font-bold">Not Found!</h2>
        <p className="text-lg">Could not find requested page</p>
        <Button>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    );
};

export default NotFoundPage;