
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function FullScreenLoader() {
    return (
        <div className="fixed top-0 left-0 flex justify-center items-center bg-opacity-5 bg-gray-800">
            <div className="card">
                Loading...
                <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
            </div>
        </div>
    );
}
        